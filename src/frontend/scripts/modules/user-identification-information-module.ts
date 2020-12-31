import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "../core/app";
import AxiosModule from "./axios-module";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import UserIdentificationInformationValidator from "../validators/engineer-membership/user-identification-information-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";
import UserNationalIdValidator from "../validators/auth/user-nationalid-validator";
import { NationalIDType } from "@Lib/validation/national-id-type";

/**
 * Identification information module
 */
export default class UserIdentificationInformationModule {
    /**
     * Load bc letter code list
     */
    public static async loadBcLetterCodeList(): Promise<ActionResultType> {
        let result: ActionResultType;

        await App.loadRoutes();
        const url: string = App.routePath(
            "userIdentification.load-bc-letter-code-list"
        );
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request user identification information
     */
    public static async RequestUserIdentificationInformation(): Promise<
        ActionResultType
    > {
        let result: ActionResultType;

        await App.loadRoutes();
        const url: string = App.routePath(
            "userIdentification.request-identification-information"
        );

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }
    // let userIdentificationInformation: Array<UserIdentificationInformationType> = (await import(
    //     "@/mock/user-identification-information-data.json"
    // )) as Array<UserIdentificationInformationType>;

    // let result: ActionResultType = {
    //     success: true,
    //     data: userIdentificationInformation[0],
    // } as ActionResultType;
    // return result;
    // }

    /**
     * Register user identification information
     */
    public static async registerUserIdentificationInformation(
        userIdentificationCertificate: UserIdentificationInformationType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        await App.loadRoutes();
        const url: string = App.routePath(
            "userIdentification.register-user-identification-information"
        );

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
            const axiosResult: AxiosResponse = await AxiosModule.post(
                url,
                userIdentificationCertificate
            );
            result = axiosResult.data as ActionResultType;
        }
        return result;
    }
}
