import EduResumeController from "@BE/Controllers/engineer-membership/edu-resume-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * Education resume router
 */
export default class EduResumeRoute extends BaseRouter {
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
  private defineRoutes(): void {
    const controller: EduResumeController = new EduResumeController();

    super.get(
      "/requestEduResumeList",
      [
        controller.requestEduResumeList.bind(controller),
      ],
      "eduResume.request-edu-resume-list",
    );

    super.get(
      "/requestEduGradeList",
      [
        controller.requestEduGradeList.bind(controller),
      ],
      "eduResume.request-edu-grade-list",
    );

    super.post(
      "/requestFieldOfStudyList",
      [
        controller.requestFieldOfStudyList.bind(controller),
      ],
      "eduResume.request-field-of-study-list",
    );

    super.post(
      "/requestAcademicOrientationList",
      [
        controller.requestAcademicOrientationList.bind(controller),
      ],
      "eduResume.request-academic-orientation-list",
    );
    
    super.post(
      "/newEducationResumeRegister",
      [
        controller.newEducationResumeRegister.bind(controller),
      ],
      "eduResume.new-education-resume-register",
    );

    // super.post(
    //     "/deleteOrgResumeItemList",
    //     [
    //         controller.deleteOrgResumeItemList.bind(controller),
    //     ],
    //     "eduResume.request-field-of-study-list"
    // );
  }
}
