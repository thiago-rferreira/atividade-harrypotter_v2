const express = require('express');
const router = express.Router();
const cuisineTypeController = require('../controllers/cozinhaController'); // Ajuste o caminho conforme a estrutura do seu projeto

router.post('/cuisine-types', cuisineTypeController.addCuisineType);
router.get('/cuisine-types', cuisineTypeController.getCuisineTypes);
router.put('/cuisine-types/:id', cuisineTypeController.updateCuisineType);
router.delete('/cuisine-types/:id', cuisineTypeController.deleteCuisineType);

module.exports = router;
