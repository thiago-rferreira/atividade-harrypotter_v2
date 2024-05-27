const pool = require('../config/dbConfig'); // Ajuste o caminho conforme a estrutura do seu projeto

// Função para adicionar um novo tipo de cozinha
const addCuisineType = async (req, res) => {
  const { cuisineName } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO CuisineTypes (CuisineName) VALUES ($1) RETURNING *',
      [cuisineName]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).send('Error inserting into database');
  }
};

// Função para obter todos os tipos de cozinha
const getCuisineTypes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM CuisineTypes');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching from database:', error);
    res.status(500).send('Error fetching from database');
  }
};

// Função para atualizar um tipo de cozinha
const updateCuisineType = async (req, res) => {
  const { id } = req.params;
  const { cuisineName } = req.body;

  try {
    const result = await pool.query(
      'UPDATE CuisineTypes SET CuisineName = $1 WHERE CuisineTypeID = $2 RETURNING *',
      [cuisineName, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating database:', error);
    res.status(500).send('Error updating database');
  }
};

// Função para deletar um tipo de cozinha
const deleteCuisineType = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM CuisineTypes WHERE CuisineTypeID = $1', [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting from database:', error);
    res.status(500).send('Error deleting from database');
  }
};

module.exports = {
  addCuisineType,
  getCuisineTypes,
  updateCuisineType,
  deleteCuisineType,
};
