"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Authentication Helper class
 */
class AuthHelper {
    /**
     * Clear session data
     * @param req Express.Request request object
     */
    static logout(req) {
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                resolve();
            });
        });
    }
    /**
     * Register session data
     * @param req Express.Request request object
     * @param payload any session data
     */
    static async register(req, payload) {
        const sessionData = req.session;
        sessionData.nationalId = payload.nationalId;
        sessionData.jwt = payload.jwt;
        sessionData.loginAt = payload.loginAt;
    }
    /**
     * Check for authenticated user
     * @param req Express.Request request object
     */
    static async check(req) {
        const sessionData = req.session;
        return undefined != sessionData.loginAt;
    }
    /**
     * Attempt to login
     * @param req Express.Request request object
     * @param payload SessionDataModel session data
     */
    static async attempt(req, payload) {
        /* TODO: CHECK DAETABASE */
        await this.register(req, payload);
        return true;
    }
}
exports.default = AuthHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy9hdXRoLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBOztHQUVHO0FBQ0gsTUFBcUIsVUFBVTtJQUMzQjs7O09BR0c7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVk7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN4QixPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUg7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUMxQixHQUFZLEVBQ1osT0FBMEI7UUFFMUIsTUFBTSxXQUFXLEdBQXNCLEdBQUcsQ0FBQyxPQUE0QixDQUFDO1FBQ3BFLFdBQVcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxXQUFXLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDOUIsV0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFZO1FBQ2xDLE1BQU0sV0FBVyxHQUFxQixHQUFHLENBQUMsT0FBMkIsQ0FBQztRQUV0RSxPQUFPLFNBQVMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFSDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLEdBQVksRUFDWixPQUF5QjtRQUV6QiwyQkFBMkI7UUFDM0IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFwREQsNkJBb0RDIn0=