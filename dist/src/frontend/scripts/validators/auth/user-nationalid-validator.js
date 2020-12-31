"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_validator_1 = require("../base-validator");
/**
 * Validator of UserLogin
 */
class UserNationalIdValidator extends base_validator_1.default {
    /**
     * Get rules
     */
    getRules(data) {
        return {
            nationalId: "required|size:10",
        };
    }
    /**
     * Get error mesages
     */
    getMessages(data) {
        return {
            required: "فیلد :attribute می بایست تکمیل شود",
            size: "مقدار فیلد :attribute می بایست :size کاراکتر باشد",
            regex: "مقدار فیلد :attribute می بایست فقط عدد باشد",
        };
    }
    /**
     * Setup attribute names
     */
    getAttributes(data) {
        return {
            nationalId: "کد ملی",
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
exports.default = UserNationalIdValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1uYXRpb25hbGlkLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvZnJvbnRlbmQvc2NyaXB0cy92YWxpZGF0b3JzL2F1dGgvdXNlci1uYXRpb25hbGlkLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHNEQUE4QztBQUU5Qzs7R0FFRztBQUNILE1BQXFCLHVCQUF3QixTQUFRLHdCQUFhO0lBRWhFOztPQUVHO0lBQ0ksUUFBUSxDQUFJLElBQVE7UUFDekIsT0FBTztZQUNMLFVBQVUsRUFBRSxrQkFBa0I7U0FDdEIsQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVcsQ0FBSSxJQUFRO1FBQzVCLE9BQU87WUFDTCxRQUFRLEVBQUUsb0NBQW9DO1lBQzlDLElBQUksRUFBRSxtREFBbUQ7WUFDekQsS0FBSyxFQUFFLDZDQUE2QztTQUNwQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWEsQ0FBSSxJQUFRO1FBQzlCLE9BQU87WUFDTCxVQUFVLEVBQUUsUUFBUTtTQUNILENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFJLFNBQXVCO1FBQ3JDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRLENBQUMsSUFBb0I7UUFDbEMsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFpQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBN0NELDBDQTZDQyJ9