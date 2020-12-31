"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_validator_1 = require("../base-validator");
/**
 * Validator of User Identification Information
 */
class UserIdentificationInformationValidator extends base_validator_1.default {
    /**
     * Get rules
     */
    getRules(data) {
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
        };
    }
    /**
     * Get error mesages
     */
    getMessages(data) {
        return {
            required: "مقدار :attribute را وارد نمایید",
            size: "مقدار کاراکتر وارد شده برای :attribute مجاز نمی باشد",
            min: "مقدار وارد شده برای :attribute می بایست حداقل :min کاراکتر باشد",
            regex: "مقدار فیلد :attribute می بایست فقط عدد باشد",
        };
    }
    /**
     * Setup attribute names
     */
    getAttributes(data) {
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
exports.default = UserIdentificationInformationValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pZGVudGlmaWNhdGlvbi1pbmZvcm1hdGlvbi12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2Zyb250ZW5kL3NjcmlwdHMvdmFsaWRhdG9ycy9lbmdpbmVlci1tZW1iZXJzaGlwL3VzZXItaWRlbnRpZmljYXRpb24taW5mb3JtYXRpb24tdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQThDO0FBRzlDOztHQUVHO0FBQ0gsTUFBcUIsc0NBQ25CLFNBQVEsd0JBQWE7SUFFckI7O09BRUc7SUFDSSxRQUFRLENBQUksSUFBUTtRQUN6QixPQUFPO1lBQ0wsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLHNCQUFzQixFQUFFLGdCQUFnQjtZQUN4QywwQ0FBMEMsRUFBRSxVQUFVO1lBQ3RELHFDQUFxQyxFQUFFLFVBQVU7WUFDakQsK0JBQStCLEVBQUUsVUFBVTtZQUMzQyxXQUFXLEVBQUUsVUFBVTtZQUN2QiwwQkFBMEIsRUFBRSxVQUFVO1lBQ3RDLDJCQUEyQixFQUFFLFVBQVU7WUFDdkMsdUJBQXVCLEVBQUUsVUFBVTtZQUNuQyxnREFBZ0QsRUFBRSxVQUFVO1lBQzVELGlEQUFpRCxFQUFFLFVBQVU7WUFDN0QsNkNBQTZDLEVBQUUsVUFBVTtZQUN6RCwrQkFBK0IsRUFBRSxVQUFVO1NBQ25DLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUksSUFBUTtRQUM1QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyxJQUFJLEVBQUUsc0RBQXNEO1lBQzVELEdBQUcsRUFDRCxpRUFBaUU7WUFDbkUsS0FBSyxFQUFFLDZDQUE2QztTQUNwQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWEsQ0FBSSxJQUFRO1FBQzlCLE9BQU87WUFDTCxTQUFTLEVBQUUsS0FBSztZQUNoQixRQUFRLEVBQUUsY0FBYztZQUN4QixjQUFjLEVBQUUsYUFBYTtZQUM3QixhQUFhLEVBQUUsc0JBQXNCO1lBQ3JDLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLHNCQUFzQixFQUFFLGdCQUFnQjtZQUN4QywwQ0FBMEMsRUFBRSx3QkFBd0I7WUFDcEUscUNBQXFDLEVBQUUsd0JBQXdCO1lBQy9ELCtCQUErQixFQUFFLGdCQUFnQjtZQUNqRCxXQUFXLEVBQUUsTUFBTTtZQUNuQiwwQkFBMEIsRUFBRSxlQUFlO1lBQzNDLDJCQUEyQixFQUFFLGdCQUFnQjtZQUM3Qyx1QkFBdUIsRUFBRSxjQUFjO1lBQ3ZDLGdEQUFnRCxFQUFFLGVBQWU7WUFDakUsaURBQWlELEVBQUUsZ0JBQWdCO1lBQ25FLDZDQUE2QyxFQUFFLGNBQWM7WUFDN0QsK0JBQStCLEVBQUUsY0FBYztTQUM5QixDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBSSxTQUF1QjtRQUNyQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLElBQXVDO1FBQ3JELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBb0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7Q0FDRjtBQWhGRCx5REFnRkMifQ==