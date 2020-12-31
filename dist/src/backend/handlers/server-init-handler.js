"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const global_data_1 = require("../../core/global/global-data");
const redis_helper_1 = require("../helpers/redis-helper");
const global_helper_1 = require("../helpers/global-helper");
const sms_center_1 = require("../helpers/sms-center");
/**
 * Server-init handler
 */
class ServerInitHandler {
    /**
     * Get handler name
     */
    getEventName() {
        return "ServerInit";
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
        global_data_1.default.logger.info(`${chalk_1.yellow(this.getEventName())} handler initialized successfully\n\t${payload.readyAt}`);
        this.initServerHelper();
    }
    /**
     * Init server helpers
     */
    async initServerHelper() {
        /* Redis helper */
        global_helper_1.default.redisHelper = new redis_helper_1.default();
        await global_helper_1.default.redisHelper.connect();
        /* Sms Helper */
        global_helper_1.default.smsCenter = new sms_center_1.default();
    }
}
exports.default = ServerInitHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWluaXQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvYmFja2VuZC9oYW5kbGVycy9zZXJ2ZXItaW5pdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQStCO0FBQy9CLCtEQUFrRDtBQUVsRCwwREFBbUQ7QUFDbkQsNERBQXFEO0FBQ3JELHNEQUErQztBQUUvQzs7R0FFRztBQUNILE1BQXFCLGlCQUFpQjtJQUNsQzs7T0FFRztJQUNILFlBQVk7UUFDUixPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFZO1FBQzlCLHFCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEIsR0FBRyxjQUFNLENBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUN0Qix3Q0FBd0MsQ0FDNUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQVk7UUFDNUIscUJBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQixHQUFHLGNBQU0sQ0FDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQ3RCLHdDQUF3QyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQzdELENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxLQUFLLENBQUMsZ0JBQWdCO1FBQzFCLGtCQUFrQjtRQUNsQix1QkFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLHNCQUFXLEVBQUUsQ0FBQztRQUM3QyxNQUFNLHVCQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXpDLGdCQUFnQjtRQUNoQix1QkFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFTLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUE3Q0Qsb0NBNkNDIn0=