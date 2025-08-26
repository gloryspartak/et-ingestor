"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(validationErrors, httpCode = 422) {
        super();
        this.validationErrors = validationErrors;
        this.status = httpCode;
    }
}
exports.ValidationError = ValidationError;
