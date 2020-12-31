import NationalIdCardController from "@BE/Controllers/engineer-membership/national-id-card-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * National id card route
 */
export default class NationalIdCardRoute extends BaseRouter {
    /**
     * Constructor
     */
    constructor() {
        super("/nationalId", "nationalIdRoute");
        this.defineRoutes();
    }

    /**
     * Define routes
     */
    private defineRoutes(): void {
        const controller: NationalIdCardController = new NationalIdCardController();

        super.post(
            "/requestNationalIdData",
            [controller.requestNationalIdData.bind(controller)],
            "nationalId.request-national-id-data"
        );

        super.post(
            "/registerNationalIdCard",
            [controller.registerNationalIdCard.bind(controller)],
            "nationalId.register-national-id-card"
        );
    }
}
