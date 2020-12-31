"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const global_data_1 = require("./global/global-data");
const env_module_1 = require("./modules/env-module");
const logger_module_1 = require("./modules/logger-module");
const debug_module_1 = require("./modules/debug-module");
const events_module_1 = require("./modules/events-module");
const router_module_1 = require("./modules/router-module");
const database_module_1 = require("./modules/database-module");
const express_module_1 = require("./modules/express-module");
/**
 * Bootstrap class
 */
class Bootstap {
    /**
     * Boot method
     * @returns Promise<void> Returns promise<void>
     */
    async boot() {
        /* Setup core moduels */
        await this.initCoreModules();
        /* Setup express */
        await this.initApplicationModules();
        global_data_1.default.logger.info(chalk_1.yellow("System booted successfully"));
        global_data_1.default.events.raise("ServerInit", { readyAt: new Date() });
    }
    /**
     * Initialize core modules
     * @returns Promise<void> Returns promise<void>
     */
    async initCoreModules() {
        await this.initEnvData();
        await this.initDebugger();
        await this.initLogger();
    }
    /**
     * Initialize application modules
     * @returns Promise<void> Returns promise<void>
     */
    async initApplicationModules() {
        await this.initEvents();
        await this.initDatabaseModule();
        await this.initRouterModule();
        await this.initExpressModule();
    }
    /**
     * Initialize env-data modules
     * @returns Promise<void> Returns promise<void>
     */
    async initEnvData() {
        const envModule = env_module_1.default.createModule();
        await envModule.boot();
        console.info(`${chalk_1.yellow(envModule.getModuleName())} module loaded successfully`);
    }
    /**
     * Initialize debugger
     * @returns Promise<void> Returns promise<void>
     */
    async initDebugger() {
        const debugModule = debug_module_1.default.createModule();
        await debugModule.boot();
        global_data_1.default.debug = debugModule.debugger;
        console.info(`${chalk_1.yellow(debugModule.getModuleName())} module loaded successfully`);
    }
    /**
     * Initialize logger modules
     * @returns Promise<void> Returns promise<void>
     */
    async initLogger() {
        const logger = logger_module_1.default.createModule();
        await logger.boot();
        global_data_1.default.logger = logger;
        this.printLog(logger.getModuleName() + " module");
    }
    /**
     * Init events
     * @returns Promise<void> Returns promise<void>
     */
    async initEvents() {
        const events = events_module_1.default.createModule();
        await events.boot();
        global_data_1.default.events = events;
        this.printLog(events.getModuleName() + " module");
    }
    /**
     * Init router
     * @returns Promise<void> Returns promise<void>
     */
    async initRouterModule() {
        const router = router_module_1.default.createModule();
        await router.boot();
        await router.routerManager.createManifestFile();
        global_data_1.default.router = router;
        this.printLog(router.getModuleName() + " module");
    }
    /**
     * Init express
     * @returns Promise<void> Returns promise<void>
     */
    async initExpressModule() {
        const express = express_module_1.default.createModule();
        await express.boot();
        global_data_1.default.express = express;
        this.printLog(express.getModuleName() + " module");
    }
    /**
     * Init Database module
     * @returns Promise<void> Returns promise<void>
     */
    async initDatabaseModule() {
        const dbModule = database_module_1.default.createModule();
        await dbModule.boot();
        try {
            global_data_1.default.dbEngine = dbModule.engine;
        }
        catch (err) {
            global_data_1.default.logger.warn(chalk_1.yellow("No any database engine has been selected"));
        }
        this.printLog(dbModule.getModuleName() + " module");
    }
    /**
     * Print module log
     * @param moduleName string Module name
     * @returns Promise<void> Returns promise<void>
     */
    printLog(moduleName) {
        global_data_1.default.logger.info(`${chalk_1.yellow(moduleName)} loaded successfully`);
    }
}
exports.default = Bootstap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL2Jvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFzQztBQUN0QyxzREFBbUQ7QUFDbkQscURBQWtEO0FBQ2xELDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFDdEQsMkRBQW1EO0FBQ25ELDJEQUFtRDtBQUNuRCwrREFBdUQ7QUFDdkQsNkRBQXFEO0FBRXJEOztHQUVHO0FBQ0gsTUFBcUIsUUFBUTtJQUN6Qjs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSTtRQUNiLHdCQUF3QjtRQUN4QixNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU3QixtQkFBbUI7UUFDbkIsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUVwQyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBTSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUM3RCxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFDSyxLQUFLLENBQUMsZUFBZTtRQUN6QixNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSyxDQUFDLHNCQUFzQjtRQUNoQyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJ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