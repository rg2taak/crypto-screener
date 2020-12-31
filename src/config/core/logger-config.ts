/**
 * Export defaults
 */
export default {
    logFolder: process.env.LOG_FOLDER || "logs",
    maxSize: process.env.LOG_MAX_SIZE || "5m",
    maxFiles: process.env.LOG_MAX_FILES || "14d",
};
