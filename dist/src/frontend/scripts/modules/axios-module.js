"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class AxiosModule {
    /**
     * get data
     * @param type
     * @param url
     * @param data
     * @param options
     */
    static async get(url, options) {
        const result = await axios_1.default.get(url, options);
        return result;
    }
    /**
     * Post data
     * @param type
     * @param url
     * @param data
     * @param options
     */
    static async post(url, data, options) {
        const result = await axios_1.default.post(url, data, options);
        return result;
    }
}
exports.default = AxiosModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9zY3JpcHRzL21vZHVsZXMvYXhpb3MtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXdEO0FBRXhELE1BQXFCLFdBQVc7SUFDOUI7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBVyxFQUFFLE9BQWE7UUFDaEQsTUFBTSxNQUFNLEdBQWtCLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN0QixHQUFXLEVBQ1gsSUFBUyxFQUNULE9BQWE7UUFFYixNQUFNLE1BQU0sR0FBa0IsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFbkUsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBOUJELDhCQThCQyJ9