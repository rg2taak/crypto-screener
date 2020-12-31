"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_identification_information_controller_1 = require("../../backend/controllers/user-identification-information-controller");
const base_router_helper_1 = require("../../core/helpers/base-router-helper");
/**
 * User identification Information router
 */
class UserIdentificationInformationRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("/userIdentification", "UserIdentificationRoute");
        this.userIdentificationInformationController = new user_identification_information_controller_1.default();
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        super.get("/requestIdentificationInformation", [
            this.userIdentificationInformationController
                .requestIdentificationInformation,
        ], "userIdentification.request-identification-information");
        super.post("/registerUserIdentificationInformation", [this.userIdentificationInformationController.registerUserIdentificationInformation], "userIdentification.register-user-identification-information");
        super.get("/loadBcLetterCodeList", [this.userIdentificationInformationController.loadBcLetterCodeList], "userIdentification.load-bc-letter-code-list");
    }
}
exports.default = UserIdentificationInformationRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmljYXRpb24taW5mb3JtYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL3JvdXRlcy9lbmdpbmVlci1tZW1iZXJzaGlwL2lkZW50aWZpY2F0aW9uLWluZm9ybWF0aW9uLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUlBQWlIO0FBQ2pILDhFQUEwRDtBQUUxRDs7R0FFRztBQUNILE1BQXFCLGtDQUFtQyxTQUFRLDRCQUFVO0lBR3RFOztPQUVHO0lBQ0g7UUFDSSxLQUFLLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQU5wRCw0Q0FBdUMsR0FBNEMsSUFBSSxvREFBdUMsRUFBRSxDQUFDO1FBT3JJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQ0wsbUNBQW1DLEVBQ25DO1lBQ0ksSUFBSSxDQUFDLHVDQUF1QztpQkFDdkMsZ0NBQWdDO1NBQ3hDLEVBQ0QsdURBQXVELENBQzFELENBQUM7UUFFRixLQUFLLENBQUMsSUFBSSxDQUNOLHdDQUF3QyxFQUN4QyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxxQ0FBcUMsQ0FBQyxFQUNwRiw2REFBNkQsQ0FDaEUsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQ0wsdUJBQXVCLEVBQ3ZCLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLG9CQUFvQixDQUFDLEVBQ25FLDZDQUE2QyxDQUNoRCxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBcENELHFEQW9DQyJ9