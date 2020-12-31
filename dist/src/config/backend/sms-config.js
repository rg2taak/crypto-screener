"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sms config
 */
exports.default = {
    url: process.env.SMS_URL,
    number: process.env.SMS_NUMBER,
    headers: {
        apikey: process.env.SMS_API_KEY,
    },
    sendSms: (process.env.SMS_SEND || "true") == "true",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2JhY2tlbmQvc21zLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsa0JBQWU7SUFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQ3hCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7SUFDOUIsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztLQUNoQztJQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLE1BQU07Q0FDcEQsQ0FBQyJ9