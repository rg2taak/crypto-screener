import IValidator from "@Lib/interfaces/frontend/validators/validator-interface";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { AttributeNames, ErrorMessages, Rules, Validator } from "validatorjs";
import BaseValidator from "../base-validator";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";

/**
 * Validator of User Identification Information
 */
export default class UserIdentificationInformationValidator
  extends BaseValidator
  implements IValidator {
  /**
   * Get rules
   */
  public getRules<T>(data?: T): Rules {
    return {
      firstName: "required|min:3",
      lastName: "required|min:3",
      latinFirstName: "required|min:3",
      latinLastName: "required|min:3",
      fatherName: "required|min:3",
      birthCertificateNumber: "required|min:1",
      "birthCertificateSerial.bcLetterCode.code": "required",
      "birthCertificateSerial.bcNumberCode": "required",
      "birthCertificateSerial.serial": "required",
      nationality: "required",
      "birthCountry.country._id": "required",
      "birthCountry.province._id": "required",
      "birthCountry.city._id": "required",
      "birthCertificateExportPlaceCountry.country._id": "required",
      "birthCertificateExportPlaceCountry.province._id": "required",
      "birthCertificateExportPlaceCountry.city._id": "required",
      birthCertificateExportPlaceZone: "required",
    } as Rules;
  }

  /**
   * Get error mesages
   */
  public getMessages<T>(data?: T): ErrorMessages {
    return {
      required: "مقدار :attribute را وارد نمایید",
      size: "مقدار کاراکتر وارد شده برای :attribute مجاز نمی باشد",
      min:
        "مقدار وارد شده برای :attribute می بایست حداقل :min کاراکتر باشد",
      regex: "مقدار فیلد :attribute می بایست فقط عدد باشد",
    } as ErrorMessages;
  }

  /**
   * Setup attribute names
   */
  public getAttributes<T>(data?: T): AttributeNames {
    return {
      firstName: "نام",
      lastName: "نام خانوادگی",
      latinFirstName: "نام انگلیسی",
      latinLastName: "نام خانوادگی انگلیسی",
      fatherName: "نام پدر",
      birthCertificateNumber: "شماره شناسنامه",
      "birthCertificateSerial.bcLetterCode.code": "کد حرفی سریال شناسنامه",
      "birthCertificateSerial.bcNumberCode": "کد عددی سریال شناسنامه",
      "birthCertificateSerial.serial": "سریال شناسنامه",
      nationality: "ملیت",
      "birthCountry.country._id": "کشور محل تولد",
      "birthCountry.province._id": "استان محل تولد",
      "birthCountry.city._id": "شهر محل تولد",
      "birthCertificateExportPlaceCountry.country._id": "کشور محل صدور",
      "birthCertificateExportPlaceCountry.province._id": "استان محل صدور",
      "birthCertificateExportPlaceCountry.city._id": "شهر محل صدور",
      birthCertificateExportPlaceZone: "کد حوزه صدور",
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
  public validate(data: UserIdentificationInformationType): ActionResultType {
    return super.validateData<UserIdentificationInformationType>(this, data);
  }
}
