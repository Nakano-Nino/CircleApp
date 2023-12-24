import express from "express";
import userController from "../controller/userController";
import AuthMiddleware from "../middlewares/jwtAuth";

const userRoute = express.Router();
userRoute.post("/user/register", userController.register);
userRoute.post("/user/login", userController.login);
userRoute.get("/user/check", AuthMiddleware, userController.check);
userRoute.get("/user/:id", userController.getOne);

export default userRoute