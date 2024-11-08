import { Router } from "express";
import { getAllUser, postUser } from "../controllers/userController";
import { validateUser } from "../middlewares/validateUserMid";

const userRoute: Router = Router();

userRoute.get('/users', getAllUser);
userRoute.post('/users', validateUser ,postUser);

export default userRoute;