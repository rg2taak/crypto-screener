import OrgResumeController from "@BE/Controllers/engineer-membership/org-resume-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * Organization resume router
 */
export default class OrgResumeRoute extends BaseRouter {
    /**
     * Constructor
     */
    constructor() {
        super("/orgResume", "orgResumeRoute");
        this.defineRoutes();
    }

    /**
     * Define routes
     */
    private defineRoutes(): void {
        const controller: OrgResumeController = new OrgResumeController();

        super.get(
            "/requestOrgResumeList",
            [controller.requestOrgResumeList.bind(controller)],
            "orgResume.request-org-resume-list"
        );

        super.post(
            "/deleteOrgResumeItemList",
            [controller.deleteOrgResumeItemList.bind(controller)],
            "orgResume.delete-org-resume-item-list"
        );

        super.post(
            "/requestProvincesOfIran",
            [controller.requestProvincesOfIran.bind(controller)],
            "orgResume.request-provinces-of-iran"
        );

        super.get(
            "/requestLicenseLevelList",
            [controller.requestLicenseLevelList.bind(controller)],
            "orgResume.request-license-level-list"
        );

        super.post(
            "/confirmNewOrgResume",
            [controller.confirmNewOrgResume.bind(controller)],
            "orgResume.confirm-new-org-resume"
        );
    }
}
