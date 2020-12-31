"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debug = require("debug");
const base_module_1 = require("./base-module");
const global_methods_1 = require("../global/global-methods");
/**
 * Logger class
 */
class DebugModule extends base_module_1.default {
    constructor() {
        super(...arguments);
        this._debugger = undefined;
    }
    /**
     * Logger factory
     */
    static createModule() {
        return new DebugModule();
    }
    /**
     * Get module name
     */
    getModuleName() {
        return "Debug";
    }
    /**
     * Get logger
     */
    get debugger() {
        if (undefined == this._debugger) {
            throw new Error("Debugger is undefined");
        }
        return this._debugger;
    }
    /**
     * Setup variables
     */
    async boot(payload) {
        const config = await global_methods_1.default.config("core/debug");
        this._debugger = Debug(config.name || "sunset42");
    }
}
exports.default = DebugModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWctbW9kdWxlLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL21vZHVsZXMvZGVidWctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBRS9CLCtDQUF1QztBQUN2Qyw2REFBeUQ7QUFHekQ7O0dBRUc7QUFDSCxNQUFxQixXQUFZLFNBQVEscUJBQVU7SUFBbkQ7O1FBQ1ksY0FBUyxHQUFvQixTQUFTLENBQUM7SUFxQ25ELENBQUM7SUFuQ0c7O09BRUc7SUFDSSxNQUFNLENBQUMsWUFBWTtRQUN0QixPQUFPLElBQUksV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYTtRQUNoQixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFFBQVE7UUFDZixJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWE7UUFDM0IsTUFBTSxNQUFNLEdBQW9CLE1BQU0sd0JBQWEsQ0FBQyxNQUFNLENBQ3RELFlBQVksQ0FDZixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7QUF0Q0QsOEJBc0NDIn0=