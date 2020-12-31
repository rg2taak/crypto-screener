import IValidator from "@Lib/interfaces/frontend/validators/validator-interface";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { AttributeNames, ErrorMessages, Rules, Validator } from "validatorjs";
import BaseValidator from "../base-validator";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";

/**
 * Organization resume validator
 */
export default class OrganizationResumeValidator extends BaseValidator
    implements IValidator {
    /**
     * Get rules
     */
    public getRules<T>(data?: T): Rules {
        return {
            "province.code": "required",
            membershipId: "required",
            membershipStartDate: "required",
            membershipFinishDate: "required",
        } as Rules;
    }

    /**
     * Get error mesages
     */
    public getMessages<T>(data?: T): ErrorMessages {
        return {
            required: "مقدار :attribute را وارد نمایید",
            size: "مقدار کاراکتر وارد شده برای :attribute مجاز نمی باشد",
        } as ErrorMessages;
    }

    /**
     * Setup attribute names
     */
    public getAttributes<T>(data?: T): AttributeNames {
        return {
          "province.code": "استان",
          membershipId: "شماره عضویت",
          membershipStartDate: "تاریخ شروع عضویت",
          membershipFinishDate: "تاریخ پایان عضویت",
        } as AttributeNames;
    }

    /**
     * Setup Validator
     */
    public setup<T>(validator: Validator<T>): void {
        validator.lang = "en";
    }

    /**
     * Validate data
     * @param data Input data
     */
    public validate(data: OrganizationResumeDataType): ActionResultType {
        return super.validateData<OrganizationResumeDataType>(this, data);
    }
}
