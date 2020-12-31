"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_helper_1 = require("../../helpers/engineer-membership/address-helper");
const service_route_helper_1 = require("../../helpers/service-route-helper");
const axios_module_1 = require("../../../frontend/scripts/modules/axios-module");
/**
 * Organization Resume controller
 */
class AddressController {
    /**
     * orgResume/request-org-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestContactsList(req, res, next) {
        const nationalId = req.body;
        const url = service_route_helper_1.Routes["contacts.request-address"].replace("#NATIONAL-ID#", nationalId + "");
        ;
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * contacts/delete-address-item-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async deleteAddressItemList(req, res, next) {
        const item = req.body;
        const result = await address_helper_1.default.deleteAddressItemList(item);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * orgResume/request-province-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestProvinceList(req, res, next) {
        const url = service_route_helper_1.Routes["auth.request-cities-of-qazvin"];
        /** Validator : TODO */
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
    }
    /**
     * orgResume/request-license-level-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestAddressTypes(req, res, next) {
        const result = await address_helper_1.default.requestAddressTypes();
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * contacts/request-address-types action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async confirmNewAddress(req, res, next) {
        const newAddress = req.body;
        const url = service_route_helper_1.Routes["contacts.register-address"];
        const axiosResult = await axios_module_1.default.post(url, newAddress);
        let result = axiosResult.data;
        res.status(200)
            .send(result)
            .end();
    }
}
exports.default = AddressController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2VuZ2luZWVyLW1lbWJlcnNoaXAvYWRkcmVzcy1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscUZBQTJFO0FBRTNFLDZFQUEwRDtBQUUxRCxpRkFBMkQ7QUFHM0Q7O0dBRUc7QUFDSCxNQUFxQixpQkFBaUI7SUFDbEM7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsbUJBQW1CLENBQzVCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7UUFHbEIsTUFBTSxVQUFVLEdBQW1CLEdBQUcsQ0FBQyxJQUFzQixDQUFDO1FBQzlELE1BQU0sR0FBRyxHQUFHLDZCQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLENBQ2xELGVBQWUsRUFDZixVQUFVLEdBQUcsRUFBRSxDQUNsQixDQUFDO1FBQUEsQ0FBQztRQUNILE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksTUFBTSxHQUFxQixXQUFXLENBQUMsSUFBd0IsQ0FBQztRQUVwRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxxQkFBcUIsQ0FDOUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLElBQUksR0FBb0IsR0FBRyxDQUFDLElBQXVCLENBQUM7UUFDMUQsTUFBTSxNQUFNLEdBQXFCLE1BQU0sd0JBQWEsQ0FBQyxxQkFBcUIsQ0FDdEUsSUFBSSxDQUNQLENBQUM7UUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxtQkFBbUIsQ0FDNUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDcEQsdUJBQXVCO1FBQ3ZCLE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksTUFBTSxHQUFxQixXQUFXLENBQUMsSUFBd0IsQ0FBQztRQUNwRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxtQkFBbUIsQ0FDNUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLE1BQU0sR0FBcUIsTUFBTSx3QkFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsaUJBQWlCLENBQzFCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7UUFFbEIsTUFBTSxVQUFVLEdBQW9CLEdBQUcsQ0FBQyxJQUF1QixDQUFDO1FBQ2hFLE1BQU0sR0FBRyxHQUFHLDZCQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNoRCxNQUFNLFdBQVcsR0FBa0IsTUFBTSxzQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUUsSUFBSSxNQUFNLEdBQXFCLFdBQVcsQ0FBQyxJQUF3QixDQUFDO1FBRXBFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBdkdELG9DQXVHQyJ9