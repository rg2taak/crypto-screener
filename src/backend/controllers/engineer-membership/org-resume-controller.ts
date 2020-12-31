import { NextFunction, Request, Response } from "express";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import OrgResumeHelper from "@BE/helpers/engineer-membership/org-resume-helper";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import { Routes } from "@BE/helpers/service-route-helper";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";

/**
 * Organization Resume controller
 */
export default class OrgResumeController {
    /**
     * orgResume/request-org-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestOrgResumeList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const url = Routes["auth.request-cities-of-qazvin"];
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.status(200)
            .send(result)
            .end();
    }

    /**
     * orgResume/request-org-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async deleteOrgResumeItemList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const item: OrganizationResumeDataType = req.body as OrganizationResumeDataType;
        const result: ActionResultType = await OrgResumeHelper.deleteOrgResumeItemList(
            item
        );

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
    public async requestProvincesOfIran(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const url = Routes["auth.request-provinces-of-iran"];
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.status(200)
            .send(result)
            .end();
    }

    /**
     * orgResume/request-license-level-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestLicenseLevelList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const result: ActionResultType = await OrgResumeHelper.requestLicenseLevelList();

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * orgResume/request-license-level-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async confirmNewOrgResume(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const newResume: OrganizationResumeDataType = req.body as OrganizationResumeDataType;
        const result: ActionResultType = await OrgResumeHelper.confirmNewOrgResume(
            newResume
        );

        res.status(200)
            .send(result)
            .end();
    }
}
