import { Router } from "express";
import { getAllUser, postUser } from "../controllers/userController";

const userRoute: Router = Router();

userRoute.get('/users', getAllUser);
userRoute.post('/users', postUser);

export default userRoute;