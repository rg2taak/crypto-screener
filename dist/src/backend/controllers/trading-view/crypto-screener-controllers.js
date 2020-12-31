"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_helper_1 = require("../../helpers/auth-helper");
const crypto_screener_helpers_1 = require("../../helpers/trading-view/crypto-screener-helpers");
/**
 * Ctypto screener controllers
 */
class CryptoScreenerControllers {
    /**
     * userIdentification/request-identification-information action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestCryptoScreenerListData(req, res, next) {
        let result;
        /* Session load data */
        const isChecked = await auth_helper_1.default.check(req);
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr");
        if (isChecked) {
            let sessionData = req.session;
            let nationalId = {
                nationalId: sessionData.nationalId,
            };
            result = await crypto_screener_helpers_1.default.requestCryptoScreener();
            res.status(200)
                .send(result)
                .end();
        }
        else {
            res.render("pages/auth/login.pug");
        }
    }
}
exports.default = CryptoScreenerControllers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLXNjcmVlbmVyLWNvbnRyb2xsZXJzLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL3RyYWRpbmctdmlldy9jcnlwdG8tc2NyZWVuZXItY29udHJvbGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSwyREFBaUQ7QUFFakQsZ0dBQW9GO0FBRXBGOztHQUVHO0FBQ0gsTUFBcUIseUJBQXlCO0lBQzFDOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLDZCQUE2QixDQUN0QyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLElBQUksTUFBd0IsQ0FBQztRQUM3Qix1QkFBdUI7UUFDdkIsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDekMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLFdBQVcsR0FBc0IsR0FBRyxDQUFDLE9BQTRCLENBQUM7WUFDdEUsSUFBSSxVQUFVLEdBQW1CO2dCQUM3QixVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQW9CO2FBQzdCLENBQUM7WUFFcEIsTUFBTSxHQUFHLE1BQU0saUNBQW9CLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM1RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUNaLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7Q0FDSjtBQTlCRCw0Q0E4QkMifQ==