import { Request, Response } from "express";
import threadServices from "../service/threadServices";

export default new class ThreadController {
    findAll(req: Request, res: Response) {
        threadServices.findAll(req, res)
    }
    getOne(req: Request, res: Response) {
        threadServices.getOne(req, res)
    }
    create(req: Request, res: Response) {
        threadServices.create(req, res)
    }
    update(req: Request, res: Response) {
        threadServices.update(req, res)
    }
    delete(req: Request, res: Response) {
        threadServices.delete(req, res)
    }
}();