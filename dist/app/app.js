"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appScoped = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const helmet_1 = __importDefault(require("helmet"));
const router_1 = require("./pwas/router");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.app.use((0, helmet_1.default)({
    frameguard: { action: 'deny' },
}));
exports.app.use((0, body_parser_1.json)());
exports.app.use((0, body_parser_1.urlencoded)({ extended: true }));
exports.app.use((0, cors_1.default)());
exports.app.set('port', process.env.PORT || 1750);
const DEFAULT_ROUTE = '/';
const HEALTH_ROUTE = '/health';
exports.app.get(DEFAULT_ROUTE, (req, res) => {
    res.status(200).json({ status: 'up' });
});
exports.app.get(HEALTH_ROUTE, (req, res) => {
    res.status(200).json({ status: 'up' });
});
exports.appScoped = express_1.default.Router();
exports.appScoped.get(DEFAULT_ROUTE, (req, res) => {
    res.status(200).json({ status: 'up' });
});
(0, router_1.router)(exports.appScoped);
exports.app.use(DEFAULT_ROUTE + 'http', exports.appScoped);
(0, router_1.router)(exports.app);
