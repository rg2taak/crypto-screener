import ISessionDataModel from "@BE/data-model/session-data-model";
import AuthHelper from "@BE/helpers/auth-helper";
import GlobalData from "@Core/Global/global-data";
import { NextFunction, Request, Response } from "express";

/**
 * Home controller
 */
export default class HomeController {
    /**
     * Home/Index action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async index(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const isChecked = await AuthHelper.check(req);

        if (isChecked) {
            let sessionData: ISessionDataModel = req.session as ISessionDataModel;

            res.render("home.pug");
        } else {
            res.render("pages/auth/login.pug");
        }
    }

    /**
     * Home/logout action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async logout(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        await AuthHelper.logout(req);

        const path = await GlobalData.router.routerManager.route("auth.login");

        return res.redirect(path);
    }
}
