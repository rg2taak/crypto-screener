import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import OrganizationResumeValidator from "@FE/Scripts/validators/engineer-membership/organization-resume-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";

/**
 * Organization resume register module
 */
export default class OrganizationResumeRegister {
    /**
     * Request province list for load data
     */
    public static async requestProvincesOfIran(
    ): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath("orgResume.request-provinces-of-iran");

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request license level list for load data
     */
    public static async requestLicenseLevelList(): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath(
            "orgResume.request-license-level-list"
        );

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request license level list for load data
     */
    public static async confirmNewOrgResume(
        newResume: OrganizationResumeDataType
    ): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath("orgResume.confirm-new-org-resume");
       
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
            const axiosResult: AxiosResponse = await AxiosModule.post(
                url,
                newResume
            );
            result = axiosResult.data as ActionResultType;
        }
        return result;
    }
}
