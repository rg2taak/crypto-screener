"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_module_1 = require("./base-module");
const express_helper_1 = require("../helpers/express-helper");
/**
 * ExpressModule class
 */
class ExpressModule extends base_module_1.default {
    /**
     * Create module factory
     */
    static createModule() {
        return new ExpressModule();
    }
    /**
     * Get module name
     * @returns string Returns module name
     */
    getModuleName() {
        return "Express";
    }
    /**
     * Boot method
     * @param payload any Payload
     */
    async boot(payload) {
        const expresHelper = new express_helper_1.default();
        await expresHelper.init();
    }
}
exports.default = ExpressModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2NvcmUvbW9kdWxlcy9leHByZXNzLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF1QztBQUN2Qyw4REFBMEQ7QUFHMUQ7O0dBRUc7QUFDSCxNQUFxQixhQUFjLFNBQVEscUJBQVU7SUFDakQ7O09BRUc7SUFDSSxNQUFNLENBQUMsWUFBWTtRQUN0QixPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGFBQWE7UUFDaEIsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBYTtRQUMzQixNQUFNLFlBQVksR0FBa0IsSUFBSSx3QkFBYSxFQUFFLENBQUM7UUFFeEQsTUFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBekJELGdDQXlCQyJ9