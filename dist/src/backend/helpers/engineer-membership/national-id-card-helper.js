"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_route_helper_1 = require("../service-route-helper");
const national_id_card_validator_1 = require("../../../frontend/scripts/validators/engineer-membership/national-id-card-validator");
/**
 * National id card helper class
 */
class NationalIdCardHelper {
    /**
     * Request national id card information
     */
    static async requestNationalIdData(nationalID) {
        let result;
        const url = service_route_helper_1.Routes["userId.reg-user-id-info"];
        /* TODO: Validate data */
        let nationalIdData = (await Promise.resolve().then(() => require("../../../mock/national-id-card.json")));
        result = {
            success: true,
            data: nationalIdData[0],
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * Register user identification information
     */
    static async registerNationalIdCard(nationalID) {
        let result;
        const url = service_route_helper_1.Routes["userId.reg-user-id-info"];
        /* Validate data */
        const validator = new national_id_card_validator_1.default();
        const validationResult = validator.validate(nationalID);
        if (!validationResult.success) {
            const validationError = validationResult.data;
            result = {
                success: false,
                data: validationError.errors,
            };
        }
        else {
            // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
            //TODO: Clear this code
            result = {
                success: true,
                data: "ثبت با موفقیت انجام شد",
            };
            // result = axiosResult.data as ActionResultType;
        }
        return result;
    }
}
exports.default = NationalIdCardHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aW9uYWwtaWQtY2FyZC1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy9lbmdpbmVlci1tZW1iZXJzaGlwL25hdGlvbmFsLWlkLWNhcmQtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0VBQWlEO0FBS2pELG9JQUE0RztBQUU1Rzs7R0FFRztBQUNILE1BQXFCLG9CQUFvQjtJQUNyQzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQ3JDLFVBQThCO1FBRTlCLElBQUksTUFBd0IsQ0FBQztRQUU3QixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFOUMseUJBQXlCO1FBRXpCLElBQUksY0FBYyxHQUE4QixDQUFDLGtGQUVoRCxDQUE4QixDQUFDO1FBRWhDLE1BQU0sR0FBRztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDTixDQUFDO1FBQ3RCLGlEQUFpRDtRQUNqRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUN0QyxVQUE4QjtRQUU5QixJQUFJLE1BQXdCLENBQUM7UUFFN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlDLG1CQUFtQjtRQUNuQixNQUFNLFNBQVMsR0FBNEIsSUFBSSxvQ0FBdUIsRUFBRSxDQUFDO1FBQ3pFLE1BQU0sZ0JBQWdCLEdBQXFCLFNBQVMsQ0FBQyxRQUFRLENBQ3pELFVBQVUsQ0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMzQixNQUFNLGVBQWUsR0FBdUIsZ0JBQWdCLENBQUMsSUFBMEIsQ0FBQztZQUV4RixNQUFNLEdBQUc7Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO2FBQy9CLENBQUM7U0FDTDthQUFNO1lBQ0gsNEVBQTRFO1lBQzVFLHVCQUF1QjtZQUN2QixNQUFNLEdBQUc7Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLHdCQUF3QjthQUNiLENBQUM7WUFDdEIsaURBQWlEO1NBQ3BEO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBM0RELHVDQTJEQyJ9