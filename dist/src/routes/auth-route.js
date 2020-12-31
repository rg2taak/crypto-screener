"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../backend/controllers/auth-controller");
const base_router_helper_1 = require("../core/helpers/base-router-helper");
/**
 * Auth router
 */
class AuthRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("/auth", "AuthRoute");
        this.authController = new auth_controller_1.default();
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        super.get("/login", [this.authController.login], "auth.login");
        super.post("/loginByUserData", [this.authController.loginByUserData], "auth.login-by-user-data");
        super.post("/requestOtpToken", [this.authController.requestOtpToken], "auth.request-otp-token");
        super.post("/loginByOtpToken", [this.authController.loginByOtpToken], "auth.login-by-otp-token");
        super.post("/requestForgetPasswordToken", [this.authController.requestForgetPasswordToken], "auth.request-forget-password-token");
        super.post("/resetPassword", [this.authController.resetPassword], "auth.reset-password");
        super.post("/checkUserNationalId", [this.authController.checkUserNationalId], "auth.check-user-national-id");
        super.post("/checkUserPhoneNumber", [this.authController.checkUserPhoneNumber], "auth.check-user-phone-number");
        super.post("/newUserRegisterRequest", [this.authController.newUserRegisterRequest], "auth.new-user-register-request");
        super.post("/confirmNewUserRegister", [this.authController.confirmNewUserRegister], "auth.confirm-new-user-register");
        super.post("/checkUserActivationCodeRsesetPassword", [this.authController.checkUserActivationCodeResetPassword], "auth.check-user-activation-code-reset-password");
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL2F1dGgtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBNkQ7QUFDN0QsMkVBQTBEO0FBRTFEOztHQUVHO0FBQ0gsTUFBcUIsU0FBVSxTQUFRLDRCQUFVO0lBRy9DOztPQUVHO0lBQ0g7UUFDRSxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBTnRCLG1CQUFjLEdBQW1CLElBQUkseUJBQWMsRUFBRSxDQUFDO1FBTzVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUUvRCxLQUFLLENBQUMsSUFBSSxDQUNSLGtCQUFrQixFQUNsQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQ3JDLHlCQUF5QixDQUMxQixDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDUixrQkFBa0IsRUFDbEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUNyQyx3QkFBd0IsQ0FDekIsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ1Isa0JBQWtCLEVBQ2xCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFDckMseUJBQXlCLENBQzFCLENBQUM7UUFFRixLQUFLLENBQUMsSUFBSSxDQUNSLDZCQUE2QixFQUM3QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFDaEQsb0NBQW9DLENBQ3JDLENBQUM7UUFFRixLQUFLLENBQUMsSUFBSSxDQUNSLGdCQUFnQixFQUNoQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQ25DLHFCQUFxQixDQUN0QixDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDUixzQkFBc0IsRUFDdEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQ3pDLDZCQUE2QixDQUM5QixDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDUix1QkFBdUIsRUFDdkIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEVBQzFDLDhCQUE4QixDQUMvQixDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDUix5QkFBeUIsRUFDekIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLEVBQzVDLGdDQUFnQyxDQUNqQyxDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDUix5QkFBeUIsRUFDekIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLEVBQzVDLGdDQUFnQyxDQUNqQyxDQUFDO1FBRUYsS0FBSyxDQUFDLElBQUksQ0FDUix3Q0FBd0MsRUFDeEMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9DQUFvQyxDQUFDLEVBQzFELGdEQUFnRCxDQUNqRCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBN0VELDRCQTZFQyJ9