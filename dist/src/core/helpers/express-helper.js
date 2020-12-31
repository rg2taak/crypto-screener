"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helmet = require("helmet");
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const Compress = require("compression");
const MethodOverride = require("method-override");
const CORS = require("cors");
const CSURF = require("csurf");
const Multer = require("multer");
const uuid_1 = require("uuid");
const MimeTypes = require("mime-types");
const Crypto = require("crypto");
const RateLimit = require("express-rate-limit");
const RedisStore = require("rate-limit-redis");
const Http = require("http");
const Https = require("https");
const Express = require("express");
const fs_1 = require("fs");
const chalk_1 = require("chalk");
const global_data_1 = require("../global/global-data");
const global_methods_1 = require("../global/global-methods");
const frontend_global_helper_1 = require("./frontend-global-helper");
const session_helper_1 = require("./session-helper");
/**
 * Express helper
 */
class ExpressHelper {
    constructor() {
        this.C_STORE_REDIS = "redis";
        this._config = {};
        this._app = undefined;
        this._server = undefined;
    }
    /**
     * Getter: _config
     */
    get config() {
        return this._config;
    }
    /**
     * Getter: _app
     */
    get app() {
        if (undefined == this._app) {
            throw new Error("App is undefined");
        }
        return this._app;
    }
    /**
     * Getter: _server
     */
    get server() {
        if (undefined == this._server) {
            throw new Error("Server is undefined");
        }
        return this._server;
    }
    /**
     * Init method
     * @param payload any Payload
     */
    async init(payload) {
        /* Create app */
        this._app = Express();
        /* Read config */
        this._config = await global_methods_1.default.config("core/express");
        /* Setup pugEngine */
        await this.setupPugEngine();
        /* Setup middlewares */
        await this.setupMiddlewares();
        /* Setup session */
        await this.setupSession();
        /* Setup routes */
        await this.applyRouters();
        /* Apply core routes */
        await this.setupRouteHandler();
        await this.setupRouteErrors();
        /* Create server */
        await this.listen();
    }
    /**
     * Setup Pug engine
     * @param app Express.Application App Instance
     */
    async setupPugEngine() {
        const app = this.app;
        app.set("view engine", "pug");
        app.set("views", global_methods_1.default.rPath("views"));
        const globalFuncs = new frontend_global_helper_1.default();
        app.use((req, res, next) => {
            globalFuncs.prepare();
            res.locals.Helper = globalFuncs;
            next();
        });
    }
    /**
     * Apply routes
     */
    async applyRouters() {
        await global_data_1.default.router.routerManager.apply(this.app);
    }
    /**
     * Start listening
     */
    async listen() {
        const { port, host, url, protocol } = this.config;
        const isHttps = protocol == "https";
        const localUrl = `${protocol}://${host}:${port}`;
        const messageFnc = () => {
            global_data_1.default.logger.info(`
Server started
        PROTOCOL  ${isHttps ? chalk_1.green(protocol) : chalk_1.yellow(protocol)}
            PORT  ${chalk_1.yellow(port)}
            HOST  ${chalk_1.yellow(host)}
       LOCAL-URL  ${chalk_1.blue(localUrl)}
      SERVER-URL  ${chalk_1.red(url)}`);
        };
        /* Setup a http/https server */
        this._server = this.createServer(isHttps);
        /* Start listening */
        this.server.listen(port, host, messageFnc);
    }
    /**
     * Create a http/https server
     * @param useHttps boolean Use https
     */
    createServer(useHttps) {
        let server;
        if (useHttps) {
            const serverPKeyPath = global_methods_1.default.rPath(this.config.sslServerKey);
            const serverCertPath = global_methods_1.default.rPath(this.config.sslServerCert);
            const privateKey = fs_1.readFileSync(serverPKeyPath).toString();
            const certificate = fs_1.readFileSync(serverCertPath).toString();
            /* Setup server */
            let options = {
                key: privateKey,
                cert: certificate,
            };
            server = Https.createServer(options, this.app);
        }
        else {
            server = Http.createServer(this.app);
        }
        return server;
    }
    /**
     * Setup middlewares
     */
    async setupMiddlewares() {
        this.app.use(Express.static("dist/public"));
        await this.setupBodyAndCookieParser();
        await this.setupCompression();
        await this.setupMethodOverride();
        await this.setupTrustedProxy();
        await this.setupHelmet();
        await this.setupCORS();
        await this.setupThrottle();
        await this.setupCSRF();
        await this.setupMulter();
    }
    /**
     * Setup trusted proxy level
     */
    async setupTrustedProxy() {
        if (global_methods_1.default.isProductionMode()) {
            this.app.set("trust proxy", this.config.trustedProxy);
        }
    }
    /**
     * Setup CROS
     */
    async setupCORS() {
        const corsOptions = {
            origin: true,
            // some legacy browsers (IE11, various SmartTVs) choke on 204
            optionsSuccessStatus: 200,
        };
        const app = this.app;
        // app.options("*", CORS(corsOptions));
        app.use(CORS(corsOptions));
    }
    /**
     * Setup throttle
     */
    async setupThrottle() {
        const rateLimitOptions = {
            windowMs: +this.config.throttleWindow,
            max: +this.config.throttleMax,
            delayMs: +this.config.throttleDelay,
        };
        if (this.config.throttleStore == this.C_STORE_REDIS) {
            rateLimitOptions.store = new RedisStore({});
        }
        global_data_1.default.rateLimiter = RateLimit(rateLimitOptions);
    }
    /**
     * Setup Compression
     */
    async setupCompression() {
        const app = this.app;
        app.use(Compress({}));
    }
    /**
     * Setup MethodOverride
     */
    async setupMethodOverride() {
        const app = this.app;
        app.use(MethodOverride("X-HTTP-Method-Override"));
    }
    /**
     * Setup Body and Cookie parsers
     */
    async setupBodyAndCookieParser() {
        const app = this.app;
        const config = (await global_methods_1.default.config("core/express"));
        /* Add cookie-parse */
        app.use(CookieParser());
        /* Add body parser */
        app.use(BodyParser.urlencoded({
            limit: config.bodyParser.limit,
            extended: false,
        }));
        app.use(BodyParser.json({ limit: config.bodyParser.limit }));
    }
    /**
     * Setup Helmet
     */
    async setupHelmet() {
        const app = this.app;
        const helmetConfig = await global_methods_1.default.config("core/helmet");
        /* Inline scripts key-generator */
        app.use((req, res, next) => {
            res.locals.nonce = Crypto.randomBytes(16).toString("hex");
            next();
        });
        app.use(Helmet.contentSecurityPolicy(helmetConfig.contentSecurityPolicy || {}));
        app.use(Helmet.dnsPrefetchControl(helmetConfig.dnsPrefetchControl || {}));
        app.use(Helmet.expectCt(helmetConfig.expectCt || {}));
        app.use(Helmet.frameguard(helmetConfig.frameguard || {}));
        app.use(Helmet.hidePoweredBy());
        app.use(Helmet.hsts(helmetConfig.hsts || {}));
        app.use(Helmet.ieNoOpen());
        app.use(Helmet.noSniff());
        app.use(Helmet.permittedCrossDomainPolicies(helmetConfig.permittedCrossDomainPolicies || {}));
        app.use(Helmet.referrerPolicy(helmetConfig.referrerPolicy || {}));
        app.use(Helmet.xssFilter());
    }
    /**
     * Setup CSRF
     */
    async setupCSRF() {
        const app = this.app;
        const csrf = CSURF({
            cookie: true,
        });
        app.use((req, res, next) => {
            if (global_methods_1.default.useCSRF(req)) {
                next();
            }
            else {
                csrf(req, res, next);
            }
        });
        app.use((req, res, next) => {
            res.locals.csrftoken = req.csrfToken ? req.csrfToken() : "";
            next();
        });
    }
    /**
     * Setup Multer
     */
    async setupMulter() {
        const app = this.app;
        /* Setup multer */
        const multerConfig = await global_methods_1.default.config("core/multer");
        /* Create storage diretory */
        await global_methods_1.default.createDir(multerConfig.storage);
        /* Setup multer */
        const storage = Multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, multerConfig.storage);
            },
            filename: function (req, file, cb) {
                let ext = MimeTypes.extension(file.mimetype);
                ext = ext ? `.${ext}` : "";
                let filename = `${uuid_1.v4()}${ext}`;
                cb(null, filename);
            },
        });
        global_data_1.default.upload = Multer({
            limits: { fieldSize: multerConfig.maxSize },
            storage,
        });
        /* Use multer as middleware */
        if (this.config.useMulter) {
            app.use(global_data_1.default.upload.any());
        }
    }
    /**
     * Setup RouteHandler
     */
    async setupRouteHandler() {
        const app = this.app;
        app.use((req, res, next) => {
            switch (global_methods_1.default.getRequestType(req)) {
                case "html":
                    res.render("errors/404.pug");
                    break;
                case "xhr":
                    res.status(404)
                        .send({
                        success: false,
                        data: "Route not found",
                    })
                        .end();
                    break;
                default:
                    res.status(404).send("Bad Request").end();
                    break;
            }
        });
    }
    /**
     * Setup RouteErrors
     */
    async setupRouteErrors() {
        const app = this.app;
        const errHandler = (error, req, res, next) => {
            if (res.headersSent) {
                return next(error);
            }
            let errorData = {
                text: "Server Internal Error!",
                error: null,
            };
            if (!global_methods_1.default.isProductionMode()) {
                errorData.error = JSON.stringify(error);
            }
            /* Log error */
            global_data_1.default.logger.error(JSON.stringify(errorData));
            console.error(error);
            /* Send to client */
            switch (global_methods_1.default.getRequestType(req)) {
                case "html":
                    res.render("errors/500.pug", {
                        data: errorData,
                    });
                    break;
                case "xhr":
                    res.status(500).send(errorData).end();
                    break;
                default:
                    res.status(500).send("BAD REQUEST").end();
                    break;
            }
        };
        /* Setup Error handler middleware */
        app.use(errHandler);
    }
    /**
     *  Setup Session module
     */
    async setupSession() {
        const app = this.app;
        const sessionModule = new session_helper_1.default();
        await sessionModule.init(app);
        global_data_1.default.logger.info(`${chalk_1.yellow("Session")} initialized successfully`);
    }
}
exports.default = ExpressHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2NvcmUvaGVscGVycy9leHByZXNzLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpQztBQUNqQywwQ0FBMEM7QUFDMUMsOENBQThDO0FBQzlDLHdDQUF3QztBQUN4QyxrREFBa0Q7QUFDbEQsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsK0JBQW9DO0FBQ3BDLHdDQUF3QztBQUN4QyxpQ0FBaUM7QUFDakMsZ0RBQWdEO0FBQ2hELCtDQUErQztBQUMvQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLG1DQUFtQztBQUNuQywyQkFBa0M7QUFDbEMsaUNBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCw2REFBeUQ7QUFFekQscUVBQTREO0FBQzVELHFEQUE2QztBQUk3Qzs7R0FFRztBQUNILE1BQXFCLGFBQWE7SUFBbEM7UUFDb0Isa0JBQWEsR0FBVyxPQUFPLENBQUM7UUFFeEMsWUFBTyxHQUFzQixFQUF1QixDQUFDO1FBQ3JELFNBQUksR0FBeUIsU0FBUyxDQUFDO1FBQ3ZDLFlBQU8sR0FBaUIsU0FBUyxDQUFDO0lBNGM5QyxDQUFDO0lBMWNHOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsR0FBRztRQUNWLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsTUFBTTtRQUNiLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FB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