import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
    async handle(_, response: Response) {
        const service = new GetAllCategoriesService();

        return response.json(await service.execute());
    }
}