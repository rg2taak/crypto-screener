"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const global_methods_1 = require("../global/global-methods");
const base_module_1 = require("./base-module");
/**
 * EnvModule class
 */
class EnvModule extends base_module_1.default {
    /**
     * EnvModule factory
     */
    static createModule() {
        return new EnvModule();
    }
    /**
     * Get module name
     */
    getModuleName() {
        return "Env";
    }
    /**
     * Boot method
     * @param payload object Payload object
     */
    async boot(payload) {
        await this.loadEnvData();
    }
    /**
     * Loding env-file data
     */
    async loadEnvData() {
        const envFile = await global_methods_1.default.config("core/server", "envFile");
        const envFilePath = global_methods_1.default.rPath(envFile);
        dotenv_1.config({ path: envFilePath });
    }
}
exports.default = EnvModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29yZS9tb2R1bGVzL2Vudi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBZ0M7QUFFaEMsNkRBQXFEO0FBQ3JELCtDQUF1QztBQUV2Qzs7R0FFRztBQUNILE1BQXFCLFNBQVUsU0FBUSxxQkFBVTtJQUM3Qzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxZQUFZO1FBQ3RCLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ2hCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWE7UUFDM0IsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ssS0FBSyxDQUFDLFdBQVc7UUFDckIsTUFBTSxPQUFPLEdBQVcsTUFBTSx3QkFBYSxDQUFDLE1BQU0sQ0FDOUMsYUFBYSxFQUNiLFNBQVMsQ0FDWixDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQUcsd0JBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsZUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBbkNELDRCQW1DQyJ9