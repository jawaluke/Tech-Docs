import { Router } from "express";
import { userRoute } from "./user.route";

const router: Router = Router();

router.use("/user", userRoute);

export const apiRouter: Router = router;