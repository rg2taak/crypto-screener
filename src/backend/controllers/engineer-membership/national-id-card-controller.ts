import NationalIdCardHelper from "@BE/helpers/engineer-membership/national-id-card-helper";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { NationalIdDataType } from "@Lib/types/frontend/engineer-membership/national-id-data-type";
import { NextFunction, Request, Response } from "express";

/**
 * National id card controller
 */
export default class NationalIdCardController {
    /**
     * nationalId/national-id-data-type action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestNationalIdData(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const nationalId: NationalIdDataType = req.body as NationalIdDataType;
        const result: ActionResultType = await NationalIdCardHelper.requestNationalIdData(
            nationalId
        );

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
    public async registerNationalIdCard(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const nationalId: NationalIdDataType = req.body as NationalIdDataType;

        const result: ActionResultType = await NationalIdCardHelper.registerNationalIdCard(
            nationalId
        );

        res.status(200)
            .send(result)
            .end();
    }
}
