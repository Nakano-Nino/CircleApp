import { Replies } from "../entity/replies"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { Request, Response } from "express"

export default new class ReplyServices {
    private readonly ReplyRepository: Repository<Replies> = AppDataSource.getRepository(Replies)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.ReplyRepository.find({where: {threads: {id: Number(req.params.id)}}, relations: ['users', 'threads']})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async countAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.ReplyRepository.find({relations: ['thread']})

            const repliesCount = result.reduce((acc, curr) => acc + curr.threads.replies.length, 0)

            console.log(repliesCount);
            
            return res.status(200).json(repliesCount)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.ReplyRepository.findOne({ where: {id: Number(id)}, relations: ['users', 'thread'] })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body
            const obj = this.ReplyRepository.create(data)
            const result = await this.ReplyRepository.save(obj)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }


}