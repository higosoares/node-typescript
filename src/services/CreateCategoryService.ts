import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../database";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({ name, description } : CategoryRequest): Promise<Category | Error> {
        const repo = AppDataSource.getRepository(Category);

        if (await repo.findOne({ 
                where: {
                    name: name 
                }
            })) {
            return new Error("Category already exist");
        }

        const category = repo.create({ name, description });

        await repo.save(category);

        return category;
    }
}