const express = require('express');
const router = express.Router();
const bruxosController = require('../controllers/bruxosController');

router.post('/bruxos', bruxosController.createBruxo);
router.get('/bruxos', bruxosController.getAllBruxos);
router.put('/bruxos/:id', bruxosController.updateBruxo);
router.delete('/bruxos/:id', bruxosController.deleteBruxo);

module.exports = router;
