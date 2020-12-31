"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const country_controller_1 = require("../backend/controllers/country-controller");
const base_router_helper_1 = require("../core/helpers/base-router-helper");
/**
 * Country router
 */
class CountryRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("/checkList", "checkListRoute");
        this.CountryController = new country_controller_1.default();
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        super.get("/", [this.CountryController.countries], "country.countries");
        super.post("/requestProvincesOfCountry", [this.CountryController.requestProvincesOfCountry], "checkList.requestProvincesOfCountry");
        super.post("/cities", [this.CountryController.requestProvincesOfCountry], "checkList.cities");
    }
}
exports.default = CountryRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stbGlzdC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL2NoZWNrLWxpc3Qtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRkFBbUU7QUFDbkUsMkVBQTBEO0FBRTFEOztHQUVHO0FBQ0gsTUFBcUIsWUFBYSxTQUFRLDRCQUFVO0lBR2xEOztPQUVHO0lBQ0g7UUFDRSxLQUFLLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFOaEMsc0JBQWlCLEdBQXNCLElBQUksNEJBQWlCLEVBQUUsQ0FBQztRQU9yRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hFLEtBQUssQ0FBQyxJQUFJLENBQ1IsNEJBQTRCLEVBQzVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLEVBQ2xELHFDQUFxQyxDQUN0QyxDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Q0FDRjtBQXZCRCwrQkF1QkMifQ==