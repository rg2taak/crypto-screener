"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helmet config
 */
exports.default = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: [
                "'self'",
                "data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval' 'unsafe-dynamic'",
            ],
            scriptSrc: [
                "'self'",
                "data: blob: 'unsafe-inline' 'unsafe-eval'",
            ],
            connectSrc: ["'self'", "data: blob: 'unsafe-inline'"],
            imgSrc: ["*", "'self'", "data: blob: 'unsafe-inline'"],
            frameSrc: ["'self'", " data: blob:"],
            styleSrc: ["*", "'self'", "data: blob: 'unsafe-inline'"],
            fontSrc: ["*", "'self'", "data: blob: 'unsafe-inline'"],
        },
    },
    dnsPrefetchControl: {},
    expectCt: {},
    frameguard: {},
    hidePoweredBy: {},
    hsts: {},
    ieNoOpen: {},
    noSniff: {},
    permittedCrossDomainPolicies: {},
    referrerPolicy: {
        policy: "no-referrer",
    },
    xssFilter: {},
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbWV0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvcmUvaGVsbWV0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsa0JBQWU7SUFDWCxxQkFBcUIsRUFBRTtRQUNuQixVQUFVLEVBQUU7WUFDUixVQUFVLEVBQUU7Z0JBQ1IsUUFBUTtnQkFDUix3RkFBd0Y7YUFDM0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsUUFBUTtnQkFDUiwyQ0FBMkM7YUFFOUM7WUFDRCxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsNkJBQTZCLENBQUM7WUFDckQsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQztZQUN0RCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLENBQUM7WUFDeEQsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQztTQUUxRDtLQUVKO0lBRUQsa0JBQWtCLEVBQUUsRUFBRTtJQUV0QixRQUFRLEVBQUUsRUFBRTtJQUVaLFVBQVUsRUFBRSxFQUFFO0lBRWQsYUFBYSxFQUFFLEVBQUU7SUFFakIsSUFBSSxFQUFFLEVBQUU7SUFFUixRQUFRLEVBQUUsRUFBRTtJQUVaLE9BQU8sRUFBRSxFQUFFO0lBRVgsNEJBQTRCLEVBQUUsRUFBRTtJQUVoQyxjQUFjLEVBQUU7UUFDWixNQUFNLEVBQUUsYUFBYTtLQUN4QjtJQUVELFNBQVMsRUFBRSxFQUFFO0NBQ2hCLENBQUMifQ==