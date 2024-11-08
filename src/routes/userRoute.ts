import { Router } from "express";
import { getAllUser, getProfile, postUser } from "../controllers/userController";
import { validateUser } from "../middlewares/validateUserMid";
import { authenticateJWT } from "../middlewares/authMid";

const userRoute: Router = Router();

userRoute.get('/', getAllUser);
userRoute.post('/', validateUser ,postUser);
userRoute.get('/profile', authenticateJWT, getProfile);

export default userRoute;