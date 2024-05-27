const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantesController'); // Ajuste o caminho conforme a estrutura do seu projeto
const upload = require('../config/multer'); // Ajuste o caminho conforme a estrutura do seu projeto
const cuisineTypeRoutes = require('./cozinhas.routes');

router.post('/restaurants', upload.fields([{name: 'photos', maxCount: 10 }]), restaurantController.addRestaurant);
router.get('/restaurants', restaurantController.getRestaurants);
router.put('/restaurants/:id', upload.fields([{ name: 'photos', maxCount: 10 }]), restaurantController.updateRestaurant);
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

router.use(cuisineTypeRoutes);

module.exports = router;
