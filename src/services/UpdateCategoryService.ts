import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../database";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description } : CategoryUpdateRequest): Promise<Category | Error> {
        const repo = AppDataSource.getRepository(Category);

        const category = await repo.findOne({ 
            where: {
                id: id 
            }
        });

        if (!category) {
            return new Error("Category does not exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category;
    }
}