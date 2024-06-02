### Dependencias necessárias
```shell
npm install -g typescript
```

### Iniciando projeto
```shell
npm init -y
install express --save-dev
npm install @types/express --save-dev
npm install -g ts-node-dev --save-dev
 npm install sequelize reflect-metadata sequelize-typescript
 npm install --save-dev @types/node @types/validator
 npm install nodemon --save-dev
```

### SCRIPTS DE EXECUÇÃO
Adicionar em package.json:
  "scripts": {
    "start:dev": "nodemon src/index.ts", 
    "build": "npx tsc"
  }

### CONFIGURANDO O TYPESCRIPT
crie tsconfig.json e insira
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "esModuleInterop": true,
      }
}

### COMANDO PARA SUBIR A APLICAÇÃO
```shell
npm run start:dev
```
### BANCO DDE DADOS POSTGRES
```shell
npm install sequelize pg pg-hstore
```
### Inicializando o banco
```shell
docker-compose up
```
