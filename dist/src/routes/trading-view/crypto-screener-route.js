"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_screener_controllers_1 = require("../../backend/controllers/trading-view/crypto-screener-controllers");
const base_router_helper_1 = require("../../core/helpers/base-router-helper");
/**
 * Organization resume router
 */
class CryptoScreenerRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("/screener", "screenerRoute");
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        const controller = new crypto_screener_controllers_1.default();
        super.get("/requestCryptoScreenerListData", [controller.requestCryptoScreenerListData.bind(controller)], "screener.request-crypto-screener-list-data");
    }
}
exports.default = CryptoScreenerRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLXNjcmVlbmVyLXJvdXRlLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvdHJhZGluZy12aWV3L2NyeXB0by1zY3JlZW5lci1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9IQUFpRztBQUNqRyw4RUFBMEQ7QUFFMUQ7O0dBRUc7QUFDSCxNQUFxQixtQkFBb0IsU0FBUSw0QkFBVTtJQUN2RDs7T0FFRztJQUNIO1FBQ0ksS0FBSyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNoQixNQUFNLFVBQVUsR0FBOEIsSUFBSSxxQ0FBeUIsRUFBRSxDQUFDO1FBRTlFLEtBQUssQ0FBQyxHQUFHLENBQ0wsZ0NBQWdDLEVBQ2hDLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUMzRCw0Q0FBNEMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQXJCRCxzQ0FxQkMifQ==