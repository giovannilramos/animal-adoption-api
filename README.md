## API ANIMAL-ADOPTION

#### 1. Requisitos necessários

- Install docker
- Install docker-compose
- Install Makefile

#### 2. Passos para executar o projeto

* Configurações necessárias

  - Recomendamos criar uma alias `dcli` para executar o comando:  `docker-compose -f docker-compose.cli.yml run --rm`
  - Copiar o arquivo `.env.dist` com o nome `.env`
    - Configure o arquivo `.env`
  - Copiar o arquivo `docker-compose.override.yml.dist` com o nome `docker-compose.override.yml`
    - Configure o arquivo `docker-compose.override.yml`
* Lista de comandos

  | COMANDOS             | DESCRIÇÃO                                                  |
  | -------------------  | ---------------------------------------------------------- |
  | docker-compose build | Para construir a imagem do docker                          |
  | docker-compose up    | Para iniciar a aplicação                                   |
  | docker ps    | Para listar containers que estão em execução                                |
  | docker images    | Para listar images                                |
  | docker volume ls    | Para listar volumes                                |
  | docker network ls    | Para listar network                                |
  | docker rm -f `CONTAINER_ID`    | Para remover um container                               |
  | docker rmi -f `IMAGE_ID`    | Para remover uma imagem                               |
  | dcli yarn            | Para instalar todas dependências                           |
  | dcli yarn add `lib`  | Para instalar uma dependência                              |
  | dcli yarn knex:migrate:make `name_migration`  | Para criar uma nova migration                              |
  | dcli yarn knex:migrate:latest   | Para executar migration                              |
  | dcli yarn knex:migrate:rollback   | Para reveter migration                              |
  | dcli yarn knex:seed:make`name_seed`   | Para criar um novo seed                            |
  | dcli yarn knex:seed:run`name_seed`   | Para executar seed                            |
  | sudo chmod -R 777 app/src/Database/migrations/`filename_migration`   | Para dar permissão no arquivo de migration                            |
  | sudo chmod -R 777 app/src/Database/seeds/`filename_seed`   | Para dar permissão no arquivo de seed                            |
