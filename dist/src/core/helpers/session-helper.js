"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Session = require("express-session");
const ConnectRedis = require("connect-redis");
const global_methods_1 = require("../global/global-methods");
const redis_client_helper_1 = require("./redis-client-helper");
/**
 * Events class
 */
class SessionHelper {
    /**
     * Initialize Session
     * @param app Application
     */
    async init(app) {
        const config = (await global_methods_1.default.config("core/session"));
        /* Init Session */
        let sessionStore;
        switch (config.store) {
            case "redis":
                sessionStore = await this.createRedisSessionStore();
                break;
            case "memory":
            default:
                sessionStore = new Session.MemoryStore();
                break;
        }
        /* Setup session */
        config.options.store = sessionStore;
        /* Setup application */
        app.use(Session(config.options));
    }
    /**
     * Create a Redis-Session Store
     */
    async createRedisSessionStore() {
        let config = (await global_methods_1.default.config("core/redis"));
        /* Intialize redis-client */
        const redisHelper = new redis_client_helper_1.default(config);
        await redisHelper.connect();
        /* Init RedisStore */
        let RedisStore = ConnectRedis(Session);
        const redisStore = new RedisStore({
            client: redisHelper.client,
        });
        return redisStore;
    }
}
exports.default = SessionHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2NvcmUvaGVscGVycy9zZXNzaW9uLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFFOUMsNkRBQXlEO0FBQ3pELCtEQUFzRDtBQUd0RDs7R0FFRztBQUNILE1BQXFCLGFBQWE7SUFDOUI7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFnQjtRQUM5QixNQUFNLE1BQU0sR0FBc0IsQ0FBQyxNQUFNLHdCQUFhLENBQUMsTUFBTSxDQUN6RCxjQUFjLENBQ2pCLENBQXNCLENBQUM7UUFFeEIsa0JBQWtCO1FBQ2xCLElBQUksWUFBaUQsQ0FBQztRQUV0RCxRQUFRLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsS0FBSyxPQUFPO2dCQUNSLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUNwRCxNQUFNO1lBRVYsS0FBSyxRQUFRLENBQUM7WUFDZDtnQkFDSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pDLE1BQU07U0FDYjtRQUVELG1CQUFtQjtRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFFcEMsdUJBQXVCO1FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNLLEtBQUssQ0FBQyx1QkFBdUI7UUFDakMsSUFBSSxNQUFNLEdBQWUsQ0FBQyxNQUFNLHdCQUFhLENBQUMsTUFBTSxDQUNoRCxZQUFZLENBQ2YsQ0FBZSxDQUFDO1FBRWpCLDRCQUE0QjtRQUM1QixNQUFNLFdBQVcsR0FBc0IsSUFBSSw2QkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixxQkFBcUI7UUFDckIsSUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sVUFBVSxHQUE0QixJQUFJLFVBQVUsQ0FBQztZQUN2RCxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07U0FDN0IsQ0FBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUNKO0FBbkRELGdDQW1EQyJ9