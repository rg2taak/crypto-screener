"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const national_id_card_helper_1 = require("../../helpers/engineer-membership/national-id-card-helper");
/**
 * National id card controller
 */
class NationalIdCardController {
    /**
     * nationalId/national-id-data-type action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async requestNationalIdData(req, res, next) {
        const nationalId = req.body;
        const result = await national_id_card_helper_1.default.requestNationalIdData(nationalId);
        res.status(200)
            .send(result)
            .end();
    }
    /**
     * nationalId/register-national-id-card action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async registerNationalIdCard(req, res, next) {
        const nationalId = req.body;
        const result = await national_id_card_helper_1.default.registerNationalIdCard(nationalId);
        res.status(200)
            .send(result)
            .end();
    }
}
exports.default = NationalIdCardController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aW9uYWwtaWQtY2FyZC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2VuZ2luZWVyLW1lbWJlcnNoaXAvbmF0aW9uYWwtaWQtY2FyZC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUdBQTJGO0FBSzNGOztHQUVHO0FBQ0gsTUFBcUIsd0JBQXdCO0lBQ3pDOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLHFCQUFxQixDQUM5QixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sVUFBVSxHQUF1QixHQUFHLENBQUMsSUFBMEIsQ0FBQztRQUN0RSxNQUFNLE1BQU0sR0FBcUIsTUFBTSxpQ0FBb0IsQ0FBQyxxQkFBcUIsQ0FDN0UsVUFBVSxDQUNiLENBQUM7UUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxzQkFBc0IsQ0FDL0IsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtRQUVsQixNQUFNLFVBQVUsR0FBdUIsR0FBRyxDQUFDLElBQTBCLENBQUM7UUFFdEUsTUFBTSxNQUFNLEdBQXFCLE1BQU0saUNBQW9CLENBQUMsc0JBQXNCLENBQzlFLFVBQVUsQ0FDYixDQUFDO1FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0o7QUEzQ0QsMkNBMkNDIn0=