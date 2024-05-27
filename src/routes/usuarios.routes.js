const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.post('/users', usuariosController.addUser);
router.get('/users', usuariosController.getUsers);
router.put('/users/:id', usuariosController.updateUser);
router.delete('/users/:id', usuariosController.deleteUser);
router.get('/users/:id', usuariosController.getUserById);
router.get('/users/email/:email', usuariosController.getUserByEmail);
router.get('/users/type/:type', usuariosController.getUserByType);
router.get('/users/name/:name', usuariosController.getUserByName);


module.exports = router;
