import { Repository } from "typeorm"
import { Likes } from "../entity/likes"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"

export default new class LikesServices {
    private readonly LikesRepository: Repository<Likes> = AppDataSource.getRepository(Likes)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.LikesRepository.find({where: {threads: {id: Number(req.params.id)}}, relations: ['users', 'threads']})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const users = 2
            const obj = this.LikesRepository.create({
                threads: {id: Number(id)}, 
                users: {id: users}
            })
            const result = await this.LikesRepository.save(obj)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.LikesRepository.findOne({ where: {threads: {id: Number(id)}}, relations: ['users', 'threads'] })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const findOne = await this.LikesRepository.findOne({ where: {threads: {id: Number(id)}}, relations: ['users', 'threads'] })
            const result = await this.LikesRepository.delete(findOne)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}