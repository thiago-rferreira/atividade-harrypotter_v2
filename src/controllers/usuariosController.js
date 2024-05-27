const pool = require('../config/dbConfig');

// Função para adicionar um novo usuário
const addUser = async (req, res) => {
  const {
    name,
    email,
    password,
    type,
    bio
  } = req.body;

  console.log
    try {
        const result = await pool.query(
        'INSERT INTO Users (Username, Email, Pass, UserType, Bio) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, email, password, type, bio]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting into database:', error);
        res.status(500).send('Error inserting into database');
    }
}
// Função para listar todos os usuários
const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Users');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}

// Função para atualizar um usuário
const updateUser = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        email,
        password,
        type,
        bio
    } = req.body;

    try {
        const result = await pool.query(
            'UPDATE Users SET Username = $1, Email = $2, Pass = $3, UserType = $4, Bio = $5 WHERE ID = $6 RETURNING *',
            [name, email, password, type, bio, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating from database:', error);
        res.status(500).send('Error updating from database');
    }
}
// Função para deletar um usuário
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM Users WHERE ID = $1', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error deleting from database:', error);
        res.status(500).send('Error deleting from database');
    }
}
// Função para listar todos os usuários
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM Users WHERE userid = $1', [id]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error fetching from database:', error);
      res.status(500).send('Error fetching from database');
    }
  };
// Função para listar todos os usuários
const getUserByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Users WHERE Email = $1', [email]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}
// Função para listar todos os usuários
const getUserByType = async (req, res) => {
    const { type } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Users WHERE Type = $1', [type]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}
// Função para listar todos os usuários
const getUserByName = async (req, res) => {
    const { name } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Users WHERE Name = $1', [name]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching from database:', error);
        res.status(500).send('Error fetching from database');
    }
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser,
    getUserById,
    getUserByEmail,
    getUserByType,
    getUserByName,
};