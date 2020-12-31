"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_route_helper_1 = require("../helpers/service-route-helper");
const axios_module_1 = require("../../frontend/scripts/modules/axios-module");
/**
 * Country controller
 */
class CountryController {
    /**
     * Country/Index action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async countries(req, res, next) {
        const url = service_route_helper_1.Routes["auth.request-countries-list"];
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "name": string
         *    iso2: string
         *    iso3:  string
         *    native:  string
         *    emoji:  string
         *    emojiu: string
         * */
    }
    /**
     * Request provinces of country action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    async requestProvincesOfCountry(req, res, next) {
        const countryId = req.body.countryId;
        const url = service_route_helper_1.Routes["auth.request-provinces-of-country"].replace("#COUNTRY-ID#", countryId);
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "name": string
         * */
    }
    /**
     * Request cities of province action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    async requestCitiesOfProvince(req, res, next) {
        const provinceId = req.body.provinceId;
        const url = service_route_helper_1.Routes["auth.request-cities-of-province"].replace("#PROVINCE-ID#", provinceId);
        /** TODO: Validation */
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "id": number
         *    "name": string
         *    "latitude": string
         *    "longitude": string
         * */
    }
    /**
     * Request provinces of iran action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    async requestProvincesOfIran(req, res, next) {
        const url = service_route_helper_1.Routes["auth.request-provinces-of-iran"];
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "name": string
         * */
    }
    /**
     * Request cities of qazvin action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    async requestCitiesOfQazvin(req, res, next) {
        const url = service_route_helper_1.Routes["auth.request-cities-of-qazvin"];
        const axiosResult = await axios_module_1.default.get(url);
        let result = axiosResult.data;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "id": number
         *    "name": string
         *    "latitude": string
         *    "longitude": string
         * */
    }
}
exports.default = CountryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2NvdW50cnktY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDBFQUEwRDtBQUUxRCw4RUFBMkQ7QUFFM0Q7O0dBRUc7QUFDSCxNQUFxQixpQkFBaUI7SUFDbEM7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsU0FBUyxDQUNsQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sR0FBRyxHQUFHLDZCQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUVsRCxNQUFNLFdBQVcsR0FBa0IsTUFBTSxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBcUIsV0FBVyxDQUFDLElBQXdCLENBQUM7UUFDcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV2Qjs7Ozs7Ozs7O2FBU0s7SUFDVCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx1REFBdUQ7SUFDaEQsS0FBSyxDQUFDLHlCQUF5QixDQUNsQyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sU0FBUyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBbUIsQ0FBQztRQUN2RCxNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUMsT0FBTyxDQUMzRCxjQUFjLEVBQ2QsU0FBUyxDQUNaLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBa0IsTUFBTSxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBcUIsV0FBVyxDQUFDLElBQXdCLENBQUM7UUFFcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2Qjs7OzthQUlLO0lBQ1QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdURBQXVEO0lBQ2hELEtBQUssQ0FBQyx1QkFBdUIsQ0FDaEMsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLFVBQVUsR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQW9CLENBQUM7UUFDekQsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLE9BQU8sQ0FDekQsZUFBZSxFQUNmLFVBQVUsQ0FDYixDQUFDO1FBQ0YsdUJBQXVCO1FBQ3ZCLE1BQU0sV0FBVyxHQUFrQixNQUFNLHNCQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksTUFBTSxHQUFxQixXQUFXLENBQUMsSUFBd0IsQ0FBQztRQUNwRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZCOzs7Ozs7O2FBT0s7SUFDVCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx1REFBdUQ7SUFDaEQsS0FBSyxDQUFDLHNCQUFzQixDQUMvQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sR0FBRyxHQUFHLDZCQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNyRCxNQUFNLFdBQVcsR0FBa0IsTUFBTSxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBcUIsV0FBVyxDQUFDLElBQXdCLENBQUM7UUFDcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2Qjs7OzthQUlLO0lBQ1QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdURBQXVEO0lBQ2hELEtBQUssQ0FBQyxxQkFBcUIsQ0FDOUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDcEQsTUFBTSxXQUFXLEdBQWtCLE1BQU0sc0JBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxNQUFNLEdBQXFCLFdBQVcsQ0FBQyxJQUF3QixDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkI7Ozs7Ozs7YUFPSztJQUNULENBQUM7Q0FDSjtBQTNJRCxvQ0EySUMifQ==