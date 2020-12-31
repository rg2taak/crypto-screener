"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_management_helper_1 = require("../helpers/user-management-helper");
const opt_prefix_enum_1 = require("../../lib/enums/backend/opt-prefix-enum");
const auth_helper_1 = require("../helpers/auth-helper");
/**
 * Auth controller
 */
class AuthController {
    /**
     * Auth/login action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async login(req, res, next) {
        // Check session data
        const isChecked = await auth_helper_1.default.check(req);
        if (isChecked) {
            // session data = true redirect to home page
            let sessionData = req.session;
            res.render("home.pug");
        }
        else {
            res.render("pages/auth/login.pug");
        }
    }
    /**
     * Auth/login-by-user-data action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async loginByUserData(req, res, next) {
        const userData = req.body;
        const result = await user_management_helper_1.default.loginByUserData(userData);
        console.log(userData);
        if (result.success) {
            // Create session
            const sessionData = {
                loginAt: new Date(),
                nationalId: userData.nationalId,
                jwt: "jmhncdmshvasdhcbmn23546534a3dfkjbjhvfhjdvc354654",
            };
            await auth_helper_1.default.register(req, sessionData);
            result.data = "home.index";
        }
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/request-otp-token action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestOtpToken(req, res, next) {
        const requestData = req.body;
        const result = await user_management_helper_1.default.requestOtpToken(requestData, opt_prefix_enum_1.OtpPrefixEnum.LOGIN);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/login-by-otp-token action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async loginByOtpToken(req, res, next) {
        const otpResponse = req.body;
        const result = await user_management_helper_1.default.loginByOtpToken(otpResponse, opt_prefix_enum_1.OtpPrefixEnum.LOGIN);
        if (result.success) {
            // Create session
            const sessionData = {
                loginAt: new Date(),
                nationalId: otpResponse.token,
                jwt: "jmhncdmshvasdhcbmn23546534a3dfkjbjhvfhjdvc354654",
            };
            await auth_helper_1.default.register(req, sessionData);
            result.data = "home.index";
        }
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/request-forget-password-token action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestForgetPasswordToken(req, res, next) {
        const userData = req.body;
        const result = await user_management_helper_1.default.requestForgetPasswordToken(userData, opt_prefix_enum_1.OtpPrefixEnum.FORGET_PASSWORD);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/reset-password action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async resetPassword(req, res, next) {
        const userData = req.body;
        const result = await user_management_helper_1.default.resetPassword(userData, opt_prefix_enum_1.OtpPrefixEnum.FORGET_PASSWORD);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/check-user-national-id action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async checkUserNationalId(req, res, next) {
        const nationalID = req.body;
        const result = await user_management_helper_1.default.checkUserNationalId(nationalID);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/check-user-phone-number action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async checkUserPhoneNumber(req, res, next) {
        const phoneNumber = req.body;
        const result = await user_management_helper_1.default.checkUserPhoneNumber(phoneNumber);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/new-user-register-request action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async newUserRegisterRequest(req, res, next) {
        const userData = req.body;
        const result = await user_management_helper_1.default.requestOtpTokenRegister(userData, opt_prefix_enum_1.OtpPrefixEnum.REGISTER);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/confirm-new-user-register action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async confirmNewUserRegister(req, res, next) {
        const userData = req.body;
        const result = await user_management_helper_1.default.confirmNewUserRegister(userData, opt_prefix_enum_1.OtpPrefixEnum.REGISTER);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * Auth/check-user-activation-code-reset-password
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async checkUserActivationCodeResetPassword(req, res, next) {
        const activationCodeData = req.body;
        const result = await user_management_helper_1.default.checkUserActivationCodeResetPassword(activationCodeData, opt_prefix_enum_1.OtpPrefixEnum.FORGET_PASSWORD);
        res.status(200)
            .send(result)
            .end();
    }
}
exports.default = AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2F1dGgtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhFQUFzRTtBQUt0RSw2RUFBbUU7QUFHbkUsd0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBcUIsY0FBYztJQUMvQjs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxLQUFLLENBQ2QsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixxQkFBcUI7UUFDckIsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5QyxJQUFJLFNBQVMsRUFBRTtZQUNYLDRDQUE0QztZQUM1QyxJQUFJLFdBQVcsR0FBc0IsR0FBRyxDQUFDLE9BQTRCLENBQUM7WUFFdEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLGVBQWUsQ0FDeEIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLFFBQVEsR0FBc0IsR0FBRyxDQUFDLElBQXlCLENBQUM7UUFFbEUsTUFBTSxNQUFNLEdBQXFCLE1BQU0sZ0NBQW9CLENBQUMsZUFBZSxDQUN2RSxRQUFRLENBQ1gsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2hCLGlCQUFpQjtZQUNqQixNQUFNLFdBQVcsR0FBc0I7Z0JBQ25DLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDbkIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVO2dCQUMvQixHQUFHLEVBQUUsa0RB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