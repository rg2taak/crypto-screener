"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const org_resume_controller_1 = require("../../backend/controllers/engineer-membership/org-resume-controller");
const base_router_helper_1 = require("../../core/helpers/base-router-helper");
/**
 * Organization resume router
 */
class OrgResumeRoute extends base_router_helper_1.default {
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
    defineRoutes() {
        const controller = new org_resume_controller_1.default();
        super.get("/requestOrgResumeList", [controller.requestOrgResumeList.bind(controller)], "orgResume.request-org-resume-list");
        super.post("/deleteOrgResumeItemList", [controller.deleteOrgResumeItemList.bind(controller)], "orgResume.delete-org-resume-item-list");
        super.post("/requestProvincesOfIran", [controller.requestProvincesOfIran.bind(controller)], "orgResume.request-provinces-of-iran");
        super.get("/requestLicenseLevelList", [controller.requestLicenseLevelList.bind(controller)], "orgResume.request-license-level-list");
        super.post("/confirmNewOrgResume", [controller.confirmNewOrgResume.bind(controller)], "orgResume.confirm-new-org-resume");
    }
}
exports.default = OrgResumeRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLXJlc3VtZS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL2VuZ2luZWVyLW1lbWJlcnNoaXAvb3JnYW5pemF0aW9uLXJlc3VtZS1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtHQUE0RjtBQUM1Riw4RUFBMEQ7QUFFMUQ7O0dBRUc7QUFDSCxNQUFxQixjQUFlLFNBQVEsNEJBQVU7SUFDbEQ7O09BRUc7SUFDSDtRQUNJLEtBQUssQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNoQixNQUFNLFVBQVUsR0FBd0IsSUFBSSwrQkFBbUIsRUFBRSxDQUFDO1FBRWxFLEtBQUssQ0FBQyxHQUFHLENBQ0wsdUJBQXVCLEVBQ3ZCLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNsRCxtQ0FBbUMsQ0FDdEMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ04sMEJBQTBCLEVBQzFCLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNyRCx1Q0FBdUMsQ0FDMUMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ04seUJBQXlCLEVBQ3pCLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNwRCxxQ0FBcUMsQ0FDeEMsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQ0wsMEJBQTBCLEVBQzFCLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNyRCxzQ0FBc0MsQ0FDekMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ04sc0JBQXNCLEVBQ3RCLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqRCxrQ0FBa0MsQ0FDckMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQTdDRCxpQ0E2Q0MifQ==