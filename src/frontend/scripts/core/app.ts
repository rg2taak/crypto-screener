import RouterHelper from "@Core/Helpers/route-helper";
import IHash from "@Lib/interfaces/hash-interface";
import { RouteFileType, RouteItemType } from "@Lib/types/core/route-data-type";
import Base from "./base";

/**
 * App class
 */
export class App extends Base {
    public _routesData?: RouteFileType = undefined;

    /**
     * Getter: _routesData
     */
    public get routesData(): RouteFileType {
        return this._routesData as RouteFileType;
    }

    /**
     * Constructor
     */
    constructor() {
        super();
        this.loadRoutes();
    }

    /**
     * Load routes
     */
    public async loadRoutes() {
        if (!this._routesData) {
            const res = await import("@PUBLIC/router-manifest.json");

            this._routesData = res.default || res;
        }
    }

    /**
     * Get a route data
     * @param name string Route name
     */
    public route(name: string): RouteItemType {
        const route: RouteItemType = this.routesData.routes[name];

        if (undefined == route) {
            throw new Error("Route not found");
        }

        return route;
    }

    /**
     * Get a route path
     * @param name string Route name
     */
    public routePath(name: string, args: IHash<string> = {}): string {
        const route: RouteItemType = this.route(name);

        return RouterHelper.getRoute(route, args, this.routesData.url);
    }
}

/**
 * Export default value
 */
export default new App();
