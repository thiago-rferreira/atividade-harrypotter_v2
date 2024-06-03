const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.addUser);
router.get('/', usuariosController.getUsers);
router.put('/:id', usuariosController.updateUser);
router.delete('/:id', usuariosController.deleteUser);
router.get('/:id', usuariosController.getUserById);
router.get('/email/:email', usuariosController.getUserByEmail);
router.get('/type/:type', usuariosController.getUserByType);
router.get('/name/:name', usuariosController.getUserByName);


module.exports = router;
