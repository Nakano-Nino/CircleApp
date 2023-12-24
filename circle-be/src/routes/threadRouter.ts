import express from "express"
import threadController from "../controller/threadController"
import AuthMiddleware from "../middlewares/jwtAuth"

const threadRoute = express.Router()
threadRoute.get("/thread", threadController.findAll)
threadRoute.get("/thread/:id", threadController.getOne)
threadRoute.post("/thread", threadController.create)
threadRoute.put("/thread/:id", AuthMiddleware, threadController.update)
threadRoute.delete("/thread/:id", AuthMiddleware, threadController.delete)

export default threadRoute