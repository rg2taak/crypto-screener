import { ActionResultType } from "@Lib/types/core/action-result-type";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import UserIdentificationInformationValidator from "@FE/Scripts/validators/engineer-membership/user-identification-information-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";
import { Routes } from "../service-route-helper";
import UserNationalIdValidator from "@FE/Scripts/validators/auth/user-nationalid-validator";
import { NationalIDType } from "@Lib/validation/national-id-type";
import { BcLetterCodeType } from "@Lib/types/frontend/identification/bc-letter-code-type";
import { NationalIdDataType } from "@Lib/types/frontend/engineer-membership/national-id-data-type";
import NationalIdCardValidator from "@FE/Scripts/validators/engineer-membership/national-id-card-validator";

/**
 * National id card helper class
 */
export default class NationalIdCardHelper {
    /**
     * Request national id card information
     */
    public static async requestNationalIdData(
        nationalID: NationalIdDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["userId.reg-user-id-info"];

        /* TODO: Validate data */

        let nationalIdData: Array<NationalIdDataType> = (await import(
            "@/mock/national-id-card.json"
        )) as Array<NationalIdDataType>;

        result = {
            success: true,
            data: nationalIdData[0],
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;
        return result;
    }

    /**
     * Register user identification information
     */
    public static async registerNationalIdCard(
        nationalID: NationalIdDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["userId.reg-user-id-info"];

        /* Validate data */
        const validator: NationalIdCardValidator = new NationalIdCardValidator();
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
            // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
            //TODO: Clear this code
            result = {
                success: true,
                data: "ثبت با موفقیت انجام شد",
            } as ActionResultType;
            // result = axiosResult.data as ActionResultType;
        }

        return result;
    }
}
