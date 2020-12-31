"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const org_resume_helper_1 = require("../../helpers/engineer-membership/org-resume-helper");
const service_route_helper_1 = require("../../helpers/service-route-helper");
const axios_module_1 = require("../../../frontend/scripts/modules/axios-module");
/**
 * Organization Resume controller
 */
class OrgResumeController {
    /**
     * orgResume/request-org-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestOrgResumeList(req, res, next) {
        const url = service_route_helper_1.Routes["auth.request-cities-of-qazvin"];
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * orgResume/request-org-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async deleteOrgResumeItemList(req, res, next) {
        const item = req.body;
        const result = await org_resume_helper_1.default.deleteOrgResumeItemList(item);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * orgResume/request-province-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestProvincesOfIran(req, res, next) {
        const url = service_route_helper_1.Routes["auth.request-provinces-of-iran"];
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * orgResume/request-license-level-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestLicenseLevelList(req, res, next) {
        const result = await org_resume_helper_1.default.requestLicenseLevelList();
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * orgResume/request-license-level-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async confirmNewOrgResume(req, res, next) {
        const newResume = req.body;
        const result = await org_resume_helper_1.default.confirmNewOrgResume(newResume);
        res.status(200)
            .send(result)
            .end();
    }
}
exports.default = OrgResumeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnLXJlc3VtZS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2VuZ2luZWVyLW1lbWJlcnNoaXAvb3JnLXJlc3VtZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkZBQWdGO0FBRWhGLDZFQUEwRDtBQUUxRCxpRkFBMkQ7QUFFM0Q7O0dBRUc7QUFDSCxNQUFxQixtQkFBbUI7SUFDcEM7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsb0JBQW9CLENBQzdCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7UUFFbEIsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksTUFBTSxHQUFxQixXQUFXLENBQUMsSUFBd0IsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyx1QkFBdUIsQ0FDaEMsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLElBQUksR0FBK0IsR0FBRyxDQUFDLElBQWtDLENBQUM7UUFDaEYsTUFBTSxNQUFNLEdBQXFCLE1BQU0sMkJBQWUsQ0FBQyx1QkFBdUIsQ0FDMUUsSUFBSSxDQUNQLENBQUM7UUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxzQkFBc0IsQ0FDL0IsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDckQsTUFBTSxXQUFXLEdBQWtCLE1BQU0sc0JBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxNQUFNLEdBQXFCLFdBQVcsQ0FBQyxJQUF3QixDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLHVCQUF1QixDQUNoQyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sTUFBTSxHQUFxQixNQUFNLDJCQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUVqRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxtQkFBbUIsQ0FDNUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLFNBQVMsR0FBK0IsR0FBRyxDQUFDLElBQWtDLENBQUM7UUFDckYsTUFBTSxNQUFNLEdBQXFCLE1BQU0sMkJBQWUsQ0FBQyxtQkFBbUIsQ0FDdEUsU0FBUyxDQUNaLENBQUM7UUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWxHRCxzQ0FrR0MifQ==