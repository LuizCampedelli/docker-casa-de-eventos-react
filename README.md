# Sistema de casa de eventos | React Vite Node Docker

![Screenshot from 2024-10-17 14-30-39](https://github.com/user-attachments/assets/dce5441a-742e-4be1-9f74-b66168bb327d)

## Tecnologias Utilizadas

- React
- Vite
- Node
- Docker

## Dependências Utilizadas

- React Router
- Styled Components
- Axios
- React Toastify

## Instruções de Instalação

Clonar o projeto com o comando abaixo:

```sh
git clone git@github.com:LuizCampedelli/casa-de-eventos-react.git
```

Entrar na pasta do projeto

```sh
cd casa-de-eventos-react
```

Instalar as dependencias

```sh
npm install
```

## Instruções para rodar o projeto

Digitar o comando para criar a imagem do docker baseado nos requisitos do Dockerfile

```sh
docker buildx buld -t casa-de-eventos-react .
```
Digitar o comando para rodar a imagem do docker em uma porta especifica


```sh
docker run -d -p 5173:5173 casa-de-eventos-react
```

### _Pronto! Seu projeto já estará rodando no endereço

```sh
http://localhost:5173
```
Caso haja necessidade de mudanças no código

```sh
docker ps
```
Olhe o id do container

```sh
CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                       NAMES
fb9d05203a74   casa-de-eventos-react   "docker-entrypoint.s…"   31 minutes ago   Up 31 minutes   0.0.0.0:5173->5173/tcp, :::5173->5173/tcp   nervous_jennings
```

Pare o container

```sh
docker stop <id do container>
```

Faça suas mudanças e rode novamente os comandos de "build e "run".

Codigos de React, Vite, Node e estruturação completa: https://github.com/roofranklin

### Divirta-se!
