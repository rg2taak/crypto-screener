"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Driver: [memory|redis]
*/
exports.default = {
    store: process.env.SESSION_STORE || "memory",
    options: {
        name: process.env.SESSION_NAME || "session",
        secret: process.env.SESSION_SECRET || "MySecretKey_Sunset-4.2",
        resave: process.env.SESSION_RESAVE || false,
        saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED || true,
        cookie: {
            maxAge: process.env.SESSION_MAX_AGE || 1000 * 60 * 60 /* 1 Hour */,
            path: process.env.SESSION_PATH || "/",
            httpOnly: process.env.SESSION_HTTP_ONLY || true,
            sameSite: process.env.SESSION_SAME_SITE || "strict",
            secure: process.env.SESSION_COOKIE_SECURE ||
                process.env.PROTOCOL == "https",
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1jb25maWcuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb3JlL3Nlc3Npb24tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0VBRUU7QUFDRixrQkFBZTtJQUNYLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxRQUFRO0lBQzVDLE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxTQUFTO1FBQzNDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSx3QkFBd0I7UUFDOUQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxJQUFJLEtBQUs7UUFDM0MsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxJQUFJO1FBQ2pFLE1BQU0sRUFBRTtZQUNKLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZO1lBQ2xFLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxHQUFHO1lBQ3JDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDL0MsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksUUFBUTtZQUNuRCxNQUFNLEVBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUI7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLE9BQU87U0FDdEM7S0FDSjtDQUNKLENBQUMifQ==