const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contatoController');

router.post('/', contatoController.addContato);
router.get('/', contatoController.getContato);
router.put('/', contatoController.updateContato);
router.delete('/', contatoController.deleteContato);
router.get('/', contatoController.getContato);
router.get('/:id', contatoController.getContatoById);
router.get('/email/:email', contatoController.getContatoByEmail);
router.get('/', contatoController.getContato);
router.get('/', contatoController.getContato);


module.exports = router;