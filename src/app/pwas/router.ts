import { Router, Request, Response, NextFunction } from 'express';

export const router = (app: Router) => {
    app.get(
        '/pwas/device-data',
        async (req: Request, res: Response, next: NextFunction) => {
            const deviceid = req.query.deviceid as string;
            try {
                console.log('--------------------------------');
                console.log(`Date time: ${new Date().toISOString()}`);
                console.log('Ping Received From ID: ' + deviceid);
                console.log('Payload: ' + JSON.stringify(req.query));
                res.status(200).send('OK');
            } catch (err) {
                next(err);
            }
        }
    );
};
