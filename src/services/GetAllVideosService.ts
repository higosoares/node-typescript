import { getRepository } from "typeorm";
import { Video } from "../entities/Video";
import { AppDataSource } from "../database";

export class GetAllVideosService {
    async execute(): Promise<Video[]> {
        const repo = AppDataSource.getRepository(Video);

        const videos = await repo.find({
            relations: ['category']
        }) 

        return videos;
    }
}