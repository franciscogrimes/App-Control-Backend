const Produto = require('../database/models/Produto.js');

class ProdutoController{
  async getAllProducts(req, res) {
    try {
      const getProdutos = await Cliente.findAll()
      if(getProdutos.length === 0){
        return  res.status(404).json({message: 'Nenhum produto encontrado'})
      }
      return res.status(200).json(getProdutos)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  }
  async postProduct(req, res) {
    try{
      const dados = req.body

      if(!dados.nome || !dados.valor){
        return res.status(400).send({message: 'Nome e valor são obrigatórios'})
      }

      const existingProduct = await Produto.findOne({where: {nome: dados.nome, valor: dados.valor}})
      if(existingProduct){
        return res.status(409).send({message: 'Produto já cadastrado'})
      }

      const insertProduct = await Produto.create(dados)

      return res.status(201).send({message: 'Produto criado com sucesso', insertProduct})
    }catch(error){
      console.error('Erro ao criar produto:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  } 
  async deleteProduct(req, res) {
    try{
      const id = req.params.id

      const Product = await Product.findOne({where: {id}})
      if(!Product){
        return res.status(404).send({message: 'Produto não encontrado'})
      }

      await Product.destroy({where: {id}});

      return res.status(200).send({message: 'Produto deletado com sucesso'})
    }catch(error){
      console.error('Erro ao deletar produto:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  } 

  async updateProduct(req, res) {
    try{
      const id = req.params.id
      const dados = req.body
      
      const Product = await Product.findOne({where: {id}})
      if(!Product){
        return res.status(404).send({message: 'Produto não encontrado'})
      }

      await Product.update(dados, {where: {id}});

      return res.status(200).send({message: 'Produto atualizado com sucesso'})  
    }
    catch(error){
      console.error('Erro ao atualizar produto:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  }
}

module.exports = new ProdutoController();