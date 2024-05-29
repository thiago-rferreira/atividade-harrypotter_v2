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

const getContato = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Contato');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}

const updateContato = async (req, res) => {
    const { id } = req.params;
    const {
        nome,
        email,
        telefone,
        mensagem
    } = req.body;

    try {
        const result = await pool.query(
            'UPDATE Contatos SET Nome = $1, Email = $2, Telefone = $3, Mensagem = $4, ID = $5 RETURNING *',
            [nome, email, telefone, mensagem, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating from database:', error);
        res.status(500).send('Error updating from database');
    }
}

const deleteContato = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM Contato WHERE ID = $1', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error deleting from database:', error);
        res.status(500).send('Error deleting from database');
    }
}

const getContatoById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Contado WHERE ID = $1', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}

const getContatoByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Contato WHERE Email = $1', [email]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}
// Função para listar todos os usuários
const getContatoByTelefone = async (req, res) => {
    const { telefone } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Users WHERE Telefone = $1', [telefone]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}

const getContatoByNome = async (req, res) => {
    const { nome } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Contatos WHERE Name = $1', [nome]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}

module.exports = {
    addContato,
    getContato,
    updateContato,
    deleteContato,
    getContatoById,
    getContatoByEmail,
    getContatoByTelefone,
    getContatoByNome
};