const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantesController.js'); // Ajuste o caminho conforme a estrutura do seu projeto


router.post('/restaurants', restaurantController.addRestaurant);
router.get('/restaurants', restaurantController.getRestaurants);
router.get('/restaurants/:id', restaurantController.getRestaurantById);
router.put('/restaurants/:id', restaurantController.updateRestaurant);
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);


module.exports = router;