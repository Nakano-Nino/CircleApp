import { Users } from "../entity/Users"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
require('dotenv').config()
import { Repository } from "typeorm"
import userRegisterSchema from "../utils/Validator"

export default new class UserServices {
    private readonly UserRepository: Repository<Users> = AppDataSource.getRepository(Users)

    async register(req:Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const error = userRegisterSchema.validate(data)
            if(error){
                return res.status(400).json({ message: error })
            }

            const usernameCheck = await this.UserRepository.findOneBy({ username: data.username })
            if(usernameCheck) return res.status(400).json({ message: "Username already exists" })

            const hashedPassword = await bcrypt.hash(data.password, 10)

            const obj = this.UserRepository.create({
                ...data,
                password: hashedPassword
            })
            
            const result = await this.UserRepository.save(obj)
            return res.status(201).json(result)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async login(req:Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const user = await this.UserRepository.findOneBy({ username: data.username })
            if(!user) return res.status(404).json({ message: "User not found" })

            const passwordCheck = await bcrypt.compare(data.password, user.password)
            if (!passwordCheck) return res.status(401).json({ message: "Wrong password" })

            const obj = this.UserRepository.create({
                id: user.id,
                full_name: user.full_name,
                username: user.username,
                photo_profile: user.photo_profile
            })

            const token = jwt.sign({obj}, process.env.JWT_SECRET, { expiresIn: "30m" })

            return res.status(200).json({Message: "Login Success", token})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async check(req: Request, res: Response): Promise<Response> {
        try {
            const loginSession = res.locals.loginSession

            const obj = await this.UserRepository.findOne({
                where: { id: loginSession.obj.id }
            })
            return res.status(200).json({message: "Authorized", obj})
        } catch (error) {
            return res.status(500).json({ Error: error })
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.UserRepository.findOneBy({ id: Number(id) })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}