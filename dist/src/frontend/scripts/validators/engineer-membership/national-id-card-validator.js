"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_validator_1 = require("../base-validator");
/**
 * National id card validator
 */
class NationalIdCardValidator extends base_validator_1.default {
    /**
     * Get rules
     */
    getRules(data) {
        return {
            birthCertificateId: "required|size:10|regex:^[0-9\u06F0-\u06F9]*",
            birthCertificateSerial: "required|size:15|regex:^[0-9\u06F0-\u06F9]*",
        };
    }
    /**
     * Get error mesages
     */
    getMessages(data) {
        return {
            required: "مقدار :attribute را وارد نمایید",
            size: "مقدار کاراکتر وارد شده برای :attribute می بایست :size کاراکتر باشد",
            regex: "مقدار وارد شده برای :attribute می بایست عدد باشد",
        };
    }
    /**
     * Setup attribute names
     */
    getAttributes(data) {
        return {
            birthCertificateId: "کد ملی",
            birthCertificateSerial: "سریال کارت ملی",
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
exports.default = NationalIdCardValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aW9uYWwtaWQtY2FyZC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2Zyb250ZW5kL3NjcmlwdHMvdmFsaWRhdG9ycy9lbmdpbmVlci1tZW1iZXJzaGlwL25hdGlvbmFsLWlkLWNhcmQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQThDO0FBRzlDOztHQUVHO0FBQ0gsTUFBcUIsdUJBQ25CLFNBQVEsd0JBQWE7SUFFckI7O09BRUc7SUFDSSxRQUFRLENBQUksSUFBUTtRQUN6QixPQUFPO1lBQ0wsa0JBQWtCLEVBQUUsNkNBQTZDO1lBQ2pFLHNCQUFzQixFQUFFLDZDQUE2QztTQUM3RCxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFJLElBQVE7UUFDNUIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsSUFBSSxFQUFFLG9FQUFvRTtZQUMxRSxLQUFLLEVBQUUsa0RBQWtEO1NBQ3pDLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYSxDQUFJLElBQVE7UUFDOUIsT0FBTztZQUNMLGtCQUFrQixFQUFDLFFBQVE7WUFDM0Isc0JBQXNCLEVBQUMsZ0JBQWdCO1NBQ3RCLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFJLFNBQXVCO1FBQ3JDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRLENBQUMsSUFBd0I7UUFDdEMsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFxQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGO0FBaERELDBDQWdEQyJ9