const { Router } = require('express');
const LoginController = require('../controllers/LoginControllers.js');

const loginRoutes = Router();

loginRoutes.post('/', LoginController.login);

module.exports = loginRoutes;