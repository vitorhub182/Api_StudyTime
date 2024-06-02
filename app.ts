
import express from 'express';
const app = express();
const morgan = require('morgan');
const rotaManagement = require('./routes/Student&Course');

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