
import express from 'express';
const app = express();
const loginRoutes = require('./routes/LoginRoutes');
const userRoutes = require('./routes/UserRoutes');
const taskRoutes = require('./routes/TaskRoutes');
const subTaskRoutes = require('./routes/SubTaskRoutes');
const cardRoutes = require('./routes/CardRoutes');

// Rota padrão. para testes
app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Aplicação Node está em desenvolvimento',
    });
 });

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/subtask', subTaskRoutes);
app.use('/card', cardRoutes);

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