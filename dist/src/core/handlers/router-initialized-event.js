"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const global_data_1 = require("../global/global-data");
/**
 * Server-init handler
 */
class ServerInitHandler {
    /**
     * Get handler name
     */
    getEventName() {
        return "RouterInitialized";
    }
    /**
     * Boot event
     * @param payload any Payload object
     */
    async register(payload) {
        global_data_1.default.logger.info(`${chalk_1.yellow(this.getEventName())} event-handler registered successfully`);
    }
    /**
     * Handle method
     * @param payload any Payload data
     */
    async handle(payload) {
        const routerManager = payload;
        /* Create manifest file */
        await routerManager.createManifestFile();
    }
}
exports.default = ServerInitHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWluaXRpYWxpemVkLWV2ZW50LmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL2hhbmRsZXJzL3JvdXRlci1pbml0aWFsaXplZC1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUErQjtBQUMvQix1REFBbUQ7QUFJbkQ7O0dBRUc7QUFDSCxNQUFxQixpQkFBaUI7SUFDbEM7O09BRUc7SUFDSCxZQUFZO1FBQ1IsT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFZO1FBQzlCLHFCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEIsR0FBRyxjQUFNLENBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUN0Qix3Q0FBd0MsQ0FDNUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQVk7UUFDNUIsTUFBTSxhQUFhLEdBQWtCLE9BQXdCLENBQUM7UUFFOUQsMEJBQTBCO1FBQzFCLE1BQU0sYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBOUJELG9DQThCQyJ9