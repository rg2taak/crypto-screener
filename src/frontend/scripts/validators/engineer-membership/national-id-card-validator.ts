import IValidator from "@Lib/interfaces/frontend/validators/validator-interface";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { AttributeNames, ErrorMessages, Rules, Validator } from "validatorjs";
import BaseValidator from "../base-validator";
import { NationalIdDataType } from "@Lib/types/frontend/engineer-membership/national-id-data-type";

/**
 * National id card validator
 */
export default class NationalIdCardValidator
  extends BaseValidator
  implements IValidator {
  /**
   * Get rules
   */
  public getRules<T>(data?: T): Rules {
    return {
      birthCertificateId: "required|size:10|regex:^[0-9\u06F0-\u06F9]*",
      birthCertificateSerial: "required|size:15|regex:^[0-9\u06F0-\u06F9]*",
    } as Rules;
  }

  /**
   * Get error mesages
   */
  public getMessages<T>(data?: T): ErrorMessages {
    return {
      required: "مقدار :attribute را وارد نمایید",
      size: "مقدار کاراکتر وارد شده برای :attribute می بایست :size کاراکتر باشد",
      regex: "مقدار وارد شده برای :attribute می بایست عدد باشد",
    } as ErrorMessages;
  }

  /**
   * Setup attribute names
   */
  public getAttributes<T>(data?: T): AttributeNames {
    return {
      birthCertificateId:"کد ملی",
      birthCertificateSerial:"سریال کارت ملی",
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
  public validate(data: NationalIdDataType): ActionResultType {
    return super.validateData<NationalIdDataType>(this, data);
  }
}
