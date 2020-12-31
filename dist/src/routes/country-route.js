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
        super("/countires", "CountryRoute");
        this.CountryController = new country_controller_1.default();
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        super.get("/", [this.CountryController.countries], "country.countries");
        super.post("/requestProvincesOfCountry", [this.CountryController.requestProvincesOfCountry], "country.request-provinces-of-country");
        super.post("/requestCitiesOfProvince", [this.CountryController.requestCitiesOfProvince], "country.request-cities-of-province");
        super.post("/requestCitiesOfQazvin", [this.CountryController.requestCitiesOfQazvin], "country.request-cities-of-qazvin");
        super.post("/requestProvincesOfIran", [this.CountryController.requestProvincesOfIran], "country.request-provinces-of-iran");
    }
}
exports.default = CountryRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL2NvdW50cnktcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRkFBbUU7QUFDbkUsMkVBQTBEO0FBRTFEOztHQUVHO0FBQ0gsTUFBcUIsWUFBYSxTQUFRLDRCQUFVO0lBR2hEOztPQUVHO0lBQ0g7UUFDSSxLQUFLLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBTmhDLHNCQUFpQixHQUFzQixJQUFJLDRCQUFpQixFQUFFLENBQUM7UUFPbkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNLLFlBQVk7UUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN4RSxLQUFLLENBQUMsSUFBSSxDQUNOLDRCQUE0QixFQUM1QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxFQUNsRCxzQ0FBc0MsQ0FDekMsQ0FBQztRQUNGLEtBQUssQ0FBQyxJQUFJLENBQ04sMEJBQTBCLEVBQzFCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLEVBQ2hELG9DQUFvQyxDQUN2QyxDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksQ0FDTix3QkFBd0IsRUFDeEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsRUFDOUMsa0NBQWtDLENBQ3JDLENBQUM7UUFDRixLQUFLLENBQUMsSUFBSSxDQUNOLHlCQUF5QixFQUN6QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxFQUMvQyxtQ0FBbUMsQ0FDdEMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQXJDRCwrQkFxQ0MifQ==