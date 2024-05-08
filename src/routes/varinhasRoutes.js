const express = require('express');
const router = express.Router();
const varinhasController = require('../controllers/varinhasController');

router.post('/varinhas', varinhasController.createVarinha);
router.get('/varinhas', varinhasController.getAllVarinhas);
router.put('/varinhas/:id', varinhasController.updateVarinha);
router.delete('/varinhas/:id', varinhasController.deleteVarinha);

module.exports = router;
