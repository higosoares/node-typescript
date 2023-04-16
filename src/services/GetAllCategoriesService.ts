import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../database";

export class GetAllCategoriesService {
    async execute(): Promise<Category[]> {
        const repo = AppDataSource.getRepository(Category);

        return await repo.find();
    }
}