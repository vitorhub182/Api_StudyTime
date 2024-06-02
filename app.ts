
import express from 'express';
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rotaManagement = require('./routes/Student&Course');

// inicia o serviço morgan
app.use(morgan('dev'));
// adiciona o express ao app

// Apenas dados simples
app.use(bodyParser.urlencoded({ extended: false}));
// apenas o formato json de entrada (POST/ PUT/ PATCH/ DELETE)
app.use(bodyParser.json()); 

// Rota padrão. para testes
app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Aplicação Node está em desenvolvimento',
    });
 });


app.use('', rotaManagement);

// Tratamento para quando não se encontra nenhuma rota
app.use((req,res,next) => {
    const erro = new Error("Requisição não Encontrada");
    console.error(statusbar); // Verificar funcionalidade
    ;
    next(erro);
});

// Captura de erros genericos, recebe "error"
app.use((error, req, res, next) => {
  
  res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem:error.message
        }
    })
})

export default app;