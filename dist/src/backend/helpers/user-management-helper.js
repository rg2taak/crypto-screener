"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const opt_prefix_enum_1 = require("../../lib/enums/backend/opt-prefix-enum");
const service_route_helper_1 = require("./service-route-helper");
const axios_module_1 = require("../../frontend/scripts/modules/axios-module");
/**
 * UserManagement Helper class
 */
class UserManagementHelper {
    /**
     * Login by user data
     */
    static async loginByUserData(userData) {
        /* Validaion / TODO */
        const url = service_route_helper_1.Routes["auth.login-by-user-data"];
        const axiosResult = await axios_module_1.default.post(url, userData);
        let result = axiosResult.data;
        return result;
    }
    /**
     * Request OTP token
     */
    static async requestOtpToken(requestData, otpPerfix = opt_prefix_enum_1.OtpPrefixEnum.NONE) {
        /* Validaion / TODO */
        const url = service_route_helper_1.Routes["auth.request-otp-token"];
        const axiosResult = await axios_module_1.default.post(url, requestData);
        let result = axiosResult.data;
        return result;
    }
    /**
     *
     * @param otpResponse OtpResponseType OTP Response data
     */
    static async loginByOtpToken(otpResponse, otpPerfix = opt_prefix_enum_1.OtpPrefixEnum.NONE) {
        const url = service_route_helper_1.Routes["auth.login-by-otp-token"];
        const axiosResult = await axios_module_1.default.post(url, otpResponse);
        let result = axiosResult.data;
        return result;
    }
    /**
     * Reset user password
     * @param otpResponse OtpResponseType OTP Response data
     */
    static async requestForgetPasswordToken(otpResponse, otpPerfix = opt_prefix_enum_1.OtpPrefixEnum.NONE) {
        const url = service_route_helper_1.Routes["auth.request-forget-password-token"];
        const axiosResult = await axios_module_1.default.post(url, otpResponse);
        let result = axiosResult.data;
        console.log(result);
        return result;
    }
    /**
     * Check user activation code reset password
     */
    static async checkUserActivationCodeResetPassword(activationCodeData, optPerfix) {
        const url = service_route_helper_1.Routes["auth.check-user-activation-code-rseset-password"];
        const axiosResult = await axios_module_1.default.post(url, activationCodeData);
        let result = axiosResult.data;
        console.log("////////////////////", result);
        return result;
    }
    /**
     * Reset user password
     * @param otpResponse OtpResponseType OTP Response data
     */
    static async resetPassword(otpResponse, otpPerfix = opt_prefix_enum_1.OtpPrefixEnum.NONE) {
        const url = service_route_helper_1.Routes["auth.reset-password"];
        console.log(otpResponse);
        console.log("url************", url);
        const axiosResult = await axios_module_1.default.post(url, otpResponse);
        let result = axiosResult.data;
        console.log("*********", result);
        return result;
    }
    /**
     * Request OTP token register
     */
    static async requestOtpTokenRegister(newUserData, otpPerfix = opt_prefix_enum_1.OtpPrefixEnum.NONE) {
        /* Validaion / TODO */
        const url = service_route_helper_1.Routes["auth.request-otp-token-register"];
        const axiosResult = await axios_module_1.default.post(url, newUserData);
        let result = axiosResult.data;
        return result;
    }
    /**
     * Confirm new user register
     */
    static async confirmNewUserRegister(otpResponse, otpPerfix = opt_prefix_enum_1.OtpPrefixEnum.NONE) {
        const url = service_route_helper_1.Routes["auth.confirm-new-user-register"];
        const axiosResult = await axios_module_1.default.post(url, otpResponse);
        let result = axiosResult.data;
        return result;
    }
    /**
     * Check user national id
     */
    static async checkUserNationalId(nationalId) {
        /* Validaion / TODO */
        const url = service_route_helper_1.Routes["auth.check-user-national-id"];
        const axiosResult = await axios_module_1.default.post(url, nationalId);
        let result = axiosResult.data;
        return result;
    }
    /**
     * Check user phone number
     */
    static async checkUserPhoneNumber(phoneNumber) {
        /* Validaion / TODO */
        const url = service_route_helper_1.Routes["auth.check-user-phone-number"];
        const axiosResult = await axios_module_1.default.post(url, phoneNumber);
        let result = axiosResult.data;
        return result;
    }
}
exports.default = UserManagementHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1tYW5hZ2VtZW50LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvYmFja2VuZC9oZWxwZXJzL3VzZXItbWFuYWdlbWVudC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSw2RUFBbUU7QUFFbkUsaUVBQTBEO0FBRTFELDhFQUEyRDtBQUUzRDs7R0FFRztBQUNILE1BQXFCLG9CQUFvQjtJQUNyQzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUMvQixRQUEyQjtRQUUzQixzQkFBc0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsSUFBSSxDQUNyRCxHQUFHLEVBQ0gsUUFBUSxDQUNYLENBQUM7UUFDRixJQUFJLE1BQU0sR0FBcUIsV0FBVyxDQUFDLElBQXdCLENBQUM7UUFFcEUsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQy9CLFdBQTZCLEVBQzdCLFlBQTJCLCtCQUFhLENBQUMsSUFBSTtRQUU3QyxzQkFBc0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsSUFBSSxDQUNyRCxHQUFHLEVBQ0gsV0FBVyxDQUNkLENBQUM7UUFDRixJQUFJLE1BQU0sR0FBcUIsV0FBVyxDQUFDLElBQXdCLENBQUM7UUFFcEUsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUMvQixXQUE0QixFQUM1QixZQUEyQiwrQkFBYSxDQUFDLElBQUk7UUFFN0MsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyx5QkFBeUIsQ0FB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