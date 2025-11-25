const ClienteController = require('../controllers/ClienteControllers.js');
const { Router } = require('express');

const clienteRoutes = Router();

clienteRoutes.get("/",ClienteController.getAllClients);
clienteRoutes.post("/",ClienteController.postClient);
clienteRoutes.put("/:id",ClienteController.updateClient);
clienteRoutes.delete("/:id",ClienteController.deleteClient);

module.exports = clienteRoutes;