"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttleStore = process.env.EXPRESS_THROTTLE_STORE || "memory";
const throttleWindow = process.env.EXPRESS_THROTTLE_WINDOW || "60000";
const throttleMax = process.env.EXPRESS_THROTTLE_MAX || "60";
const throttleDelay = process.env.EXPRESS_THROTTLE_DELAY || "0";
const useMulter = (process.env.USE_MULTER || "true") == "true";
exports.default = {
    publicPath: "dist/public",
    protocol: process.env.PROTOCOL || "http",
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT || "8585"),
    url: process.env.SERVER_URL || "http://localhost:8585",
    trustedProxy: process.env.TRUSTED_PROXY || "loopback, linklocal, uniquelocal",
    throttleStore,
    throttleWindow: parseInt(throttleWindow),
    throttleMax: parseInt(throttleMax),
    throttleDelay: parseInt(throttleDelay),
    /* bodyParser */
    bodyParser: {
        limit: process.env.SERVER_REQUEST_MAX_LIMIT || "2mb",
    },
    /* Use multer as default */
    useMulter,
    /* SSL file paths */
    sslServerKey: process.env.SSL_KEY || "private/ssl/server-key.pem",
    sslServerCert: process.env.SSL_CERT || "private/ssl/server-cert.pem",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jb25maWcuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb3JlL2V4cHJlc3MtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxhQUFhLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsSUFBSSxRQUFRLENBQUM7QUFDN0UsTUFBTSxjQUFjLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsSUFBSSxPQUFPLENBQUM7QUFDOUUsTUFBTSxXQUFXLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUM7QUFDckUsTUFBTSxhQUFhLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsSUFBSSxHQUFHLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUM7QUFFeEUsa0JBQWU7SUFDWCxVQUFVLEVBQUUsYUFBYTtJQUV6QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTTtJQUN4QyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksV0FBVztJQUNyQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUMxQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksdUJBQXVCO0lBRXRELFlBQVksRUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxrQ0FBa0M7SUFFbkUsYUFBYTtJQUNiLGNBQWMsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDO0lBQ3hDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ2xDLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDO0lBRXRDLGdCQUFnQjtJQUNoQixVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsSUFBSSxLQUFLO0tBQ3ZEO0lBRUQsMkJBQTJCO0lBQzNCLFNBQVM7SUFFVCxvQkFBb0I7SUFDcEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLDRCQUE0QjtJQUNqRSxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksNkJBQTZCO0NBQ3ZFLENBQUMifQ==