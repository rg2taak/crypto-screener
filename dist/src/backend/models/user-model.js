"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chalk_1 = require("chalk");
const global_data_1 = require("../../core/global/global-data");
/**
 * UserModel class
 */
class UserModel {
    /**
     * Get model name
     */
    getName() {
        return "User";
    }
    /**
     * Get database model name
     */
    getDbName() {
        return "users";
    }
    /**
     *
     * @param dbEngine any DbEngine
     */
    async setup(dbEngine) {
        /* Create model */
        const model = dbEngine.model(this.getName(), this.getSchema(), this.getDbName());
        /* Log */
        global_data_1.default.logger.info(`Model ${chalk_1.yellow(this.getName())} loaded successfully`);
        return model;
    }
    /**
     * Get model schema
     */
    getSchema() {
        const schemaDef = {
            name: {
                type: String,
                required: true,
                trim: true,
                unique: true,
                index: true,
            },
            pwd: {
                type: String,
                required: true,
            },
            first_name: {
                type: String,
                required: true,
            },
            last_name: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            activated_at: {
                type: Date,
            },
        };
        /* Define schmea */
        const schema = new mongoose_1.Schema(schemaDef, {
            timestamps: {
                createdAt: "created_at",
                updatedAt: "updated_at",
            },
        });
        /* Methods */
        schema.methods.changePwd = async function changePwd(newPwd) {
            this.pwd = newPwd;
            return this.save();
        };
        /* Return schema */
        return schema;
    }
}
exports.default = UserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvYmFja2VuZC9tb2RlbHMvdXNlci1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQVNrQjtBQUNsQixpQ0FBK0I7QUFFL0IsK0RBQWtEO0FBa0JsRDs7R0FFRztBQUNILE1BQXFCLFNBQVM7SUFDNUI7O09BRUc7SUFDSSxPQUFPO1FBQ1osT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNkLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQWtCO1FBQ25DLGtCQUFrQjtRQUNsQixNQUFNLEtBQUssR0FBc0IsUUFBUSxDQUFDLEtBQUssQ0FDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNqQixDQUFDO1FBRUYsU0FBUztRQUNULHFCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDcEIsU0FBUyxjQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUN0RCxDQUFDO1FBRUYsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ2QsTUFBTSxTQUFTLEdBQXFCO1lBQ2xDLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixLQUFLLEVBQUUsSUFBSTthQUNaO1lBRUQsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFFRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZjtZQUVELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmO1lBRUQsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFFRCxZQUFZLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGLENBQUM7UUFFRixtQkFBbUI7UUFDbkIsTUFBTSxNQUFNLEdBQVcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFNBQVMsRUFBRSxZQUFZO2FBQ0U7U0FDWCxDQUFDLENBQUM7UUFFcEIsYUFBYTtRQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssVUFBVSxTQUFTLENBQ2pELE1BQWM7WUFFZCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRixtQkFBbUI7UUFDbkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBNUZELDRCQTRGQyJ9