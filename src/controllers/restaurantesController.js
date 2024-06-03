const pool = require('../config/dbConfig'); // Ajuste o caminho conforme a estrutura do seu projeto

// Função para adicionar um novo restaurante
const addRestaurant = async (req, res) => {
  const {
    name,
    location,
    priceLevel,
    cuisineTypeId,
    chefName,
    description,
    openingDays,
    paymentMethods,
    rating,
    foundationDate,
    menuPDF,
  } = req.body;

  const photos = req.files['photos'] ? req.files['photos'].map(file => file.path) : [];

  console.log(name, 
    name,
    location,
    priceLevel,
    cuisineTypeId,
    chefName,
    description,
    openingDays,
    paymentMethods,
    rating,
    foundationDate,
    menuPDF,
    photos
    )

  try {
    const result = await pool.query(
      'INSERT INTO Restaurants (Name, Location, PriceLevel, CuisineTypeID, ChefName, Description, OpeningDays, PaymentMethods, Rating, FoundationDate, MenuPDF, Photos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      [name, location, priceLevel, cuisineTypeId, chefName, description, openingDays, paymentMethods, rating, foundationDate, menuPDF, photos]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).send('Error inserting into database');
  }
};

// Função para obter todos os restaurantes
const getRestaurants = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Restaurants');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching from database:', error);
    res.status(500).send('Error fetching from database');
  }
};

// Função para atualizar um restaurante
const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    location,
    priceLevel,
    cuisineTypeId,
    chefName,
    description,
    openingDays,
    paymentMethods,
    rating,
    foundationDate,
    menuPDF,
  } = req.body;


  const photos = req.files['photos'] ? req.files['photos'].map(file => file.path) : [];

  try {
    const result = await pool.query(
      'UPDATE Restaurants SET Name = $1, Location = $2, PriceLevel = $3, CuisineTypeID = $4, ChefName = $5, Description = $6, OpeningDays = $7, PaymentMethods = $8, Rating = $9, FoundationDate = $10, MenuPDF = $11, Photos = $12 WHERE RestaurantID = $13 RETURNING *',
      [name, location, priceLevel, cuisineTypeId, chefName, description, openingDays, paymentMethods, rating, foundationDate, menuPDF, photos, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating database:', error);
    res.status(500).send('Error updating database');
  }
};

// Função para deletar um restaurante
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM Restaurants WHERE RestaurantID = $1', [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting from database:', error);
    res.status(500).send('Error deleting from database');
  }
};

module.exports = {
  addRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
};
