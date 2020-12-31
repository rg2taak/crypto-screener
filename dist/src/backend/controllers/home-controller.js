"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_helper_1 = require("../helpers/auth-helper");
const global_data_1 = require("../../core/global/global-data");
/**
 * Home controller
 */
class HomeController {
    /**
     * Home/Index action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async index(req, res, next) {
        const isChecked = await auth_helper_1.default.check(req);
        if (isChecked) {
            let sessionData = req.session;
            res.render("home.pug");
        }
        else {
            res.render("pages/auth/login.pug");
        }
    }
    /**
     * Home/logout action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    async logout(req, res, next) {
        await auth_helper_1.default.logout(req);
        const path = await global_data_1.default.router.routerManager.route("auth.login");
        return res.redirect(path);
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2hvbWUtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFpRDtBQUNqRCwrREFBa0Q7QUFHbEQ7O0dBRUc7QUFDSCxNQUFxQixjQUFjO0lBQy9COzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEtBQUssQ0FDZCxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0sU0FBUyxHQUFHLE1BQU0scUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLFdBQVcsR0FBc0IsR0FBRyxDQUFDLE9BQTRCLENBQUM7WUFFdEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FDZixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCO1FBRWxCLE1BQU0scUJBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZFLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUF4Q0QsaUNBd0NDIn0=