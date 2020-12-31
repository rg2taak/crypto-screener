"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_methods_1 = require("../../core/global/global-methods");
const redis_client_helper_1 = require("../../core/helpers/redis-client-helper");
/**
 * Redis client
 */
class RedisHelper {
    constructor() {
        this._redisClient = undefined;
    }
    /**
     * Getter: _redisClient
     */
    get redisClient() {
        return this._redisClient;
    }
    /**
     * Connect
     */
    async connect() {
        const config = await global_methods_1.default.config("core/redis");
        if (!config.host) {
            return;
        }
        this._redisClient = new redis_client_helper_1.default(config);
        await this.redisClient.connect();
    }
    /**
     * DisConnect
     */
    async disconnect() {
        await this.redisClient.disconnect();
    }
    /**
     * DisConnect
     */
    async runCmd(cmd, ...args) {
        return this.redisClient.run(cmd, ...args);
    }
}
exports.default = RedisHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMtaGVscGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2hlbHBlcnMvcmVkaXMtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBQXdEO0FBQ3hELGdGQUFrRTtBQUdsRTs7R0FFRztBQUNILE1BQXFCLFdBQVc7SUFBaEM7UUFDWSxpQkFBWSxHQUF1QixTQUFTLENBQUM7SUFvQ3pELENBQUM7SUFsQ0c7O09BRUc7SUFDSCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBaUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsT0FBTztRQUNoQixNQUFNLE1BQU0sR0FBZSxNQUFNLHdCQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDZCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFjO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBckNELDhCQXFDQyJ9