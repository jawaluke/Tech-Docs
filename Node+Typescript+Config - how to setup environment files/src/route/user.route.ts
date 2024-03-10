import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/user', (request: Request, response: Response) => {
    response.status(200).send("User route");
});

export const userRoute: Router = router;