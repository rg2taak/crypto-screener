import IValidator from "@Lib/interfaces/frontend/validators/validator-interface";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { AttributeNames, ErrorMessages, Rules, Validator } from "validatorjs";
import BaseValidator from "../base-validator";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";

/**
 * Validator of Education Resume Information
 */
export default class EducationResumeInformationValidator
  extends BaseValidator
  implements IValidator {
  /**
   * Get rules
   */
  public getRules<T>(data?: T): Rules {
    return {
      "educationGrade.code": "required",
      "fieldOfStudy.code": "required",
      "academicOrientation.code": "required",
      "university.name": "required",
      "university.location.country": "required",
      "university.location.province": "required",
      "university.location.city": "required",
      educationStatus: "required",
      startDate: "required",
      finishDate: "required",
      thesis: "required",
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
        "educationGrade.code": "مقطع تحصیلی",
        "fieldOfStudy.code": "رشته تحصیلی",
        "academicOrientation.code": "گرایش تحصیلی",
        "university.name": "نام دانشگاه",
        "university.location.country": "کشور محل تحصیل",
        "university.location.province": "استان محل تحصیل",
        "university.location.city": "شهر محل تحصیل",
        educationStatus: "وضعیت تحصیل",
        startDate: "تاریخ شروع تحصیل",
        finishDate: "تاریخ پایان تحصیل",
        thesis: "پایان نامه",
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
  public validate(data: EducationInformationType): ActionResultType {
    return super.validateData<EducationInformationType>(this, data);
  }
}
