"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const global_methods_1 = require("../global/global-methods");
const base_module_1 = require("./base-module");
/**
 * Events module
 */
class EventsModule extends base_module_1.default {
    /**
     * Contstrcutor
     */
    constructor() {
        super();
        this._handlers = {};
    }
    /**
     * Events factory
     */
    static createModule() {
        return new EventsModule();
    }
    /**
     * Getter of handlers
     */
    get handlers() {
        return this._handlers;
    }
    /**
     * Get module name
     */
    getModuleName() {
        return "Events";
    }
    /**
     * Boot method
     * @param payload any Payload data
     */
    async boot(payload) {
        const userEventHandlersPath = `${__dirname}/../../backend/handlers/**/*`;
        const globalEventHandlersPath = `${__dirname}/../handlers/**/*`;
        /* Load handlers */
        const eventHandlers = await global_methods_1.default.loadFiles(globalEventHandlersPath);
        const userEventHandlers = await global_methods_1.default.loadFiles(userEventHandlersPath);
        /* Union core and user handlers */
        let handlers = lodash_1.union(eventHandlers, userEventHandlers);
        /* Try to push to handlers */
        for (let i = 0; i < handlers.length; i++) {
            await this.addHandler(handlers[i]);
        }
    }
    /**
     * Add handler to handlers
     * @param file string File name
     */
    async addHandler(file) {
        /* Load module */
        let EventHandler = await global_methods_1.default.loadModule(file);
        const eventHandler = new EventHandler();
        const eventName = eventHandler.getEventName();
        /* Add to handlers */
        this.handlers[eventName] = eventHandler;
        /* Run module boot() method  */
        await eventHandler.register(this.handlers);
    }
    /**
     * Raise an event
     * @param eventName string Event name
     * @param payload object Payload data
     */
    raise(eventName, payload) {
        let handler = this.handlers[eventName];
        return handler.handle(payload);
    }
}
exports.default = EventsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29yZS9tb2R1bGVzL2V2ZW50cy1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBK0I7QUFJL0IsNkRBQXFEO0FBQ3JELCtDQUF1QztBQUV2Qzs7R0FFRztBQUNILE1BQXFCLFlBQWEsU0FBUSxxQkFBVTtJQWlCaEQ7O09BRUc7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBcEJKLGNBQVMsR0FBeUIsRUFBRSxDQUFDO0lBcUI3QyxDQUFDO0lBbkJEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFlBQVk7UUFDdEIsT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBU0Q7O09BRUc7SUFDSSxhQUFhO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWE7UUFDM0IsTUFBTSxxQkFBcUIsR0FBVyxHQUFHLFNBQVMsOEJBQThCLENBQUM7UUFDakYsTUFBTSx1QkFBdUIsR0FBVyxHQUFHLFNBQVMsbUJBQW1CLENBQUM7UUFFeEUsbUJBQW1CO1FBQ25CLE1BQU0sYUFBYSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxTQUFTLENBQy9DLHVCQUF1QixDQUMxQixDQUFDO1FBQ0YsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLHdCQUFhLENBQUMsU0FBUyxDQUNuRCxxQkFBcUIsQ0FDeEIsQ0FBQztRQUVGLGtDQUFrQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxjQUFLLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFdkQsNkJBQTZCO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDakMsaUJBQWlCO1FBQ2pCLElBQUksWUFBWSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxVQUFVLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDN0QsTUFBTSxZQUFZLEdBQWtCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQVcsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUV4QywrQkFBK0I7UUFDL0IsTUFBTSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxTQUFpQixFQUFFLE9BQWdCO1FBQzVDLElBQUksT0FBTyxHQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUFuRkQsK0JBbUZDIn0=