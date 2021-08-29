# nasdaq-map-backend

## Como acessar
Acesse a versão hospedada na heroku por aqui: https://nasdaq-map.herokuapp.com/

## Sobre o projeto
Nasdaq Map é uma aplicação feita para verificar e acompanhar ações da bolsa Nasdaq. A parte do servidor, feita em NodeJS com Express, constitui uma API para criar e autenticar usuários, além de salvar informações de suas empresas recentes e favoritas. O sistema de autenticação é feito com um JWT com tempo de expiração de 1h, e um refresh token com expiração de 7 dias. Esse último é o responsável por manter o usuário autenticado mesmo depois de desconectar, fazendo isso por meio de um cookie HTTP-only para impedir ataques maliciosos aos usuários. Quanto ao banco de dados, o utilizado é o MongoDB com mongoose.

## Como rodar o projeto

Este é um projeto fullstack, logo para rodar localmente tendo a experiência completa é necessário configurar o frontend também: https://github.com/vitorwlima/nasdaq-map-frontend

1. Baixe o projeto em sua máquina
```shell
git clone https://github.com/vitorwlima/nasdaq-map-backend.git
cd nasdaq-map-backend
yarn
```

2. Insira um arquivo .env na raiz do projeto com os seguintes valores:
```shell
DB_CONNECTION = Sua chave de conexão com o banco MongoDB
PORT = A porta que o servidor irá rodar (geralmente é utilizado 3333)
ORIGIN = URL que consumirá as informações (no caso do frontend: http://localhost:3000)
TOKEN_HASH = Hash aleatória
```

3. Rode o projeto
```shell
yarn dev
```
