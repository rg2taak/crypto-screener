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
    super("/checkList", "checkListRoute");
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
      "checkList.requestProvincesOfCountry",
    );
    super.post("/cities", [this.CountryController.requestProvincesOfCountry], "checkList.cities");
  }
}
