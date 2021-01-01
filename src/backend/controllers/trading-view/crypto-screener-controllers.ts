import { NextFunction, Request, Response } from "express";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { NationalIDType } from "@Lib/validation/national-id-type";
import AuthHelper from "@BE/helpers/auth-helper";
import ISessionDataModel from "@BE/data-model/session-data-model";
import CryptoScreenerHelper from "@BE/helpers/trading-view/crypto-screener-helpers";

/**
 * Ctypto screener controllers
 */
export default class CryptoScreenerControllers {
    /**
     * userIdentification/request-identification-information action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestCryptoScreenerListData(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        let result: ActionResultType;
        /* Session load data */
        const isChecked = await AuthHelper.check(req);
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr");
        if (isChecked) {
            let sessionData: ISessionDataModel = req.session as ISessionDataModel;
            let nationalId: NationalIDType = {
                nationalId: sessionData.nationalId as string,
            } as NationalIDType;

            result = await CryptoScreenerHelper.requestCryptoScreener();
            res.status(200)
                .send(result)
                .end();
        } else {
            res.render("pages/auth/login.pug");
        }
    }
}
