const { Router } = require('express');
const EntradaController = require('../controllers/EntradaControllers');

const entradaRoutes = Router();

entradaRoutes.get('/', EntradaController.getAllEntradas);
entradaRoutes.post('/', EntradaController.postEntrada);
entradaRoutes.delete('/:id', EntradaController.deleteEntrada);

module.exports = entradaRoutes;
