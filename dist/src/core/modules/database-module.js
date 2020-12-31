"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_methods_1 = require("../global/global-methods");
const base_module_1 = require("./base-module");
const db_engine_enum_1 = require("../../lib/enums/core/db-engine-enum");
const mongo_db_driver_1 = require("../helpers/db-drivers/mongo-db-driver");
/**
 * DatabaseModule class
 */
class DatabaseModule extends base_module_1.default {
    constructor() {
        super(...arguments);
        this._engine = undefined;
    }
    /**
     * DatabaseModule factory
     */
    static createModule() {
        return new DatabaseModule();
    }
    /**
     * Getter: _engine
     */
    get engine() {
        if (undefined == this._engine) {
            throw new Error("Engine is undefined");
        }
        return this._engine;
    }
    /**
     * Get module name
     */
    getModuleName() {
        return "Database";
    }
    /**
     * Boot method
     * @param payload object Payload object
     */
    async boot(payload) {
        await this.setupDriver();
    }
    /**
     * Setup driver
     */
    async setupDriver() {
        /* Read config data */
        const dbConfig = await global_methods_1.default.config("core/database");
        /* Select proper engine */
        switch (dbConfig.driver) {
            case db_engine_enum_1.DbEngineEnum.MONGODB:
                this._engine = await this.setupMongoDriver(dbConfig);
                break;
        }
    }
    /**
     * Setup a mongo driver
     * @param config DatabaseConfigType Database config
     */
    async setupMongoDriver(config) {
        const driver = mongo_db_driver_1.default.createDriver();
        await driver.connect(config);
        return driver;
    }
}
exports.default = DatabaseModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL21vZHVsZXMvZGF0YWJhc2UtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQXFEO0FBQ3JELCtDQUF1QztBQUN2Qyx3RUFBOEQ7QUFJOUQsMkVBQXNFO0FBRXRFOztHQUVHO0FBQ0gsTUFBcUIsY0FBZSxTQUFRLHFCQUFVO0lBQXREOztRQUNVLFlBQU8sR0FBcUIsU0FBUyxDQUFDO0lBaUVoRCxDQUFDO0lBL0RDOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFlBQVk7UUFDeEIsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsTUFBTTtRQUNmLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBMEIsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ2xCLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWE7UUFDN0IsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFdBQVc7UUFDdEIsc0JBQXNCO1FBQ3RCLE1BQU0sUUFBUSxHQUF1QixNQUFNLHdCQUFhLENBQUMsTUFBTSxDQUM3RCxlQUFlLENBQ2hCLENBQUM7UUFFRiwwQkFBMEI7UUFDMUIsUUFBc0IsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxLQUFLLDZCQUFZLENBQUMsT0FBTztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckQsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDNUIsTUFBMEI7UUFFMUIsTUFBTSxNQUFNLEdBQWtCLHlCQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0QsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQWxFRCxpQ0FrRUMifQ==