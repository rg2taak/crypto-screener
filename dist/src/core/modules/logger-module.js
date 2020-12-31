"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
require("winston-daily-rotate-file");
const global_methods_1 = require("../global/global-methods");
const logger_config_1 = require("../../config/core/logger-config");
const base_module_1 = require("./base-module");
/**
 * Logger class
 */
class LoggerModule extends base_module_1.default {
    /**
     * Ctr
     */
    constructor(logger = console) {
        super();
        this._logger = console;
        this.logsFilename = "";
        this.errorFilename = "";
        this._logger = logger;
    }
    /**
     * Logger factory
     */
    static createModule() {
        return new LoggerModule(console);
    }
    /**
     * Get module name
     */
    getModuleName() {
        return "Logger";
    }
    /**
     * Get logger
     */
    get logger() {
        if (null == this._logger) {
            throw new Error("Logger is null");
        }
        return this._logger;
    }
    /**
     * Set logger
     */
    set logger(value) {
        if (null == value) {
            throw new Error("Logger is null");
        }
        this._logger = value;
    }
    /**
     * Setup variables
     */
    async boot(payload) {
        this.setupVariables();
        this.initWinstonLogger();
    }
    /**
     * Setup variables
     */
    setupVariables() {
        let logPath = logger_config_1.default.logFolder;
        global_methods_1.default.createDir(logPath);
        this.logsFilename = global_methods_1.default.rPath(logPath, "logs");
        this.errorFilename = global_methods_1.default.rPath(logPath, "errors");
    }
    /**
     * Colorize the output
     * @param msg Incoming message
     * @returns String
     */
    colorPrintFnc(msg) {
        const colorizer = winston_1.format.colorize();
        return (colorizer.colorize(msg.level, `[${msg.level}]`) +
            `\t${msg.timestamp}\n\t${msg.message}`);
    }
    /**
     * Return RAW format of msg
     * @param msg Incoming message
     * @returns String
     */
    rawPrintFnc(msg) {
        return `[${msg.level}]\t${msg.timestamp}\n\t${msg.message}`;
    }
    /**
     * Init winston logger
     */
    initWinstonLogger() {
        let transportsList = [];
        if (global_methods_1.default.isProductionMode()) {
            transportsList.push(new winston_1.transports.DailyRotateFile({
                filename: `${this.errorFilename}-%DATE%.log`,
                datePattern: "YYYY-MM-DD-HH",
                zippedArchive: true,
                maxSize: logger_config_1.default.maxSize,
                maxFiles: logger_config_1.default.maxFiles,
                level: "error",
            }), new winston_1.transports.DailyRotateFile({
                filename: `${this.logsFilename}-%DATE%.log`,
                datePattern: "YYYY-MM-DD-HH",
                zippedArchive: true,
                maxSize: logger_config_1.default.maxSize,
                maxFiles: logger_config_1.default.maxFiles,
            }));
        }
        else {
            transportsList.push(new winston_1.transports.File({
                filename: `${this.errorFilename}.log`,
                level: "error",
            }), new winston_1.transports.File({ filename: `${this.logsFilename}.log` }), 
            /* Print to console */
            new winston_1.transports.Console({
                level: "silly",
                format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.simple(), winston_1.format.printf(this.colorPrintFnc)),
            }));
        }
        /* Setup logger engine */
        this.logger = winston_1.createLogger({
            level: "silly",
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.simple(), winston_1.format.printf(this.rawPrintFnc)),
            transports: transportsList,
        });
    }
    /**
     *  Log a message
     * @param type String Log type
     * @param log String Log message
     * @param tag String Log tag
     */
    log(type, log, tag) {
        if (tag) {
            log = `${tag}\n\t${log}`;
        }
        /* Log message */
        if (this.logger[type]) {
            this.logger[type](log);
        }
        else {
            throw Error(`LOG-TYPE ${type} not found!`);
        }
        return log;
    }
    /**
     *  Log an info message
     * @param log String Log message
     * @param tag String Log tag
     */
    info(log, tag) {
        return this.log("info", log, tag);
    }
    /**
     *  Log a debug message
     * @param log String Log message
     * @param tag String Log tag
     */
    debug(log, tag) {
        return this.log("debug", log, tag);
    }
    /**
     *  Log a warning message
     * @param log String Log message
     * @param tag String Log tag
     */
    warn(log, tag) {
        return this.log("warn", log, tag);
    }
    /**
     *  Log an error message
     * @param log String Log message
     * @param tag String Log tag
     */
    error(log, tag) {
        return this.log("error", log, tag);
    }
    /**
     *  Log an http message
     * @param log String Log message
     * @param tag String Log tag
     */
    http(log, tag) {
        return this.log("http", log, tag);
    }
    /**
     *  Log an verbose message
     * @param log String Log message
     * @param tag String Log tag
     */
    verbose(log, tag) {
        return this.log("verbose", log, tag);
    }
    /**
     *  Log an silly message
     * @param log String Log message
     * @param tag String Log tag
     */
    silly(log, tag) {
        return this.log("silly", log, tag);
    }
}
exports.default = LoggerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29yZS9tb2R1bGVzL2xvZ2dlci1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0U7QUFDcEUscUNBQW1DO0FBQ25DLDZEQUF3RDtBQUN4RCxtRUFBc0Q7QUFFdEQsK0NBQXVDO0FBR3ZDOztHQUVHO0FBQ0gsTUFBcUIsWUFBYSxTQUFRLHFCQUFVO0lBeUNoRDs7T0FFRztJQUNILFlBQVksU0FBYyxPQUFPO1FBQzdCLEtBQUssRUFBRSxDQUFDO1FBNUNKLFlBQU8sR0FBUSxPQUFPLENBQUM7UUFDdkIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUEyQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUExQ0Q7O09BRUc7SUFDSSxNQUFNLENBQUMsWUFBWTtRQUN0QixPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWE7UUFDaEIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2IsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNLENBQUMsS0FBVTtRQUN4QixJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBVUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsSUFB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