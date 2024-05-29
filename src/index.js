// Carrega variáveis de ambiente a partir de um arquivo .env
require('dotenv').config();

// Importa o módulo Express para criar o servidor
const express = require('express');

// Importa as rotas específicas para usuários, restaurantes e avaliações
const usuariosRoutes = require('./routes/usuarios.routes.js')
const restaurantesRoutes = require('./routes/restaurantes.routes.js')
const avaliacoesController = require('./routes/avaliacoes.routes.js')

// Cria uma aplicação Express
const app = express();

// Define a porta na qual o servidor vai rodar, utilizando a variável de ambiente PORT ou 3000 como padrão
const port = process.env.PORT || 3000;

// Adiciona um middleware para fazer o parse de requisições com payload JSON
app.use(express.json());

// Define as rotas da aplicação, associando cada caminho a um conjunto de rotas importadas
app.use('/usuarios', usuariosRoutes);//Rota para usuário
app.use('/restaurantes', restaurantesRoutes);// Rotas para restaurantes
app.use('/avaliacoes', avaliacoesController);// Rotas para avaliações


// Inicia o servidor e faz com que ele escute na porta definida, exibindo uma mensagem no console quando estiver rodando
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🥂`);
});
