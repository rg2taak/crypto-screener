"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidatorJs = require("validatorjs");
class BaseValidator {
    /**
     * Generate error string
     * @param errors Errors lsit
     */
    generateErrorString(errors) {
        const errorValues = Object.values(errors);
        const result = errorValues.map((err) => err.join("\n")).join("\n");
        return result;
    }
    /**
     * Validate data
     */
    validateData(validator, data) {
        const result = {};
        /* Preparation */
        const validatorJS = new ValidatorJs(data, validator.getRules(data), validator.getMessages(data));
        validator.setup(validatorJS);
        validatorJS.setAttributeNames(validator.getAttributes(data));
        /* Check */
        result.success = true == validatorJS.passes();
        if (!result.success) {
            result.data = {
                validator: validatorJS,
                errors: this.generateErrorString(validatorJS.errors.all()),
            };
        }
        return result;
    }
}
exports.default = BaseValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2Zyb250ZW5kL3NjcmlwdHMvdmFsaWRhdG9ycy9iYXNlLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJDQUEyQztBQUUzQyxNQUFxQixhQUFhO0lBQzlCOzs7T0FHRztJQUNJLG1CQUFtQixDQUFDLE1BQW9DO1FBQzNELE1BQU0sV0FBVyxHQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRSxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZLENBQUksU0FBcUIsRUFBRSxJQUFTO1FBQ25ELE1BQU0sTUFBTSxHQUFxQixFQUFzQixDQUFDO1FBRXhELGlCQUFpQjtRQUNqQixNQUFNLFdBQVcsR0FBNkIsSUFBSSxXQUFXLENBQ3pELElBQUksRUFDSixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUN4QixTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUM5QixDQUFDO1FBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBSSxXQUFXLENBQUMsQ0FBQztRQUNoQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTdELFdBQVc7UUFDWCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksR0FBRztnQkFDVixTQUFTLEVBQUUsV0FBVztnQkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3ZDLENBQUM7U0FDM0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUF0Q0QsZ0NBc0NDIn0=