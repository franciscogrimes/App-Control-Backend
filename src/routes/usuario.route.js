const UsuarioController = require('../controllers/UsuarioControllers.js');
const { Router } = require('express');

const usuarioRoutes = Router();

usuarioRoutes.get("/",UsuarioController.getAllUsers);
usuarioRoutes.post("/",UsuarioController.postUser);

module.exports = usuarioRoutes;