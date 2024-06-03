const pool = require('../config/dbConfig'); // Ajuste o caminho conforme a estrutura do seu projeto

// Função para adicionar uma nova avaliação
const addReview = async (req, res) => {
  const { restaurantId, userId, starRating, comment } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO Reviews (RestaurantID, UserID, StarRating, Comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [restaurantId, userId, starRating, comment]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).send('Error inserting into database');
  }
};

// Função para obter todas as avaliações de um restaurante específico
const getReviewsByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM Reviews WHERE RestaurantID = $1',
      [restaurantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching reviews from database:', error);
    res.status(500).send('Error fetching reviews from database');
  }
};

// Função para atualizar uma avaliação
const updateReview = async (req, res) => {
  const { id } = req.params;
  const { starRating, comment } = req.body;

  try {
    const result = await pool.query(
      'UPDATE Reviews SET StarRating = $1, Comment = $2 WHERE ReviewID = $3 RETURNING *',
      [starRating, comment, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating database:', error);
    res.status(500).send('Error updating database');
  }
};

// Função para deletar uma avaliação
const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM Reviews WHERE ReviewID = $1', [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting from database:', error);
    res.status(500).send('Error deleting from database');
  }
};

// Função para incrementar as curtidas de uma avaliação
const likeReview = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'UPDATE Reviews SET Likes = Likes + 1 WHERE ReviewID = $1 RETURNING *',
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating likes in database:', error);
    res.status(500).send('Error updating likes in database');
  }
};

module.exports = {
  addReview,
  getReviewsByRestaurant,
  updateReview,
  deleteReview,
  likeReview,
};
