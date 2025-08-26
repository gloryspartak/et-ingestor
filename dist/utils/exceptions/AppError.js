"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, httpCode = 500) {
        super(message);
        this.status = httpCode;
    }
}
exports.AppError = AppError;
