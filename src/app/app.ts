import express, { Express } from 'express';
import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import { router as pwasRouter } from './pwas/router';
import cors from 'cors';

export const app: Express = express();

app.use(
    helmet({
        frameguard: { action: 'deny' },
    })
);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.set('port', process.env.PORT || 1750);
const DEFAULT_ROUTE = '/';
const HEALTH_ROUTE = '/health';

app.get(DEFAULT_ROUTE, (req, res) => {
    res.status(200).json({ status: 'up' });
});

app.get(HEALTH_ROUTE, (req, res) => {
    res.status(200).json({ status: 'up' });
});

export const appScoped = express.Router();
appScoped.get(DEFAULT_ROUTE, (req, res) => {
    res.status(200).json({ status: 'up' });
});

pwasRouter(appScoped);

app.use(DEFAULT_ROUTE + 'http', appScoped);
pwasRouter(app);
