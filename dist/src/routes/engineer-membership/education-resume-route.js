"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edu_resume_controller_1 = require("../../backend/controllers/engineer-membership/edu-resume-controller");
const base_router_helper_1 = require("../../core/helpers/base-router-helper");
/**
 * Education resume router
 */
class EduResumeRoute extends base_router_helper_1.default {
    /**
       * Constructor
       */
    constructor() {
        super("/eduResume", "eduResumeRoute");
        this.defineRoutes();
    }
    /**
       * Define routes
       */
    defineRoutes() {
        const controller = new edu_resume_controller_1.default();
        super.get("/requestEduResumeList", [
            controller.requestEduResumeList.bind(controller),
        ], "eduResume.request-edu-resume-list");
        super.get("/requestEduGradeList", [
            controller.requestEduGradeList.bind(controller),
        ], "eduResume.request-edu-grade-list");
        super.post("/requestFieldOfStudyList", [
            controller.requestFieldOfStudyList.bind(controller),
        ], "eduResume.request-field-of-study-list");
        super.post("/requestAcademicOrientationList", [
            controller.requestAcademicOrientationList.bind(controller),
        ], "eduResume.request-academic-orientation-list");
        super.post("/newEducationResumeRegister", [
            controller.newEducationResumeRegister.bind(controller),
        ], "eduResume.new-education-resume-register");
        // super.post(
        //     "/deleteOrgResumeItemList",
        //     [
        //         controller.deleteOrgResumeItemList.bind(controller),
        //     ],
        //     "eduResume.request-field-of-study-list"
        // );
    }
}
exports.default = EduResumeRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLXJlc3VtZS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL2VuZ2luZWVyLW1lbWJlcnNoaXAvZWR1Y2F0aW9uLXJlc3VtZS1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtHQUE0RjtBQUM1Riw4RUFBMEQ7QUFFMUQ7O0dBRUc7QUFDSCxNQUFxQixjQUFlLFNBQVEsNEJBQVU7SUFDcEQ7O1NBRUs7SUFDTDtRQUNFLEtBQUssQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztTQUVLO0lBQ0csWUFBWTtRQUNsQixNQUFNLFVBQVUsR0FBd0IsSUFBSSwrQkFBbUIsRUFBRSxDQUFDO1FBRWxFLEtBQUssQ0FBQyxHQUFHLENBQ1AsdUJBQXVCLEVBQ3ZCO1lBQ0UsVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQsRUFDRCxtQ0FBbUMsQ0FDcEMsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQ1Asc0JBQXNCLEVBQ3RCO1lBQ0UsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDaEQsRUFDRCxrQ0FBa0MsQ0FDbkMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ1IsMEJBQTBCLEVBQzFCO1lBQ0UsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDcEQsRUFDRCx1Q0FBdUMsQ0FDeEMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ1IsaUNBQWlDLEVBQ2pDO1lBQ0UsVUFBVSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDM0QsRUFDRCw2Q0FBNkMsQ0FDOUMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ1IsNkJBQTZCLEVBQzdCO1lBQ0UsVUFBVSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkQsRUFDRCx5Q0FBeUMsQ0FDMUMsQ0FBQztRQUVGLGNBQWM7UUFDZCxrQ0FBa0M7UUFDbEMsUUFBUTtRQUNSLCtEQUErRDtRQUMvRCxTQUFTO1FBQ1QsOENBQThDO1FBQzlDLEtBQUs7SUFDUCxDQUFDO0NBQ0Y7QUEvREQsaUNBK0RDIn0=