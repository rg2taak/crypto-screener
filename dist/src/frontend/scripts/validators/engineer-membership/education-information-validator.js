"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_validator_1 = require("../base-validator");
/**
 * Validator of Education Resume Information
 */
class EducationResumeInformationValidator extends base_validator_1.default {
    /**
     * Get rules
     */
    getRules(data) {
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
        };
    }
    /**
     * Get error mesages
     */
    getMessages(data) {
        return {
            required: "مقدار :attribute را وارد نمایید",
            size: "مقدار کاراکتر وارد شده برای :attribute مجاز نمی باشد",
        };
    }
    /**
     * Setup attribute names
     */
    getAttributes(data) {
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
        };
    }
    /**
     * Setup Validator
     */
    setup(validator) {
        validator.lang = "en";
    }
    /**
     * Validate data
     * @param data Input data
     */
    validate(data) {
        return super.validateData(this, data);
    }
}
exports.default = EducationResumeInformationValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLWluZm9ybWF0aW9uLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvZnJvbnRlbmQvc2NyaXB0cy92YWxpZGF0b3JzL2VuZ2luZWVyLW1lbWJlcnNoaXAvZWR1Y2F0aW9uLWluZm9ybWF0aW9uLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHNEQUE4QztBQUc5Qzs7R0FFRztBQUNILE1BQXFCLG1DQUNuQixTQUFRLHdCQUFhO0lBRXJCOztPQUVHO0lBQ0ksUUFBUSxDQUFJLElBQVE7UUFDekIsT0FBTztZQUNMLHFCQUFxQixFQUFFLFVBQVU7WUFDakMsbUJBQW1CLEVBQUUsVUFBVTtZQUMvQiwwQkFBMEIsRUFBRSxVQUFVO1lBQ3RDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsNkJBQTZCLEVBQUUsVUFBVTtZQUN6Qyw4QkFBOEIsRUFBRSxVQUFVO1lBQzFDLDBCQUEwQixFQUFFLFVBQVU7WUFDdEMsZUFBZSxFQUFFLFVBQVU7WUFDM0IsU0FBUyxFQUFFLFVBQVU7WUFDckIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsTUFBTSxFQUFFLFVBQVU7U0FDVixDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFJLElBQVE7UUFDNUIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsSUFBSSxFQUFFLHNEQUFzRDtTQUM1QyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWEsQ0FBSSxJQUFRO1FBQzlCLE9BQU87WUFDSCxxQkFBcUIsRUFBRSxhQUFhO1lBQ3BDLG1CQUFtQixFQUFFLGFBQWE7WUFDbEMsMEJBQTBCLEVBQUUsY0FBYztZQUMxQyxpQkFBaUIsRUFBRSxhQUFhO1lBQ2hDLDZCQUE2QixFQUFFLGdCQUFnQjtZQUMvQyw4QkFBOEIsRUFBRSxpQkFBaUI7WUFDakQsMEJBQTBCLEVBQUUsZUFBZTtZQUMzQyxlQUFlLEVBQUUsYUFBYTtZQUM5QixTQUFTLEVBQUUsa0JBQWtCO1lBQzdCLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsTUFBTSxFQUFFLFlBQVk7U0FDTCxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBSSxTQUF1QjtRQUNyQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLElBQThCO1FBQzVDLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBMkIsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDRjtBQWpFRCxzREFpRUMifQ==