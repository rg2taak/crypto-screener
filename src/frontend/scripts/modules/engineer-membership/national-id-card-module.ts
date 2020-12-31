import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { NationalIdDataType } from "@Lib/types/frontend/engineer-membership/national-id-data-type";
import NationalIdCardValidator from "@FE/Scripts/validators/engineer-membership/national-id-card-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";

/**
 * Identification information module
 */
export default class NationalIdCardModule {
    /**
     * Request user identification information
     */
    public static async RequestNationalIdData(
        nationalId: NationalIdDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        await App.loadRoutes();
        const url: string = App.routePath(
            "nationalId.request-national-id-data"
        );
        /* TODO: Validate data */
        const axiosResult: AxiosResponse = await AxiosModule.post(
            url,
            nationalId
        );
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Register user identification information
     */
    public static async registerNationalIdCard(
        nationalIdCard: NationalIdDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        await App.loadRoutes();
        const url: string = App.routePath(
            "nationalId.register-national-id-card"
        );

        /* Validate data */
        const validator: NationalIdCardValidator = new NationalIdCardValidator();
        const validationResult: ActionResultType = validator.validate(
            nationalIdCard
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
                nationalIdCard
            );
            result = axiosResult.data as ActionResultType;
        }
        return result;
    }
}
