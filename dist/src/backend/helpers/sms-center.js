"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_data_1 = require("../../core/global/global-data");
const global_methods_1 = require("../../core/global/global-methods");
const axios_1 = require("axios");
class SmsCenter {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Send sms flag
         */
        this._config = {};
        this.loadConfigs();
    }
    /**
     * Load configs
     */
    async loadConfigs() {
        this._config = await global_methods_1.default.config("backend/sms");
    }
    /**
     * Send sms
     * @param string
     * @param to
     * @param string
     * @param message
     */
    async sendSms(target, message, sendDate, checkingIds) {
        const data = {
            message,
            sender: this._config.number,
            Receptor: target,
            senddate: sendDate,
            checkingids: checkingIds,
        };
        const axiosHeaders = {
            headers: this._config.headers,
        };
        try {
            if (this._config.sendSms) {
                return await axios_1.default.post(this._config.url, data, axiosHeaders);
            }
        }
        catch (err) {
            global_data_1.default.logger.error(err);
            return null;
        }
    }
}
exports.default = SmsCenter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLWNlbnRlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvYmFja2VuZC9oZWxwZXJzL3Ntcy1jZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBa0Q7QUFDbEQscUVBQXdEO0FBRXhELGlDQUFrRDtBQUVsRCxNQUFxQixTQUFTO0lBTTVCOztPQUVHO0lBQ0g7UUFSQTs7V0FFRztRQUNLLFlBQU8sR0FBa0IsRUFBbUIsQ0FBQztRQU1uRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssS0FBSyxDQUFDLFdBQVc7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLHdCQUFhLENBQUMsTUFBTSxDQUN2QyxhQUFhLENBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsT0FBTyxDQUNsQixNQUFjLEVBQ2QsT0FBZSxFQUNmLFFBQWlCLEVBQ2pCLFdBQW9CO1FBRXBCLE1BQU0sSUFBSSxHQUFHO1lBQ1gsT0FBTztZQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDM0IsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUF1QjtZQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1NBQzlCLENBQUM7UUFFRixJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsT0FBTyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLHFCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU3QixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUNGO0FBekRELDRCQXlEQyJ9