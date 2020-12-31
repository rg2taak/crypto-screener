import { ActionResultType } from "@Lib/types/core/action-result-type";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import UserIdentificationInformationValidator from "@FE/Scripts/validators/engineer-membership/user-identification-information-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";
import { Routes } from "../service-route-helper";
import UserNationalIdValidator from "@FE/Scripts/validators/auth/user-nationalid-validator";
import { NationalIDType } from "@Lib/validation/national-id-type";
import { BcLetterCodeType } from "@Lib/types/frontend/identification/bc-letter-code-type";
import AuthHelper from "../auth-helper";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";

/**
 * User identification information helper class
 */
export default class UserIdentificationInformationHelper {
    /**
     * Request identification information
     */
    public static async requestIdentificationInformation(
        nationalID: NationalIDType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["userId.reg-user-id-info"];

        /* Validate data */
        const validator: UserNationalIdValidator = new UserNationalIdValidator();
        const validationResult: ActionResultType = validator.validate(
            nationalID
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
                nationalID.nationalId
            );
            result = axiosResult.data as ActionResultType;
        }
        return result;
    }

    /**
     * Register user identification information
     */
    public static async registerUserIdentificationInformation(
        userIdentificationCertificate: UserIdentificationInformationType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["userId.register-user-identification-information"];

        /* Validate data */
        const validator: UserIdentificationInformationValidator = new UserIdentificationInformationValidator();
        const validationResult: ActionResultType = validator.validate(
            userIdentificationCertificate
        );
        if (!validationResult.success) {
            const validationError: ValidatorErrorType = validationResult.data as ValidatorErrorType;
            result = {
                success: false,
                data: validationError.errors,
            };
        } else {
            console.log(userIdentificationCertificate);
            const axiosResult: AxiosResponse = await AxiosModule.post(
                url,
                userIdentificationCertificate
            );
            console.log(axiosResult.data);
            result = axiosResult.data as ActionResultType;
        }
        return result;
    }

    /**
     * load BcLetter Code List
     */
    public static async loadBcLetterCodeList(): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["userId.reg-user-id-info"];

        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        let bcLetterCodeList: Array<BcLetterCodeType> = (await import(
            "@/mock/bc-letter-code-list.json"
        )) as Array<BcLetterCodeType>;

        result = {
            success: true,
            data: bcLetterCodeList,
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }
}
