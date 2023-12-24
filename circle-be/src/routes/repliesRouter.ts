import express from "express"
import repliesController from "../controller/repliesController"

const repliesRoute = express.Router()
repliesRoute.get("/replies/:id", repliesController.findAll)
repliesRoute.get("/replies", repliesController.countAll)
repliesRoute.get("/replies/:id", repliesController.getOne)
repliesRoute.post("/replies", repliesController.create) 
// repliesRoute.put("/thread/:id", jwtAuth.Authentification, threadController.update)
// repliesRoute.delete("/thread/:id", jwtAuth.Authentification, threadController.delete)

export default repliesRoute