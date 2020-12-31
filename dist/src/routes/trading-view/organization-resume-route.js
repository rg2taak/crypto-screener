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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLXJlc3VtZS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL3RyYWRpbmctdmlldy9vcmdhbml6YXRpb24tcmVzdW1lLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0dBQTRGO0FBQzVGLDhFQUEwRDtBQUUxRDs7R0FFRztBQUNILE1BQXFCLGNBQWUsU0FBUSw0QkFBVTtJQUNsRDs7T0FFRztJQUNIO1FBQ0ksS0FBSyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2hCLE1BQU0sVUFBVSxHQUF3QixJQUFJLCtCQUFtQixFQUFFLENBQUM7UUFFbEUsS0FBSyxDQUFDLEdBQUcsQ0FDTCx1QkFBdUIsRUFDdkIsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ2xELG1DQUFtQyxDQUN0QyxDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDTiwwQkFBMEIsRUFDMUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3JELHVDQUF1QyxDQUMxQyxDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDTix5QkFBeUIsRUFDekIsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3BELHFDQUFxQyxDQUN4QyxDQUFDO1FBRUYsS0FBSyxDQUFDLEdBQUcsQ0FDTCwwQkFBMEIsRUFDMUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3JELHNDQUFzQyxDQUN6QyxDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDTixzQkFBc0IsRUFDdEIsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ2pELGtDQUFrQyxDQUNyQyxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBN0NELGlDQTZDQyJ9