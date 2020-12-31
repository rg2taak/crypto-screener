"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = require("../backend/controllers/home-controller");
const base_router_helper_1 = require("../core/helpers/base-router-helper");
/**
 * Home router
 */
class HomeRoute extends base_router_helper_1.default {
    /**
     * Constructor
     */
    constructor() {
        super("", "HomeRoute");
        this.defineRoutes();
    }
    /**
     * Define routes
     */
    defineRoutes() {
        const controller = new home_controller_1.default();
        super.get("/logout", [controller.logout.bind(controller)], "home.logout");
        super.get("/", [controller.index.bind(controller)], "home.index");
        super.post("/", [
            (req, res, next) => {
                console.log(req.body);
                res.send("Ok");
            },
        ]);
    }
}
exports.default = HomeRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvcm91dGVzL2hvbWUtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBNkQ7QUFDN0QsMkVBQTBEO0FBRTFEOztHQUVHO0FBQ0gsTUFBcUIsU0FBVSxTQUFRLDRCQUFVO0lBQzdDOztPQUVHO0lBQ0g7UUFDSSxLQUFLLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2hCLE1BQU0sVUFBVSxHQUFtQixJQUFJLHlCQUFjLEVBQUUsQ0FBQztRQUN4RCxLQUFLLENBQUMsR0FBRyxDQUNMLFNBQVMsRUFDVCxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3BDLGFBQWEsQ0FDaEIsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTVCRCw0QkE0QkMifQ==