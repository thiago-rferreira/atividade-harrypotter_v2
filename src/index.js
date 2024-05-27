require('dotenv').config();
const express = require('express');
const usuariosRoutes = require('./routes/usuarios.routes.js');
const restaurantesRoutes = require('./routes/restaurantes.routes.js');
const avaliacoesController = require('./routes/avaliacoes.routes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', usuariosRoutes);
app.use('/', restaurantesRoutes);
app.use('/', avaliacoesController);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🥂`);
});