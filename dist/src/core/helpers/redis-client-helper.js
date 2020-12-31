"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_data_1 = require("../global/global-data");
const redis_1 = require("redis");
/**
 * Redis-client helper class
 */
class RedisClientHelper {
    /**
     * Redis class ctr
     * @param option RedisOptionType Options
     */
    constructor(options) {
        this._client = undefined;
        this.clientOptions = {};
        this.clientOptions = options || {};
    }
    /**
     * Get redis client
     * @returns RedisClient redis client
     */
    get client() {
        if (null == this._client) {
            throw new Error("Client is undefined");
        }
        return this._client;
    }
    /**
     * Connect to server
     */
    connect() {
        return new Promise((resolve, reject) => {
            this._client = redis_1.createClient(this.clientOptions);
            /* Setup event listeners */
            this.client.on("error", (err) => {
                global_data_1.default.logger.error(JSON.stringify(err));
                reject(err);
            });
            this.client.on("connect", () => {
                global_data_1.default.logger.info("Redis client connected");
            });
            this.client.on("reconnecting", () => {
                global_data_1.default.logger.warn("Redis client reconnecting");
            });
            this.client.on("end", () => {
                global_data_1.default.logger.info("Redis client connection has been closed");
            });
            if (null != this.clientOptions.password) {
                /* Callback function */
                const cb = (err, data) => {
                    if (err) {
                        global_data_1.default.logger.error(JSON.stringify(err));
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                };
                this.client.auth(this.clientOptions.password, cb);
            }
            else {
                resolve();
            }
        });
    }
    /**
     * Disconnect from server
     */
    disconnect() {
        this.client.end();
    }
    /**
     * Change database
     * @param db number|string DB index
     */
    selectDB(db) {
        return new Promise((resolve, reject) => {
            /* Callback function */
            const cb = (err, data) => {
                if (err) {
                    global_data_1.default.logger.error(JSON.stringify(err));
                    reject(err);
                }
                else {
                    resolve(true);
                }
            };
            this.client.select(db, cb);
        });
    }
    /**
     * Run a command - promise based
     */
    run(cmd, ...args) {
        return new Promise((resolve, reject) => {
            /* Callback function */
            const cb = (err, data) => {
                if (err) {
                    global_data_1.default.logger.error(JSON.stringify(err));
                    reject(err);
                }
                else {
                    resolve(data);
                }
            };
            /* Send command */
            this.client.sendCommand(cmd, args, cb);
        });
    }
}
exports.default = RedisClientHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMtY2xpZW50LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29yZS9oZWxwZXJzL3JlZGlzLWNsaWVudC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBa0Q7QUFDbEQsaUNBQXdFO0FBRXhFOztHQUVHO0FBQ0gsTUFBcUIsaUJBQWlCO0lBZ0JsQzs7O09BR0c7SUFDSCxZQUFZLE9BQW9CO1FBbkJ4QixZQUFPLEdBQWlCLFNBQVMsQ0FBQztRQUNsQyxrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQW1CbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLElBQUssRUFBaUIsQ0FBQztJQUN2RCxDQUFDO0lBbEJEOzs7T0FHRztJQUNILElBQUksTUFBTTtRQUNOLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFVRDs7T0FFRztJQUNJLE9BQU87UUFDVixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBUSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFaEQsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM1QixxQkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUMzQixxQkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7Z0JBQ2hDLHFCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDdkIscUJBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQix5Q0FBeUMsQ0FDNUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JDLHVCQUF1QjtnQkFDdkIsTUFBTSxFQUFFLEdBQWtCLENBQUMsR0FBaUIsRUFBRSxJQUFTLEVBQUUsRUFBRTtvQkFDdkQsSUFBSSxHQUFHLEVBQUU7d0JBQ0wscUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNILE9BQU8sRUFBRSxDQUFDO3FCQUNiO2dCQUNMLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNyRDtpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLEVBQW1CO1FBQy9CLE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDNUMsdUJBQXVCO1lBQ3ZCLE1BQU0sRUFBRSxHQUFrQixDQUFDLEdBQWlCLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZELElBQUksR0FBRyxFQUFFO29CQUNMLHFCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQWM7UUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyx1QkFBdUI7WUFDdkIsTUFBTSxFQUFFLEdBQWtCLENBQUMsR0FBaUIsRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxHQUFHLEVBQUU7b0JBQ0wscUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7WUFDTCxDQUFDLENBQUM7WUFFRixrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWpIRCxvQ0FpSEMifQ==