# Node com TypeScript e TypeORM
Cadastro de vídeos e suas categorias.

## Uso
````
yarn install
yarn typeorm migration:run -d src/database/index.ts
yarn dev
````

Caso queira criar uma migration:
````
yarn typeorm migration:create src/database/migrations/CreateCategories
````

## Rotas
Categorias
- GET /categories
- POST /categories
- PUT /categories/:id
- DELETE /categories/:id

Videos
- POST /videos
- GET /videos

## Referência
https://www.youtube.com/watch?v=9AO2hZJsHrs&ab_channel=Rocketseat