import express from "express"
import likesController from "../controller/likesController"

const likesRoute = express.Router()
likesRoute.get("/likes/:id", likesController.findAll)
likesRoute.post("/like/:id", likesController.create) 

export default likesRoute