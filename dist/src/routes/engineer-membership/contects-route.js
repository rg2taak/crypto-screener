"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_controller_1 = require("../../backend/controllers/engineer-membership/address-controller");
const base_router_helper_1 = require("../../core/helpers/base-router-helper");
/**
 * Organization resume router
 */
class ContactsRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("/contacts", "contactsRoute");
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        const controller = new address_controller_1.default();
        super.get("/requestContactsList", [controller.requestContactsList.bind(controller)], "contacts.request-contacts-list");
        super.post("/deleteAddressItemList", [controller.deleteAddressItemList.bind(controller)], "contacts.delete-address-item-list");
        super.get("/requestAddressTypes", [controller.requestAddressTypes.bind(controller)], "contacts.request-address-types");
        super.post("/confirmNewAddress", [controller.confirmNewAddress.bind(controller)], "contacts.confirm-new-address");
    }
}
exports.default = ContactsRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVjdHMtcm91dGUuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL3JvdXRlcy9lbmdpbmVlci1tZW1iZXJzaGlwL2NvbnRlY3RzLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUdBQXVGO0FBQ3ZGLDhFQUEwRDtBQUUxRDs7R0FFRztBQUNILE1BQXFCLGFBQWMsU0FBUSw0QkFBVTtJQUNqRDs7T0FFRztJQUNIO1FBQ0ksS0FBSyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNoQixNQUFNLFVBQVUsR0FBc0IsSUFBSSw0QkFBaUIsRUFBRSxDQUFDO1FBRTlELEtBQUssQ0FBQyxHQUFHLENBQ0wsc0JBQXNCLEVBQ3RCLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqRCxnQ0FBZ0MsQ0FDbkMsQ0FBQztRQUVGLEtBQUssQ0FBQyxJQUFJLENBQ04sd0JBQXdCLEVBQ3hCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNuRCxtQ0FBbUMsQ0FDdEMsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQ0wsc0JBQXNCLEVBQ3RCLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqRCxnQ0FBZ0MsQ0FDbkMsQ0FBQztRQUdGLEtBQUssQ0FBQyxJQUFJLENBQ04sb0JBQW9CLEVBQ3BCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUMvQyw4QkFBOEIsQ0FDakMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQXhDRCxnQ0F3Q0MifQ==