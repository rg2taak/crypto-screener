"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const global_data_1 = require("../../global/global-data");
const global_methods_1 = require("../../global/global-methods");
const Mongoose = require("mongoose");
/**
 * MongoDB driver
 */
class MongoDbDriver {
    constructor() {
        this._engine = new Mongoose.Mongoose();
    }
    /**
     * Create driver factory
     */
    static createDriver() {
        return new MongoDbDriver();
    }
    /**
     * Getter: _engine
     */
    get engine() {
        return this._engine;
    }
    /**
     * Get the engine
     */
    getEngine() {
        return this.engine;
    }
    /**
     * Connect to mongodb
     * @param config any Config
     */
    async connect(config) {
        const connStr = this.getConnectionUrl(config);
        this._engine = await Mongoose.connect(connStr, config.dbConfig);
        global_data_1.default.logger.info(`
        MongoDB driver connected successfully
        URI: ${connStr}
        Config: \n${chalk_1.blue(JSON.stringify(config, null, 2))}
        `);
        /* Load modesl */
        await this.loadModels();
    }
    /**
     * DisConnect from mongodb
     */
    async disconnect() {
        await this.engine.disconnect();
    }
    /**
     * Get a model
     * @param name string Model name
     */
    model(name) {
        return this.engine.model(name);
    }
    /**
     * Load models
     */
    async loadModels() {
        const modelsPath = global_methods_1.default.rPath(__dirname, "../../../backend/models/**/*");
        const files = await global_methods_1.default.loadFiles(modelsPath, {});
        /* Load models */
        for (let i = 0; i < files.length; ++i) {
            const Model = await global_methods_1.default.loadModule(files[i]);
            const model = new Model();
            /* setup model */
            model.setup(this.engine);
        }
    }
    /**
     * Get connection url
     * @param config DatabaseConfigType Confing object
     */
    getConnectionUrl(config) {
        let connectionString = "";
        /* Format: mongodb://host:port/db */
        if (config.host) {
            connectionString = `mongodb://${config.host}`;
            if (config.port) {
                connectionString += `:${config.port}`;
            }
            if (config.name) {
                connectionString += `/${config.name}`;
            }
        }
        return connectionString;
    }
}
exports.default = MongoDbDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tZGItZHJpdmVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL2hlbHBlcnMvZGItZHJpdmVycy9tb25nby1kYi1kcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNkI7QUFDN0IsMERBQWtEO0FBQ2xELGdFQUF3RDtBQUl4RCxxQ0FBcUM7QUFFckM7O0dBRUc7QUFDSCxNQUFxQixhQUFhO0lBQWxDO1FBQ1ksWUFBTyxHQUFzQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQXNHakUsQ0FBQztJQXBHRzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxZQUFZO1FBQ3RCLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUEwQjtRQUMzQyxNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQ2pDLE9BQU8sRUFDUCxNQUFNLENBQUMsUUFBbUMsQ0FDN0MsQ0FBQztRQUVGLHFCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7ZUFFaEIsT0FBTztvQkFDRixZQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUVILGlCQUFpQjtRQUNqQixNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssS0FBSyxDQUFDLFVBQVU7UUFDcEIsTUFBTSxVQUFVLEdBQUcsd0JBQWEsQ0FBQyxLQUFLLENBQ2xDLFNBQVMsRUFDVCw4QkFBOEIsQ0FDakMsQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTVELGlCQUFpQjtRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQyxNQUFNLEtBQUssR0FBUSxNQUFNLHdCQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7WUFFdEMsaUJBQWlCO1lBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGdCQUFnQixDQUFDLE1BQTBCO1FBQy9DLElBQUksZ0JBQWdCLEdBQVcsRUFBRSxDQUFDO1FBRWxDLG9DQUFvQztRQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixnQkFBZ0IsR0FBRyxhQUFhLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU5QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsZ0JBQWdCLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsZ0JBQWdCLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekM7U0FDSjtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBdkdELGdDQXVHQyJ9