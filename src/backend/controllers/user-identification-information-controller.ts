import { NextFunction, Request, Response } from "express";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import UserIdentificationInformationHelper from "@BE/helpers/engineer-membership/user-identification-information-helper";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import { NationalIDType } from "@Lib/validation/national-id-type";
import AuthHelper from "@BE/helpers/auth-helper";
import ISessionDataModel from "@BE/data-model/session-data-model";

/**
 * User identification information controller
 */
export default class UserIdentificationInformationController {
    /**
     * userIdentification/request-identification-information action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestIdentificationInformation(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        let result: ActionResultType;
        /* Session load data */
        const isChecked = await AuthHelper.check(req);

        if (isChecked) {
            let sessionData: ISessionDataModel = req.session as ISessionDataModel;
            let nationalId: NationalIDType = {
                nationalId: sessionData.nationalId as string,
            } as NationalIDType;

            result = (await UserIdentificationInformationHelper.requestIdentificationInformation(
                nationalId
            )) as ActionResultType;
            res.status(200)
                .send(result)
                .end();
        } else {
            res.render("pages/auth/login.pug");
        }
    }

    /**
     * userIdentification.register-user-identification-information
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async registerUserIdentificationInformation(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const userIdentificationCertificate: UserIdentificationInformationType = req.body as UserIdentificationInformationType;
        
        let sessionData: ISessionDataModel = req.session as ISessionDataModel;
        userIdentificationCertificate.nationalId = sessionData.nationalId as string;

        const result: ActionResultType = await UserIdentificationInformationHelper.registerUserIdentificationInformation(
            userIdentificationCertificate
        );

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * userIdentification/request-identification-information action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async loadBcLetterCodeList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const result: ActionResultType = await UserIdentificationInformationHelper.loadBcLetterCodeList();

        res.status(200)
            .send(result)
            .end();
    }
}
