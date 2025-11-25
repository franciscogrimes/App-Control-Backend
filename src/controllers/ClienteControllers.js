const Cliente = require('../database/models/Cliente.js');
const { get } = require('../routes/usuario.route.js');

class ClienteController{
  async getAllClients(req, res) {
    try {
      const getClientes = await Cliente.findAll()
      if(getClientes.length === 0){
        return  res.status(404).json({message: 'Nenhum cliente encontrado'})
      }
      return res.status(200).json(getClientes)
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  }
  async postClient(req, res) {
    try{
      const dados = req.body

      if(!dados.nome || !dados.telefone || !dados.data_nascimento){
        return res.status(400).send({message: 'Nome, telefone e data de nascimento são obrigatórios'})
      }

      const existingClient = await Cliente.findOne({where: {nome: dados.nome, telefone: dados.telefone}})
      if(existingClient){
        return res.status(409).send({message: 'Cliente já cadastrado'})
      }

      const insertClient = await Cliente.create(dados)

      return res.status(201).send({message: 'Cliente criado com sucesso', insertClient})
    }catch(error){
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  } 
  async deleteClient(req, res) {
    try{
      const id = req.params.id

      const client = await Cliente.findOne({where: {id}})
      if(!client){
        return res.status(404).send({message: 'Cliente não encontrado'})
      }

      await Cliente.destroy({where: {id}});

      return res.status(200).send({message: 'Cliente deletado com sucesso'})
    }catch(error){
      console.error('Erro ao deletar usuário:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  } 

  async updateClient(req, res) {
    try{
      const id = req.params.id
      const dados = req.body
      
      const client = await Cliente.findOne({where: {id}})
      if(!client){
        return res.status(404).send({message: 'Cliente não encontrado'})
      }

      await Cliente.update(dados, {where: {id}});

      return res.status(200).send({message: 'Cliente atualizado com sucesso'})  
    }
    catch(error){
      console.error('Erro ao atualizar usuário:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  }
}

module.exports = new ClienteController();