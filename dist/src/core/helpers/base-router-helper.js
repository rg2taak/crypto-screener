"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
 * Base Router
 */
class BaseRouter {
    /**
     * Constructor
     * @param baseUrl string BaseUrl
     * @param routerOptions RouterOptions Router options
     */
    constructor(baseUrl, name = baseUrl, routerOptions) {
        this._baseUrl = "";
        this._name = "";
        this._routes = {};
        this._baseUrl = baseUrl;
        this._name = name;
        this._router = express_1.Router(routerOptions);
    }
    /**
     * Getter: Router
     */
    get router() {
        if (!this._router) {
            throw new Error("Router is null");
        }
        return this._router;
    }
    /**
     * Get router base-url
     */
    getBaseUrl() {
        return this._baseUrl;
    }
    /**
     * Get router name
     */
    getName() {
        return this._name;
    }
    /**
     * Get router
     */
    getRouter() {
        return this.router;
    }
    /**
     * Get routers list
     * @returns IHash<IRouter> get all routes
     */
    getRoutes() {
        return this._routes;
    }
    /**
     * Apply router on an express-application instance
     * @param app Application Express application instance
     */
    apply(app) {
        if (null == app) {
            throw new Error("App is undefined");
        }
        else if (null == this._router) {
            throw new Error("Router is undefined");
        }
        app.use(this._baseUrl, this.router);
    }
    /**
     * Get routes list
     */
    getRoutesList() {
        const result = {};
        const keys = Object.keys(this._routes);
        keys.forEach((key) => {
            const route = this._routes[key];
            result[key] = {
                baseUrl: this._baseUrl,
                alias: key,
                path: route.route.path,
                keys: route.keys,
                method: route.route.stack.map((x) => x.method),
            };
        });
        return result;
    }
    /**
     * Get last route
     * @returns any Get last route
     */
    getLastRoute() {
        return this._router?.stack[this._router?.stack.length - 1];
    }
    /**
     * Add a new "ALL" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    all(pattern, middlewares, alias) {
        this.router.all(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "OPTIONS" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    options(pattern, middlewares, alias) {
        this.router.options(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "HEAD" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    head(pattern, middlewares, alias) {
        this.router.head(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "GET" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    get(pattern, middlewares, alias) {
        this.router.get(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "POST" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    post(pattern, middlewares, alias) {
        this.router.post(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "PATCH" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    patch(pattern, middlewares, alias) {
        this.router.patch(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "PUT" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    put(pattern, middlewares, alias) {
        this.router.put(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
    /**
     * Add a new "DELETE" route
     * @param pattern string Pattern string
     * @param middlewares RequestHandler[] Request handlers
     * @param alias string Alias of route
     */
    del(pattern, middlewares, alias) {
        this.router.delete(pattern, middlewares);
        if (alias) {
            let newRoute = this.getLastRoute();
            this._routes[alias] = newRoute;
        }
    }
}
exports.default = BaseRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb3V0ZXItaGVscGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL2hlbHBlcnMvYmFzZS1yb3V0ZXItaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBTWlCO0FBS2pCOztHQUVHO0FBQ0gsTUFBcUIsVUFBVTtJQWlCM0I7Ozs7T0FJRztJQUNILFlBQ0ksT0FBZSxFQUNmLE9BQWUsT0FBTyxFQUN0QixhQUE2QjtRQXhCekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBdUJqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCRDs7T0FFRztJQUNILElBQVcsTUFBTTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFpQkQ7O09BRUc7SUFDSSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLEdBQWdCO1FBQ3pCLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2QzthQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ2hCLE1BQU0sTUFBTSxHQUF5QixFQUFFLENBQUM7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLE1BQU0sS0FBSyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHO2dCQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdEIsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ3JDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FDTixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV0QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FDVixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUUxQyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLElBQUksQ0FDUCxPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV2QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FDTixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV0QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLElBQUksQ0FDUCxPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV2QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FDUixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV4QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FDTixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV0QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FDTixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsS0FBYztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV6QyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FDSjtBQWhRRCw2QkFnUUMifQ==