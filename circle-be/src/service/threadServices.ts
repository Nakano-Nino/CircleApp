import { Threads } from "../entity/Threads"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { Request, Response } from "express"

export default new class ThreadServices {
    private readonly ThreadRepository: Repository<Threads> = AppDataSource.getRepository(Threads)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.ThreadRepository.find({relations: ["users"], order: {created_at: "DESC"}})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id

            const result = await this.ThreadRepository.findOne({ where: {id: Number(id)}, relations: ['users'] })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body
            const obj = this.ThreadRepository.create({
                content: data.content,
                image: data.image,
                created_at: new Date(),
                updated_at: new Date(),
                users: data.users
            })
            const result = await this.ThreadRepository.save(obj)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const data = req.body

            const fetched = await this.ThreadRepository.findOneBy({ id: Number(id) })
            if (!fetched) return res.status(404).json({ message: "Thread not found" })

            const obj = this.ThreadRepository.create({
                id: Number(id),
                content: data.content,
                image: data.image,
                created_at: new Date(),
                updated_at: new Date()
            })
            this.ThreadRepository.merge(fetched, obj)
            const result = await this.ThreadRepository.save(fetched)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.ThreadRepository.delete({ id: Number(id) })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}