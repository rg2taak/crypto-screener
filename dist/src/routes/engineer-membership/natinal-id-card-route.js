"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const national_id_card_controller_1 = require("../../backend/controllers/engineer-membership/national-id-card-controller");
const base_router_helper_1 = require("../../core/helpers/base-router-helper");
/**
 * National id card route
 */
class NationalIdCardRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("/nationalId", "nationalIdRoute");
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        const controller = new national_id_card_controller_1.default();
        super.post("/requestNationalIdData", [controller.requestNationalIdData.bind(controller)], "nationalId.request-national-id-data");
        super.post("/registerNationalIdCard", [controller.registerNationalIdCard.bind(controller)], "nationalId.register-national-id-card");
    }
}
exports.default = NationalIdCardRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aW5hbC1pZC1jYXJkLXJvdXRlLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvZW5naW5lZXItbWVtYmVyc2hpcC9uYXRpbmFsLWlkLWNhcmQtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwySEFBdUc7QUFDdkcsOEVBQTBEO0FBRTFEOztHQUVHO0FBQ0gsTUFBcUIsbUJBQW9CLFNBQVEsNEJBQVU7SUFDdkQ7O09BRUc7SUFDSDtRQUNJLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNoQixNQUFNLFVBQVUsR0FBNkIsSUFBSSxxQ0FBd0IsRUFBRSxDQUFDO1FBRTVFLEtBQUssQ0FBQyxJQUFJLENBQ04sd0JBQXdCLEVBQ3hCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNuRCxxQ0FBcUMsQ0FDeEMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ04seUJBQXlCLEVBQ3pCLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNwRCxzQ0FBc0MsQ0FDekMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQTNCRCxzQ0EyQkMifQ==