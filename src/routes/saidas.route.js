const { Router } = require('express');
const SaidaController = require('../controllers/SaidaControllers');

const saidaRoutes = Router();

saidaRoutes.get('/', SaidaController.getAllSaidas);
saidaRoutes.post('/', SaidaController.postSaida);
saidaRoutes.delete('/:id', SaidaController.deleteSaida);

module.exports = saidaRoutes;
