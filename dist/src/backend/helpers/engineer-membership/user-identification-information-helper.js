"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_identification_information_validator_1 = require("../../../frontend/scripts/validators/engineer-membership/user-identification-information-validator");
const service_route_helper_1 = require("../service-route-helper");
const user_nationalid_validator_1 = require("../../../frontend/scripts/validators/auth/user-nationalid-validator");
const axios_module_1 = require("../../../frontend/scripts/modules/axios-module");
/**
 * User identification information helper class
 */
class UserIdentificationInformationHelper {
    /**
     * Request identification information
     */
    static async requestIdentificationInformation(nationalID) {
        let result;
        const url = service_route_helper_1.Routes["userId.reg-user-id-info"];
        /* Validate data */
        const validator = new user_nationalid_validator_1.default();
        const validationResult = validator.validate(nationalID);
        if (!validationResult.success) {
            const validationError = validationResult.data;
            result = {
                success: false,
                data: validationError.errors,
            };
        }
        else {
            const axiosResult = await axios_module_1.default.post(url, nationalID.nationalId);
            result = axiosResult.data;
        }
        return result;
    }
    /**
     * Register user identification information
     */
    static async registerUserIdentificationInformation(userIdentificationCertificate) {
        let result;
        const url = service_route_helper_1.Routes["userId.register-user-identification-information"];
        /* Validate data */
        const validator = new user_identification_information_validator_1.default();
        const validationResult = validator.validate(userIdentificationCertificate);
        if (!validationResult.success) {
            const validationError = validationResult.data;
            result = {
                success: false,
                data: validationError.errors,
            };
        }
        else {
            console.log(userIdentificationCertificate);
            const axiosResult = await axios_module_1.default.post(url, userIdentificationCertificate);
            console.log(axiosResult.data);
            result = axiosResult.data;
        }
        return result;
    }
    /**
     * load BcLetter Code List
     */
    static async loadBcLetterCodeList() {
        let result;
        const url = service_route_helper_1.Routes["userId.reg-user-id-info"];
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        let bcLetterCodeList = (await Promise.resolve().then(() => require("../../../mock/bc-letter-code-list.json")));
        result = {
            success: true,
            data: bcLetterCodeList,
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
}
exports.default = UserIdentificationInformationHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pZGVudGlmaWNhdGlvbi1pbmZvcm1hdGlvbi1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy9lbmdpbmVlci1tZW1iZXJzaGlwL3VzZXItaWRlbnRpZmljYXRpb24taW5mb3JtYXRpb24taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0tBQTBJO0FBRTFJLGtFQUFpRDtBQUNqRCxtSEFBNEY7QUFLNUYsaUZBQTJEO0FBRTNEOztHQUVHO0FBQ0gsTUFBcUIsbUNBQW1DO0lBQ3BEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FDaEQsVUFBMEI7UUFFMUIsSUFBSSxNQUF3QixDQUFDO1FBRTdCLE1BQU0sR0FBRyxHQUFHLDZCQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUU5QyxtQkFBbUI7UUFDbkIsTUFBTSxTQUFTLEdBQTRCLElBQUksbUNBQXVCLEVBQUUsQ0FBQztRQUN6RSxNQUFNLGdCQUFnQixHQUFxQixTQUFTLENBQUMsUUFBUSxDQUN6RCxVQUFVLENBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxlQUFlLEdBQXVCLGdCQUFnQixDQUFDLElBQTBCLENBQUM7WUFDeEYsTUFBTSxHQUFHO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTTthQUMvQixDQUFDO1NBQ0w7YUFBTTtZQUNILE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsSUFBSSxDQUNyRCxHQUFHLEVBQ0gsVUFBVSxDQUFDLFVBQVUsQ0FDeEIsQ0FBQztZQUNGLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBd0IsQ0FBQztTQUNqRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQ3JELDZCQUFnRTtRQUVoRSxJQUFJLE1BQXdCLENBQUM7UUFFN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBRXRFLG1CQUFtQjtRQUNuQixNQUFNLFNBQVMsR0FBMkMsSUFBSSxtREFBc0MsRUFBRSxDQUFDO1FBQ3ZHLE1BQU0sZ0JBQWdCLEdBQXFCLFNBQVMsQ0FBQyxRQUFRLENBQ3pELDZCQUE2QixDQUNoQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMzQixNQUFNLGVBQWUsR0FBdUIsZ0JBQWdCLENBQUMsSUFBMEIsQ0FBQztZQUN4RixNQUFNLEdBQUc7Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO2FBQy9CLENBQUM7U0FDTDthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsSUFBSSxDQUNyRCxHQUFHLEVBQ0gsNkJBQTZCLENBQ2hDLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixNQUFNLEdBQUcsV0FBVyxDQUFDLElBQXdCLENBQUM7U0FDakQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtRQUNwQyxJQUFJLE1BQXdCLENBQUM7UUFFN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlDLDRFQUE0RTtRQUM1RSx1QkFBdUI7UUFDdkIsSUFBSSxnQkFBZ0IsR0FBNEIsQ0FBQyxxRkFFaEQsQ0FBNEIsQ0FBQztRQUU5QixNQUFNLEdBQUc7WUFDTCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxnQkFBZ0I7U0FDTCxDQUFDO1FBQ3RCLGlEQUFpRDtRQUVqRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUF2RkQsc0RBdUZDIn0=