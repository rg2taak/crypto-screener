"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edu_resume_helper_1 = require("../../helpers/engineer-membership/edu-resume-helper");
/**
 * Education Resume controller
 */
class EduResumeController {
    /**
     * eduResume/request-edu-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestEduResumeList(req, res, next) {
        const result = await edu_resume_helper_1.default.requestEduResumeList();
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * eduResume/request-edu-grade-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestEduGradeList(req, res, next) {
        const result = await edu_resume_helper_1.default.requestEduGradeList();
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * eduResume/request-field-of-study-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestFieldOfStudyList(req, res, next) {
        const educationGrade = req.body;
        const result = await edu_resume_helper_1.default.requestFieldOfStudyList(educationGrade);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * eduResume/request-academic-orientation-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestAcademicOrientationList(req, res, next) {
        const fieldOfStudy = req.body;
        const result = await edu_resume_helper_1.default.requestAcademicOrientationList(fieldOfStudy);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * eduResume/new-education-resume-register action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async newEducationResumeRegister(req, res, next) {
        const newUserData = req.body;
        const result = await edu_resume_helper_1.default.newEducationResumeRegister(newUserData);
        res.status(200)
            .send(result)
            .end();
    }
}
exports.default = EduResumeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1LXJlc3VtZS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2VuZ2luZWVyLW1lbWJlcnNoaXAvZWR1LXJlc3VtZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkZBQWdGO0FBS2hGOztHQUVHO0FBQ0gsTUFBcUIsbUJBQW1CO0lBQ3BDOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLG9CQUFvQixDQUM3QixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sTUFBTSxHQUFxQixNQUFNLDJCQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUU5RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxtQkFBbUIsQ0FDNUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLE1BQU0sR0FBcUIsTUFBTSwyQkFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFN0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsdUJBQXVCLENBQ2hDLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7UUFFbEIsTUFBTSxjQUFjLEdBQXVCLEdBQUcsQ0FBQyxJQUEwQixDQUFDO1FBRTFFLE1BQU0sTUFBTSxHQUFxQixNQUFNLDJCQUFlLENBQUMsdUJBQXVCLENBQzFFLGNBQWMsQ0FDakIsQ0FBQztRQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLDhCQUE4QixDQUN2QyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sWUFBWSxHQUF5QixHQUFHLENBQUMsSUFBNEIsQ0FBQztRQUU1RSxNQUFNLE1BQU0sR0FBcUIsTUFBTSwyQkFBZSxDQUFDLDhCQUE4QixDQUNqRixZQUFZLENBQ2YsQ0FBQztRQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLDBCQUEwQixDQUNuQyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sV0FBVyxHQUE2QixHQUFHLENBQUMsSUFBZ0MsQ0FBQztRQUVuRixNQUFNLE1BQU0sR0FBcUIsTUFBTSwyQkFBZSxDQUFDLDBCQUEwQixDQUM3RSxXQUFXLENBQ2QsQ0FBQztRQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBdEdELHNDQXNHQyJ9