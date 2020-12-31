"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const chalk_1 = require("chalk");
const global_data_1 = require("../global/global-data");
const global_methods_1 = require("../global/global-methods");
const route_helper_1 = require("./route-helper");
/**
 * Router manager
 */
class RouterManager {
    constructor() {
        this._routers = {};
        this._routes = {};
    }
    /**
     * Getter: routers
     * @returns IHash<IBaseRouter> Return routers
     */
    get routers() {
        return this._routers;
    }
    /**
     * Getter: routes
     * @returns IHash<IBaseRouter> Return routers
     */
    get routes() {
        return this._routes;
    }
    /**
     * Load static data
     */
    static async loadStaticData() {
        RouterManager.appConfig = await global_methods_1.default.config("core/express");
    }
    /**
     * Init routers
     */
    async initRouters() {
        const routesPath = global_methods_1.default.rPath(__dirname, "../../routes/**/*");
        /* Load routers */
        const files = await global_methods_1.default.loadFiles(routesPath);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const RouterModule = await global_methods_1.default.loadModule(file);
            const routerModule = new RouterModule();
            const routerUrl = routerModule.getBaseUrl();
            const routerName = routerModule.getName();
            this._routers[routerUrl] = routerModule;
            global_data_1.default.logger.info(`Route ${chalk_1.yellow(routerName)}:${chalk_1.green(routerUrl)} loaded successfully`);
        }
        /* Collect routes-data */
        this._routes = await this.getRoutesList();
    }
    /**
     * Apply routers to an app instance
     * @param app Express.Application Express application instance
     */
    async apply(app) {
        if (null == app) {
            throw new Error("App is null");
        }
        const keys = Object.keys(this.routers);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            let router = this.routers[key];
            router.apply(app);
            global_data_1.default.logger.info(`Express router ${chalk_1.yellow(key)} applied`);
        }
    }
    /**
     * Get routers list
     */
    async getRoutesList() {
        let result = {};
        Object.keys(this.routers).forEach((key) => {
            let routes = this.routers[key].getRoutesList();
            result = { ...result, ...routes };
        });
        return result;
    }
    /**
     * Get route by name (with parameters)
     * @param name string Route name
     * @param args Array<any> parameters
     */
    route(name, args = {}) {
        return route_helper_1.default.getRoute(this.routes[name], args, RouterManager.appConfig.url);
    }
    /**
     * Create manifest file
     * @param path string Manifest file path
     */
    async createManifestFile(path) {
        if (!path) {
            const serverConfig = await global_methods_1.default.config("core/server");
            path = serverConfig.routerManifest;
        }
        if (!path) {
            throw new Error("route-manifest file path is not specified");
        }
        else {
            path = global_methods_1.default.rPath(path);
        }
        /* Create public directory if not exists */
        await global_methods_1.default.createDir(path_1.dirname(path));
        /* Create content */
        const content = {
            url: RouterManager.appConfig.url,
            routes: this.routes,
        };
        /* Write to file */
        fs_1.writeFileSync(path, JSON.stringify(content, null, 2));
    }
}
exports.default = RouterManager;
RouterManager.appConfig = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLW1hbmFnZXItaGVscGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL2hlbHBlcnMvcm91dGVyLW1hbmFnZXItaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQW1DO0FBQ25DLCtCQUErQjtBQUMvQixpQ0FBc0M7QUFFdEMsdURBQW1EO0FBQ25ELDZEQUF5RDtBQU16RCxpREFBMEM7QUFFMUM7O0dBRUc7QUFDSCxNQUFxQixhQUFhO0lBQWxDO1FBRVksYUFBUSxHQUF1QixFQUFFLENBQUM7UUFDbEMsWUFBTyxHQUF5QixFQUFFLENBQUM7SUEwSS9DLENBQUM7SUF4SUc7OztPQUdHO0lBQ0gsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjO1FBQzlCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsTUFBTSx3QkFBYSxDQUFDLE1BQU0sQ0FDaEQsY0FBYyxDQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFdBQVc7UUFDcEIsTUFBTSxVQUFVLEdBQVcsd0JBQWEsQ0FBQyxLQUFLLENBQzFDLFNBQVMsRUFDVCxtQkFBbUIsQ0FDdEIsQ0FBQztRQUVGLGtCQUFrQjtRQUNsQixNQUFNLEtBQUssR0FBYSxNQUFNLHdCQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLFlBQVks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