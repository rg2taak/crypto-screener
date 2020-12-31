import { ActionResultType } from "@Lib/types/core/action-result-type";
import { Routes } from "@BE/helpers/service-route-helper";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { LicenseLevelType } from "@Lib/types/license/license-level-type";
import OrganizationResumeValidator from "@FE/Scripts/validators/engineer-membership/organization-resume-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { NextFunction, Request, Response } from "express";


/**
 * Organization resume list helper class
 */
export default class OrgResumeHelper {
    /**
     * Request Organization resume list
     */
    public static async requestOrgResumeList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {

        const url = Routes["orgResume.request-org-resume-list"];

        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.send(result).end();

    }

    /**
     * Delete org resume item list
     */
    public static async deleteOrgResumeItemList(
        item: OrganizationResumeDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;
        const url = Routes["orgResume.delete-org-resume-item"];
        /* Validate data */

        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        result = {
            success: true,
            data: "حذف با موفقیت انجام شد",
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request license level list
     */
    public static async requestLicenseLevelList(): Promise<ActionResultType> {
        let result: ActionResultType;
        const url = Routes["orgResume.request-province"];
        /* Validate data */

        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        let licenseLevel: Array<LicenseLevelType> = (await import(
            "@/mock/license-level.json"
        )) as Array<LicenseLevelType>;
        result = {
            success: true,
            data: licenseLevel,
        };

        return result;
        // result = axiosResult.data as ActionResultType;
    }

    /**
     * Request license level list
     */
    public static async confirmNewOrgResume(
        newResume: OrganizationResumeDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["orgResume.request-province"];
        /* Validate data */
        const validator: OrganizationResumeValidator = new OrganizationResumeValidator();
        const validationResult: ActionResultType = validator.validate(
            newResume
        );
        if (!validationResult.success) {
            const validationError: ValidatorErrorType = validationResult.data as ValidatorErrorType;

            result = {
                success: false,
                data: validationError.errors,
            };
        } else {
            /* TODO: send to server */
            // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
            //TODO: Clear this code

            result = {
                success: true,
                data: "ثبت با موفقیت انجام شد",
            };
        }
        return result;
        // result = axiosResult.data as ActionResultType;
    }
}
