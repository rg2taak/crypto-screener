"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_route_helper_1 = require("../service-route-helper");
const organization_resume_validator_1 = require("../../../frontend/scripts/validators/engineer-membership/organization-resume-validator");
const axios_module_1 = require("../../../frontend/scripts/modules/axios-module");
/**
 * Organization resume list helper class
 */
class OrgResumeHelper {
    /**
     * Request Organization resume list
     */
    static async requestOrgResumeList(req, res, next) {
        const url = service_route_helper_1.Routes["orgResume.request-org-resume-list"];
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
    }
    /**
     * Delete org resume item list
     */
    static async deleteOrgResumeItemList(item) {
        let result;
        const url = service_route_helper_1.Routes["orgResume.delete-org-resume-item"];
        /* Validate data */
        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        result = {
            success: true,
            data: "حذف با موفقیت انجام شد",
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * Request license level list
     */
    static async requestLicenseLevelList() {
        let result;
        const url = service_route_helper_1.Routes["orgResume.request-province"];
        /* Validate data */
        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        let licenseLevel = (await Promise.resolve().then(() => require("../../../mock/license-level.json")));
        result = {
            success: true,
            data: licenseLevel,
        };
        return result;
        // result = axiosResult.data as ActionResultType;
    }
    /**
     * Request license level list
     */
    static async confirmNewOrgResume(newResume) {
        let result;
        const url = service_route_helper_1.Routes["orgResume.request-province"];
        /* Validate data */
        const validator = new organization_resume_validator_1.default();
        const validationResult = validator.validate(newResume);
        if (!validationResult.success) {
            const validationError = validationResult.data;
            result = {
                success: false,
                data: validationError.errors,
            };
        }
        else {
            /* TODO: send to server */
            // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
            //TODO: Clear this code
            result = {
                success: true,
                data: "ثبت با موفقیت انجام شد",
            };
        }
        return result;
        // result = axiosResult.data as ActionResultType;
    }
}
exports.default = OrgResumeHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnLXJlc3VtZS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy9lbmdpbmVlci1tZW1iZXJzaGlwL29yZy1yZXN1bWUtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0VBQTBEO0FBSTFELDBJQUFtSDtBQUduSCxpRkFBMkQ7QUFJM0Q7O0dBRUc7QUFDSCxNQUFxQixlQUFlO0lBQ2hDOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FDcEMsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUdsQixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFFeEQsNEVBQTRFO1FBQzVFLHVCQUF1QjtRQUN2QixNQUFNLFdBQVcsR0FBa0IsTUFBTSxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBcUIsV0FBVyxDQUFDLElBQXdCLENBQUM7UUFDcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUN2QyxJQUFnQztRQUVoQyxJQUFJLE1BQXdCLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3ZELG1CQUFtQjtRQUVuQiwwQkFBMEI7UUFDMUIsK0VBQStFO1FBQy9FLHVCQUF1QjtRQUN2QixNQUFNLEdBQUc7WUFDTCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSx3QkFBd0I7U0FDYixDQUFDO1FBQ3RCLGlEQUFpRDtRQUVqRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QjtRQUN2QyxJQUFJLE1BQXdCLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2pELG1CQUFtQjtRQUVuQiwwQkFBMEI7UUFDMUIsK0VBQStFO1FBQy9FLHVCQUF1QjtRQUN2QixJQUFJLFlBQVksR0FBNEIsQ0FBQywrRUFFNUMsQ0FBNEIsQ0FBQztRQUM5QixNQUFNLEdBQUc7WUFDTCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUM7UUFFRixPQUFPLE1BQU0sQ0FBQztRQUNkLGlEQUFpRDtJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUNuQyxTQUFxQztRQUVyQyxJQUFJLE1BQXdCLENBQUM7UUFFN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2pELG1CQUFtQjtRQUNuQixNQUFNLFNBQVMsR0FBZ0MsSUFBSSx1Q0FBMkIsRUFBRSxDQUFDO1FBQ2pGLE1BQU0sZ0JBQWdCLEdBQXFCLFNBQVMsQ0FBQyxRQUFRLENBQ3pELFNBQVMsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMzQixNQUFNLGVBQWUsR0FBdUIsZ0JBQWdCLENBQUMsSUFBMEIsQ0FBQztZQUV4RixNQUFNLEdBQUc7Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO2FBQy9CLENBQUM7U0FDTDthQUFNO1lBQ0gsMEJBQTBCO1lBQzFCLCtFQUErRTtZQUMvRSx1QkFBdUI7WUFFdkIsTUFBTSxHQUFHO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSx3QkFBd0I7YUFDakMsQ0FBQztTQUNMO1FBQ0QsT0FBTyxNQUFNLENBQUM7UUFDZCxpREFBaUQ7SUFDckQsQ0FBQztDQUNKO0FBbkdELGtDQW1HQyJ9