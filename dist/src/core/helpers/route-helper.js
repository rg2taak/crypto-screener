"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
/**
 * Router helper
 */
class RouterHelper {
    /**
     * Get route path with applied arguments
     */
    static getRoute(route, args, serverUrl) {
        if (null == route) {
            throw new Error(`Route ${chalk_1.yellow(name)} not found`);
        }
        /* Perpare */
        let keys = route.keys || [];
        let routePath = route.path;
        let baseUrl = route.baseUrl;
        /*  Apply arguments */
        keys.forEach((key) => {
            const newValue = args[key.name] || "";
            const argKey = `/\\:${key.name}${key.optional ? "\\??" : ""}`;
            const regexp = new RegExp(argKey, "g");
            routePath = routePath.replace(regexp, `/${newValue}`);
        });
        /* Generate result */
        let result = `${serverUrl}${baseUrl}${routePath}`;
        return result;
    }
}
exports.default = RouterHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtaGVscGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL2hlbHBlcnMvcm91dGUtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQStCO0FBSS9COztHQUVHO0FBQ0gsTUFBcUIsWUFBWTtJQUM3Qjs7T0FFRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLEtBQW9CLEVBQ3BCLElBQW1CLEVBQ25CLFNBQWlCO1FBRWpCLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxjQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3REO1FBRUQsYUFBYTtRQUNiLElBQUksSUFBSSxHQUF3QixLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFNUIsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxNQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdkMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILHFCQUFxQjtRQUNyQixJQUFJLE1BQU0sR0FBRyxHQUFHLFNBQVMsR0FBRyxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFFbEQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBaENELCtCQWdDQyJ9