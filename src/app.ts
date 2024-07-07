import express from 'express';
const app = express();

const userRoutes = require('./routes/UserRoutes');
const topicRoutes = require('./routes/TopicRoutes');
const subTopicRoutes = require('./routes/SubTopicRoutes');
const cardRoutes = require('./routes/CardRoutes');

// apenas o formato json de entrada (POST/ PUT/ PATCH/ DELETE)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/topic', topicRoutes);
app.use('/subtopic', subTopicRoutes);
app.use('/flashcard', cardRoutes);

// Rota padrão. para testes
app.use('/teste', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Ok, Aplicação Node está em desenvolvimento',
  });
});

// Tratamento para quando não se encontra nenhuma rota
// app.use((req, res, next) => {
//   const erro = new Error('Requisição não Encontrada');
//   console.error(statusbar); // Verificar funcionalidade
//   next(erro);
// });

// Captura de erros genericos, recebe "error"
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   return res.send({
//     erro: {
//       mensagem: error.message,
//     },
//   });
// });

export default app;
