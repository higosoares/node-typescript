import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { cwd, env } from 'process';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'sqlite',
    //host: env.TYPEORM_HOST,
    //port: parseInt(env.TYPEORM_PORT),
    //username: env.TYPEORM_USER,
    //password: env.TYPEORM_PASSWORD,
    database: env.TYPEORM_DATABASE,
    entities: [env.TYPEORM_ENTITIES],
    migrations: [env.TYPEORM_MIGRATIONS],
    migrationsTableName: 'migrations',
    synchronize: false,
    dropSchema: false,
});


AppDataSource.initialize()
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });