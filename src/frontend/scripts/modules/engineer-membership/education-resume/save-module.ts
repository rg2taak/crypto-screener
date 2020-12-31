import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";
import EducationResumeInformationValidator from "@FE/Scripts/validators/engineer-membership/education-information-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";

/**
 * Education Resume list module
 */
export default class EducationResumeListData {
    /**
     * New education resume register data
     */
    public static async newEducationResumeRegister(
        newUserData: EducationInformationType
    ): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath(
            "eduResume.new-education-resume-register"
        );
        /* Validate data */
        const validator: EducationResumeInformationValidator = new EducationResumeInformationValidator();
        const validationResult: ActionResultType = validator.validate(
            newUserData
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
                newUserData
            );
            result = axiosResult.data as ActionResultType;
        }
        return result;
    }
}
