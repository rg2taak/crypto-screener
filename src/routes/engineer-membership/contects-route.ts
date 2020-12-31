import AddressController from "@BE/Controllers/engineer-membership/address-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * Organization resume router
 */
export default class ContactsRoute extends BaseRouter {
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
    private defineRoutes(): void {
        const controller: AddressController = new AddressController();

        super.get(
            "/requestContactsList",
            [controller.requestContactsList.bind(controller)],
            "contacts.request-contacts-list"
        );

        super.post(
            "/deleteAddressItemList",
            [controller.deleteAddressItemList.bind(controller)],
            "contacts.delete-address-item-list"
        );

        super.get(
            "/requestAddressTypes",
            [controller.requestAddressTypes.bind(controller)],
            "contacts.request-address-types"
        );


        super.post(
            "/confirmNewAddress",
            [controller.confirmNewAddress.bind(controller)],
            "contacts.confirm-new-address"
        );
    }
}
