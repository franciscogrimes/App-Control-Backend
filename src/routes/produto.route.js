const ProdutoController = require('../controllers/ProdutoControllers.js');
const { Router } = require('express');

const produtoRoutes = Router();

produtoRoutes.get("/",ProdutoController.getAllProducts);
produtoRoutes.post("/",ProdutoController.postProduct);
produtoRoutes.put("/:id",ProdutoController.updateProduct);
produtoRoutes.delete("/:id",ProdutoController.deleteProduct);

module.exports = produtoRoutes;