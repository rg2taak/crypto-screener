"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_validator_1 = require("../base-validator");
/**
 * Organization resume validator
 */
class OrganizationResumeValidator extends base_validator_1.default {
    /**
     * Get rules
     */
    getRules(data) {
        return {
            "province.code": "required",
            membershipId: "required",
            membershipStartDate: "required",
            membershipFinishDate: "required",
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
            "province.code": "استان",
            membershipId: "شماره عضویت",
            membershipStartDate: "تاریخ شروع عضویت",
            membershipFinishDate: "تاریخ پایان عضویت",
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
exports.default = OrganizationResumeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLXJlc3VtZS12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2Zyb250ZW5kL3NjcmlwdHMvdmFsaWRhdG9ycy9lbmdpbmVlci1tZW1iZXJzaGlwL29yZ2FuaXphdGlvbi1yZXN1bWUtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQThDO0FBRzlDOztHQUVHO0FBQ0gsTUFBcUIsMkJBQTRCLFNBQVEsd0JBQWE7SUFFbEU7O09BRUc7SUFDSSxRQUFRLENBQUksSUFBUTtRQUN2QixPQUFPO1lBQ0gsZUFBZSxFQUFFLFVBQVU7WUFDM0IsWUFBWSxFQUFFLFVBQVU7WUFDeEIsbUJBQW1CLEVBQUUsVUFBVTtZQUMvQixvQkFBb0IsRUFBRSxVQUFVO1NBQzFCLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUksSUFBUTtRQUMxQixPQUFPO1lBQ0gsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyxJQUFJLEVBQUUsc0RBQXNEO1NBQzlDLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYSxDQUFJLElBQVE7UUFDNUIsT0FBTztZQUNMLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLFlBQVksRUFBRSxhQUFhO1lBQzNCLG1CQUFtQixFQUFFLGtCQUFrQjtZQUN2QyxvQkFBb0IsRUFBRSxtQkFBbUI7U0FDeEIsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUksU0FBdUI7UUFDbkMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVEsQ0FBQyxJQUFnQztRQUM1QyxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQTZCLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0o7QUFsREQsOENBa0RDIn0=