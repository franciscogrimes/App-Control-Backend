const {Router} = require('express');
const loginRoutes = require('./login.route.js');
const usuarioRoutes = require('./usuario.route.js');
const clienteRoutes = require('./cliente.route.js');
const produtoRoutes = require('./produto.route.js');
const entradaRoutes = require('./entradas.route.js');
const saidaRoutes = require('./saidas.route.js');

const routes = Router();

routes.use('/login', loginRoutes)
routes.use('/usuarios', usuarioRoutes)
routes.use('/clientes', clienteRoutes)
routes.use('/produtos', produtoRoutes)
routes.use('/entradas', entradaRoutes)
routes.use('/saidas', saidaRoutes)


module.exports = routes;