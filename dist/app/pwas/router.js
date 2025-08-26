"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const router = (app) => {
    app.get('/pwas/device-data', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const deviceid = req.query.deviceid;
        try {
            console.log('--------------------------------');
            console.log(`Date time: ${new Date().toISOString()}`);
            console.log('Ping Received From ID: ' + deviceid);
            console.log('Payload: ' + JSON.stringify(req.query));
            res.status(200).send('OK');
        }
        catch (err) {
            next(err);
        }
    }));
};
exports.router = router;
