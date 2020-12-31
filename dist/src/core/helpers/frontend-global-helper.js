"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const global_methods_1 = require("../global/global-methods");
const route_helper_1 = require("./route-helper");
/**
 * Frontend Global Helper
 */
class FrontendGlobalHelper {
    constructor() {
        this.webpackManifest = [];
        this.appConfig = {};
    }
    /**
     * Load assets data
     */
    async prepare() {
        if (null == this.appConfig.publicPath) {
            await this.loadAppConfig();
        }
        if (undefined == this.routesData) {
            await this.loadRoutesData();
        }
        const webpackManifestData = await global_methods_1.default.loadModule("dist/public/assets.json");
        this.webpackManifest = webpackManifestData;
    }
    /**
     * Load routes data
     */
    async loadRoutesData() {
        const path = global_methods_1.default.rPath(this.appConfig.publicPath, "router-manifest.json");
        this.routesData = await global_methods_1.default.loadModule(path);
    }
    /**
     * Load application-config data
     */
    async loadAppConfig() {
        this.appConfig = await global_methods_1.default.config("core/express");
    }
    /**
     * Get route path
     * @param routeName string Route alias
     * @param args IHash<string|number> Arguments
     * @returns string The Route path
     */
    route(routeName, args = {}) {
        const route = this.routesData
            ?.routes[routeName];
        return route_helper_1.default.getRoute(route, args, this.appConfig.url);
    }
    /**
     * Get full route data
     * @param routeName string Route alias
     * @param args Array[string|number] Arguments
     * @returns string The Route data
     */
    routeData(routeName) {
        let route = this.routesData
            ?.routes[routeName];
        return route;
    }
    /**
     * Mix function
     * @param url string Url path
     * @returns string The compiled url
     */
    mix(url) {
        if (url.startsWith("/")) {
            url = url.substr(1);
        }
        const ext = path_1.extname(url).replace(".", "");
        url = url.replace(new RegExp(`\.${ext}$`, "g"), "");
        const routeData = this.webpackManifest.find((x) => x.name == url);
        url = routeData["filename"];
        url = `${this.appConfig.url}/${url}`;
        return url;
    }
}
exports.default = FrontendGlobalHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtZ2xvYmFsLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29yZS9oZWxwZXJzL2Zyb250ZW5kLWdsb2JhbC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsNkRBQXdEO0FBSXhELGlEQUEwQztBQUUxQzs7R0FFRztBQUNILE1BQXFCLG9CQUFvQjtJQUF6QztRQUNZLG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBc0IsRUFBdUIsQ0FBQztJQXdGbkUsQ0FBQztJQXJGRzs7T0FFRztJQUNJLEtBQUssQ0FBQyxPQUFPO1FBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQjtRQUVELE1BQU0sbUJBQW1CLEdBQVcsTUFBTSx3QkFBYSxDQUFDLFVBQVUsQ0FDOUQseUJBQXlCLENBQzVCLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFpQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNLLEtBQUssQ0FBQyxjQUFjO1FBQ3hCLE1BQU0sSUFBSSxHQUFXLHdCQUFhLENBQUMsS0FBSyxDQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFDekIsc0JBQXNCLENBQ3pCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxVQUFVLENBQWdCLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNLLEtBQUssQ0FBQyxhQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSx3QkFBYSxDQUFDLE1BQU0sQ0FDdkMsY0FBYyxDQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFNBQWlCLEVBQUUsT0FBc0IsRUFBRTtRQUNwRCxNQUFNLEtBQUssR0FBbUIsSUFBSSxDQUFDLFVBQVU7WUFDekMsRUFBRSxNQUErQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELE9BQU8sc0JBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBQyxTQUFpQjtRQUM5QixJQUFJLEtBQUssR0FBbUIsSUFBSSxDQUFDLFVBQVU7WUFDdkMsRUFBRSxNQUErQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLEdBQVc7UUFDbEIsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxHQUFHLEdBQUcsY0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNsRSxHQUFHLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBVyxDQUFDO1FBQ3RDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXJDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBMUZELHVDQTBGQyJ9