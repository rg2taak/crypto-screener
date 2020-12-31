"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Multer configs
 */
exports.default = {
    storage: process.env.UPLOAD_STORAGE || "storage/uploads",
    maxSize: process.env.UPLOAD_MAX_SIZE
        ? parseInt(process.env.UPLOAD_MAX_SIZE)
        : 8 * 1024 * 1024 * 1,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvcmUvbXVsdGVyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsa0JBQWU7SUFDWCxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLElBQUksaUJBQWlCO0lBQ3hELE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7UUFDaEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQztDQUM1QixDQUFDIn0=