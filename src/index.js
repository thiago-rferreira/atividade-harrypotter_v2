require('dotenv').config();
const express = require('express');
const bruxosRoutes = require('./routes/bruxosRoutes');
const varinhasRoutes = require('./routes/varinhasRoutes');

const app = express();
const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set

app.use(express.json());

app.use('/', bruxosRoutes);
app.use('/', varinhasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}🧙🪄✨`);
});
