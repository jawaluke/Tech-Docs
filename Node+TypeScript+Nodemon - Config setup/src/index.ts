import express, { Express, Request, Response } from "express";

const PORT = 8080
const app: Express = express()



app.get('/info', (request: Request, response: Response) => {
    response.status(200).send('NodeJS RestAPI dog Service');
});


app.listen( PORT, () => {
    console.log(`Server started at ${PORT}`);
});