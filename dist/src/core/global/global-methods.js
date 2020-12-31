"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const path_1 = require("path");
const fs_1 = require("fs");
const Glob = require("glob");
const Ora = require("ora");
const MkDirP = require("mkdirp");
/**
 * Global methods
 */
class GlobalMethods {
    /**
     * Load module
     * @param path string Module path
     */
    static async loadModule(path) {
        path = GlobalMethods.rPath(path);
        const RawModule = await Promise.resolve().then(() => require(path));
        const ModuleData = (RawModule.default || RawModule);
        return ModuleData;
    }
    /**
     * Return relative path by input-paraemters
     * @param args string[] Arguments
     */
    static rPath(...args) {
        return path_1.resolve(...args);
    }
    /**
     * Return development mode
     */
    static isProductionMode() {
        return process.env.NODE_ENV === GlobalMethods.C_ENV_PRODUCTION;
    }
    /**
     * Load all files from a specified location
     *  User can filter by regexp
     * @param pattern String Folder path
     * @param optinos Glob.IOoptions options
     * @param filterFnc Function Filter function
     */
    static async loadFiles(pattern, options, filterFnc = this.filterIgnoredFiles) {
        let files = Glob.sync(pattern, options);
        if (null !== filterFnc) {
            files = await filterFnc(files);
        }
        return files;
    }
    /**
     *
     * @param text string Loading text
     * @param color
     */
    static showLoading(text, color) {
        if (!GlobalMethods.spinner) {
            GlobalMethods.spinner = Ora(text);
        }
        else {
            GlobalMethods.spinner.text = text;
        }
        if (color) {
            GlobalMethods.spinner.color = color;
        }
        GlobalMethods.spinner.start();
    }
    /**
     * Stop loading
     */
    static stopLoading() {
        if (!GlobalMethods.spinner) {
            return;
        }
        GlobalMethods.spinner.stop();
    }
    /**
     * Read a file
     * @param filename string File name
     */
    static readFile(filename) {
        let result = fs_1.readFileSync(GlobalMethods.rPath(filename));
        return result;
    }
    /**
     * Read a config file
     * @param config string Config filename
     * @param keyPath string Key path
     */
    static async config(config, keyPath) {
        /* fix config filename */
        if (!config.endsWith("config")) {
            config += "-config";
        }
        let result;
        const path = this.rPath(__dirname, `../../config/${config}`);
        result = await GlobalMethods.loadModule(path);
        if (keyPath) {
            result = lodash_1.get(result, keyPath);
        }
        return result;
    }
    /**
     * Check for Ignore route form CSRF  or not
     * @param req Express.Request The request
     */
    static async useCSRF(req) {
        const csrfRules = await GlobalMethods.config("core/csrf-rules");
        return function (req, res, next) {
            const index = csrfRules.ignoreList.findIndex((rule) => req.originalUrl.match(new RegExp(rule)));
            return index != -1;
        };
    }
    /**
     * Check for RequestType
     * @param req Express.Request The request
     */
    static getRequestType(req) {
        return req.accepts(["html", "json"]);
    }
    /**
     * Create directory
     * @param path string Dir path
     */
    static async createDir(path) {
        if (!fs_1.existsSync(path)) {
            await MkDirP(path);
        }
    }
    /**
     * Sleep function
     * @param timeout number Timeout
     */
    static sleep(timeout) {
        return new Promise((resolve, reject) => setTimeout(() => resolve(), timeout));
    }
    /**
     * Filter ignored files
     * @param files string[] Filter ignored files
     */
    static async filterIgnoredFiles(files) {
        if (null == GlobalMethods.serverConfig) {
            await GlobalMethods.loadServerConfig();
        }
        files = files.filter((file) => {
            const ext = path_1.extname(file);
            return GlobalMethods.serverConfig.acceptableTypes.indexOf(ext) > -1;
        });
        return files;
    }
    /**
     * Load Server-Config file
     */
    static async loadServerConfig() {
        GlobalMethods.serverConfig = await GlobalMethods.config("core/server");
    }
}
exports.default = GlobalMethods;
GlobalMethods.C_ENV_PRODUCTION = "production";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1ldGhvZHMuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2NvcmUvZ2xvYmFsL2dsb2JhbC1tZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXFDO0FBQ3JDLCtCQUF3QztBQUN4QywyQkFBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFLakM7O0dBRUc7QUFDSCxNQUFxQixhQUFhO0lBTTlCOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFVLElBQVk7UUFDaEQsSUFBSSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsTUFBTSxTQUFTLEdBQVEsMkNBQWEsSUFBSSxFQUFDLENBQUM7UUFDMUMsTUFBTSxVQUFVLEdBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBTSxDQUFDO1FBRTVELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBYztRQUNqQyxPQUFPLGNBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDMUIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUN6QixPQUFlLEVBQ2YsT0FBdUIsRUFDdkIsWUFBc0IsSUFBSSxDQUFDLGtCQUFrQjtRQUU3QyxJQUFJLEtBQUssR0FBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxHQUFHLE1BQU0sU0FB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