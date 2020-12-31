"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_data_1 = require("../global/global-data");
const router_manager_helper_1 = require("../helpers/router-manager-helper");
const base_module_1 = require("./base-module");
/**
 * Router module
 */
class RouterModule extends base_module_1.default {
    constructor() {
        super(...arguments);
        this._routerManager = new router_manager_helper_1.default();
    }
    /**
     * Router factory
     */
    static createModule() {
        return new RouterModule();
    }
    /**
     * Getter: routerManager
     */
    get routerManager() {
        return this._routerManager;
    }
    /**
     * Get router name
     * @returns string Get the module name
     */
    getModuleName() {
        return "Router";
    }
    /**
     * Boot module
     * @param payload any Payload object
     */
    async boot(payload) {
        await router_manager_helper_1.default.loadStaticData();
        await this._routerManager.initRouters();
        global_data_1.default.events.raise("RouterInitialized", this._routerManager);
    }
}
exports.default = RouterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29yZS9tb2R1bGVzL3JvdXRlci1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBbUQ7QUFDbkQsNEVBQWlFO0FBRWpFLCtDQUF1QztBQUV2Qzs7R0FFRztBQUNILE1BQXFCLFlBQWEsU0FBUSxxQkFBVTtJQUFwRDs7UUFDWSxtQkFBYyxHQUFrQixJQUFJLCtCQUFhLEVBQUUsQ0FBQztJQWtDaEUsQ0FBQztJQWhDRzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxZQUFZO1FBQ3RCLE9BQU8sSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSSxhQUFhO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWE7UUFDM0IsTUFBTSwrQkFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4QyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQW5DRCwrQkFtQ0MifQ==