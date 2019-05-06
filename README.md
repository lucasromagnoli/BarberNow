# GoBarber

Projeto realizado no bootcamp da Rocketseat.

# Pacotes

Express
Express-session
Nunjucks
Sequelize
Bcryptjs
Multer
[Connect-loki]

# Começando o projeto

Iniciamos o projeto criando um projeto NodeJS com o comando npm init -y
Criar a pasta onde vai ficar os arquivos estaticos
Configurar o servidor para ter acesso a arquivos estaticos
Configurar as pastas de layout, \_layouts e \_partials

# Sequelize

É nosso ORM, responsável por gerenciar o banco de dados utilizandojavascript.
Acrescentar o mesmo ao projeto: yarn add sequelize
Acrescentar interface de lnha d comandos do sequelize para facilitar o desenvolvimento: yarn add sequelize-cli -D
Iniciar o sequelize com comando: npx sequelize init
Assim que o comando for utilizado, na estrutura do projeto será adicionado algumas pastas e arquivos de configurações.
Agora, vamos mover os arquivos para ficar mais organizado.

Ficando:
Pasta config dentro da pasta src;
Alterar o nome do arquivo config.json para database.js;
Pasta migrations dentro da pasta src/database
Pasta seeders dentro da pasta src/database
Pasta models dentro da pasta src/app

Acrescentando a dependência do banco de dados conforme seu banco de dados

Mysql: yarn add mysql2
MariaDB: yarn add mariadb
SQLite: yarn add sqlite3
Postgress: yarn add pg
MSSQL: yarn add tedious

Agora vamos criar um arquivo dentro da pasta raiz do nosso projeto com o nome .sequelizerc
Vamos escrever em javascript dentro do arquivo. Portanto, configurar o editor para reconhecer a syntaxe
Como mudamos os diretórios dos arquivos criados automáticamente pelo sequelize, vamos ter que informar no .sequelizerc
os novos diretórios.

```
const path = require('path');

module.exports = {
    config: path.resolve('src', 'config', 'database.js'),
    'models-path': path.resolve('src', 'app', 'models'),
    'seeders-path': path.resolve('src', 'database', 'seeders'),
    'migrations-path': path.resolve('src', 'database', 'migrations')
}
```

Modificar o arquivo de configuração src/config/database.js para retornar apenas uma configuração de desenvolvimento.
Modificar o arquivo app/model/index.js

Criar a imagem do banco de dados utilizando o docker
Postgress com algumas melhorias de geolocalização: docker run --name database -p 5432:5432 -d -t kartoza/postgis

# Models

Criar o modelo do usuário na pasta models.
Por padrão o nome dos arquivos de modelos começa com a primeira leitra Maiúscula
Configurar o migration dos usuários

# Docker

Parando um processo:
Docker stop idImagem/IdProcesso

Exibindo todos os containers
docker container ls
