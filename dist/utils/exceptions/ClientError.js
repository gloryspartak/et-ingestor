"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError extends Error {
    constructor(message, httpCode = 500) {
        super(message);
        this.status = httpCode;
    }
}
exports.ClientError = ClientError;
