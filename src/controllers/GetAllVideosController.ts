import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController {
    async handle(_, response: Response) {
        const service = new GetAllVideosService();

        return response.json(await service.execute());
    }
}