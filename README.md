
### Inicializando o banco
```shell
docker-compose up -d
```
### Conexão com o postgres
```shell
psql -U root -d study_time
```

## Build somente da API no docker
```shell
docker build . -t api_studytime/app_studytime:v1  
```