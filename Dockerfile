# Usando a imagem base do Node.js
FROM node:20.13.1

# Definir o diretório de trabalho no contêiner
WORKDIR /api

# Copiar package.json e package-lock.json
COPY package*.json .

# Instalar as dependências
RUN npm install

# Copiar todo o código da aplicação
COPY src .

# Expor a porta na qual o app estará rodando
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"] 