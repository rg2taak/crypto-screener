import CountryController from "@BE/Controllers/country-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * Country router
 */
export default class CountryRoute extends BaseRouter {
    private CountryController: CountryController = new CountryController();

    /**
     * Constructor
     */
    constructor() {
        super("/countires", "CountryRoute");
        this.defineRoutes();
    }

    /**
     * Define routes
     */
    private defineRoutes(): void {
        super.get("/", [this.CountryController.countries], "country.countries");
        super.post(
            "/requestProvincesOfCountry",
            [this.CountryController.requestProvincesOfCountry],
            "country.request-provinces-of-country"
        );
        super.post(
            "/requestCitiesOfProvince",
            [this.CountryController.requestCitiesOfProvince],
            "country.request-cities-of-province"
        );
        super.post(
            "/requestCitiesOfQazvin",
            [this.CountryController.requestCitiesOfQazvin],
            "country.request-cities-of-qazvin"
        );
        super.post(
            "/requestProvincesOfIran",
            [this.CountryController.requestProvincesOfIran],
            "country.request-provinces-of-iran"
        );
    }
}
