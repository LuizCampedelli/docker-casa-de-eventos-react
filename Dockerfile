# Usa a imagem base do Node.js LTS
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Define uma variável de ambiente
ENV NODE_ENV=development

# Expõe a porta que a aplicação utilizará
EXPOSE 5173

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
