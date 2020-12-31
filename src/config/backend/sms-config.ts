/**
 * Sms config
 */
export default {
  url: process.env.SMS_URL,
  number: process.env.SMS_NUMBER,
  headers: {
    apikey: process.env.SMS_API_KEY,
  },
  sendSms: (process.env.SMS_SEND || "true") == "true",
};
