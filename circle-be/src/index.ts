import { AppDataSource } from "./data-source"
import express from "express"
import session  from "express-session"
import userRoute from "./routes/userRouter"
import threadRoute from "./routes/threadRouter"
import repliesRoute from "./routes/repliesRouter"
import dotenv from "dotenv"

var cors = require('cors')
dotenv.config()

AppDataSource.initialize().then(async () => {

    const app = express()
    const port = process.env.port || 3000

    app.use(session({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: true
    }))

    app.use(cors())
    app.use(express.json())
    app.use("/api/v1", userRoute)
    app.use("/api/v1", threadRoute)
    app.use("/api/v1", repliesRoute)

    app.listen(port, () => `app listeing on port ${port}`)

}).catch(error => console.log(error))
