"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_identification_information_helper_1 = require("../helpers/engineer-membership/user-identification-information-helper");
const auth_helper_1 = require("../helpers/auth-helper");
/**
 * User identification information controller
 */
class UserIdentificationInformationController {
    /**
     * userIdentification/request-identification-information action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestIdentificationInformation(req, res, next) {
        let result;
        /* Session load data */
        const isChecked = await auth_helper_1.default.check(req);
        if (isChecked) {
            let sessionData = req.session;
            let nationalId = {
                nationalId: sessionData.nationalId,
            };
            result = (await user_identification_information_helper_1.default.requestIdentificationInformation(nationalId));
            res.status(200)
                .send(result)
                .end();
        }
        else {
            res.render("pages/auth/login.pug");
        }
    }
    /**
     * userIdentification.register-user-identification-information
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async registerUserIdentificationInformation(req, res, next) {
        const userIdentificationCertificate = req.body;
        let sessionData = req.session;
        userIdentificationCertificate.nationalId = sessionData.nationalId;
        const result = await user_identification_information_helper_1.default.registerUserIdentificationInformation(userIdentificationCertificate);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * userIdentification/request-identification-information action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async loadBcLetterCodeList(req, res, next) {
        const result = await user_identification_information_helper_1.default.loadBcLetterCodeList();
        res.status(200)
            .send(result)
            .end();
    }
}
exports.default = UserIdentificationInformationController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pZGVudGlmaWNhdGlvbi1pbmZvcm1hdGlvbi1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL3VzZXItaWRlbnRpZmljYXRpb24taW5mb3JtYXRpb24tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtJQUF5SDtBQUd6SCx3REFBaUQ7QUFHakQ7O0dBRUc7QUFDSCxNQUFxQix1Q0FBdUM7SUFDeEQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsZ0NBQWdDLENBQ3pDLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7UUFFbEIsSUFBSSxNQUF3QixDQUFDO1FBQzdCLHVCQUF1QjtRQUN2QixNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxXQUFXLEdBQXNCLEdBQUcsQ0FBQyxPQUE0QixDQUFDO1lBQ3RFLElBQUksVUFBVSxHQUFtQjtnQkFDN0IsVUFBVSxFQUFFLFdBQVcsQ0FBQyxVQUFvQjthQUM3QixDQUFDO1lBRXBCLE1BQU0sR0FBRyxDQUFDLE1BQU0sZ0RBQW1DLENBQUMsZ0NBQWdDLENBQ2hGLFVBQVUsQ0FDYixDQUFxQixDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ1osR0FBRyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLHFDQUFxQyxDQUM5QyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sNkJBQTZCLEdBQXNDLEdBQUcsQ0FBQyxJQUF5QyxDQUFDO1FBRXZILElBQUksV0FBVyxHQUFzQixHQUFHLENBQUMsT0FBNEIsQ0FBQztRQUN0RSw2QkFBNkIsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQW9CLENBQUM7UUFFNUUsTUFBTSxNQUFNLEdBQXFCLE1BQU0sZ0RBQW1DLENBQUMscUNBQXFDLENBQzVHLDZCQUE2QixDQUNoQyxDQUFDO1FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsb0JBQW9CLENBQzdCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7UUFFbEIsTUFBTSxNQUFNLEdBQXFCLE1BQU0sZ0RBQW1DLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUVsRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQTNFRCwwREEyRUMifQ==