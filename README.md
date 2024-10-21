# Sistema de casa de eventos | React Vite Node Docker | Santander DevOps 1182

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

### Pronto! Seu projeto já estará rodando no endereço

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

### Para rodar e ver o json no backend

```sh
http://localhost:5173/events.json
```

![json backend](https://github.com/user-attachments/assets/878b2af0-d914-4ac0-a0c2-bd5e69f4fa13)

### Guardar imagem Docker no Docker Hub

```sh
docker login
```
Depois

```sh
docker tag <tag do nome da imagem> <tag do usuario do docker hub>/<tag do nome da imagem>:<tag da versão>
Exemplo: docker tag casa-de-eventos-react vapeprosper/casa-de-eventos-react:v.1
```

Publicar no Docker Hub

```sh
docker push <tag do usuario do docker hub>/<tag do nome da imagem>:<tag da versão>
docker push vapeprosper/casa-de-eventos-react:v.1
```

### Imagem no docker Hub

https://hub.docker.com/r/vapeprosper/casa-de-eventos-react

### Agradecimentos

Codigos de React, Vite, Node e estruturação completa: https://github.com/roofranklin

### Divirta-se!
