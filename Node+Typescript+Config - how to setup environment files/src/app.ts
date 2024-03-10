import express, {Express} from 'express';
import { apiRouter } from './route';

const app: Express = express();

app.use("/api", apiRouter);

export default app;