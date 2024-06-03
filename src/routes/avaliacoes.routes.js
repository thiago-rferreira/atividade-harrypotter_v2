const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/avaliacoesController'); // Ajuste o caminho conforme a estrutura do seu projeto

router.post('/reviews', reviewController.addReview);
router.get('/reviews/restaurant/:restaurantId', reviewController.getReviewsByRestaurant);
router.put('/reviews/:id', reviewController.updateReview);
router.delete('/reviews/:id', reviewController.deleteReview);
router.post('/reviews/:id/like', reviewController.likeReview);

module.exports = router;
