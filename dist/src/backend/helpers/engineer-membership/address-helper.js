"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_route_helper_1 = require("../service-route-helper");
/**
 * Organization resume list helper class
 */
class AddressHelper {
    /**
     * Request Organization resume list
     */
    static async requestContactsList() {
        let result;
        const url = service_route_helper_1.Routes["contacts.request-contacts-list"];
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        let orgResumeList = (await Promise.resolve().then(() => require("../../../mock/address-list.json")));
        result = {
            success: true,
            data: orgResumeList,
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * Delete address item list
     */
    static async deleteAddressItemList(item) {
        let result;
        const url = service_route_helper_1.Routes["contacts.delete-address-item-list"];
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
     * Request address types
     */
    static async requestAddressTypes() {
        let result;
        const url = service_route_helper_1.Routes["contacts.request-address-types"];
        /* Validate data */
        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        let licenseLevel = (await Promise.resolve().then(() => require("../../../mock/address-type-data.json")));
        result = {
            success: true,
            data: licenseLevel,
        };
        return result;
        // result = axiosResult.data as ActionResultType;
    }
}
exports.default = AddressHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy9lbmdpbmVlci1tZW1iZXJzaGlwL2FkZHJlc3MtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0VBQTBEO0FBTzFEOztHQUVHO0FBQ0gsTUFBcUIsYUFBYTtJQUM5Qjs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CO1FBQ25DLElBQUksTUFBd0IsQ0FBQztRQUU3QixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFckQsNEVBQTRFO1FBQzVFLHVCQUF1QjtRQUN2QixJQUFJLGFBQWEsR0FBZSxDQUFDLDhFQUVoQyxDQUFlLENBQUM7UUFFakIsTUFBTSxHQUFHO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsYUFBYTtTQUNGLENBQUM7UUFDdEIsaURBQWlEO1FBRWpELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQ3JDLElBQXFCO1FBRXJCLElBQUksTUFBd0IsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDeEQsbUJBQW1CO1FBRW5CLDBCQUEwQjtRQUMxQiwrRUFBK0U7UUFDL0UsdUJBQXVCO1FBQ3ZCLE1BQU0sR0FBRztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLHdCQUF3QjtTQUNiLENBQUM7UUFDdEIsaURBQWlEO1FBRWpELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFHRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CO1FBQ25DLElBQUksTUFBd0IsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDckQsbUJBQW1CO1FBRW5CLDBCQUEwQjtRQUMxQiwrRUFBK0U7UUFDL0UsdUJBQXVCO1FBQ3ZCLElBQUksWUFBWSxHQUErQixDQUFDLG1GQUUvQyxDQUErQixDQUFDO1FBQ2pDLE1BQU0sR0FBRztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDO1FBQ2QsaURBQWlEO0lBQ3JELENBQUM7Q0FDSjtBQXJFRCxnQ0FxRUMifQ==