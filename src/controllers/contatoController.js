const pool = require('../config/dbConfig');

const addContato = async (req, res) => {
  const {
    nome,
    email,
    telefone,
    mensagem
  } = req.body;

  console.log
    try {
        const result = await pool.query(
        'INSERT INTO Contato (Nome, Email, Telefone, Mensagem) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome, email, telefone, mensagem]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting into database:', error);
        res.status(500).send('Error inserting into database');
    }
}