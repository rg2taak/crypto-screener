import UserIdentificationInformationController from "@BE/Controllers/user-identification-information-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * User identification Information router
 */
export default class UserIdentificationInformationRoute extends BaseRouter {
    private userIdentificationInformationController: UserIdentificationInformationController = new UserIdentificationInformationController();

    /**
     * Constructor
     */
    constructor() {
        super("/userIdentification", "UserIdentificationRoute");
        this.defineRoutes();
    }

    /**
     * Define routes
     */
    private defineRoutes(): void {
        super.get(
            "/requestIdentificationInformation",
            [
                this.userIdentificationInformationController
                    .requestIdentificationInformation,
            ],
            "userIdentification.request-identification-information"
        );

        super.post(
            "/registerUserIdentificationInformation",
            [this.userIdentificationInformationController.registerUserIdentificationInformation],
            "userIdentification.register-user-identification-information"
        );

        super.get(
            "/loadBcLetterCodeList",
            [this.userIdentificationInformationController.loadBcLetterCodeList],
            "userIdentification.load-bc-letter-code-list"
        );
    }
}
