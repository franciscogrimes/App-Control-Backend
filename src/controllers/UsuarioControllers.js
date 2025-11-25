const Usuario = require('../database/models/Usuario.js');

class UsuarioController {
  async getAllUsers(req, res) {
    try{
      const usuarios = await Usuario.findAll()
      return res.status(200).json(usuarios)
    }catch(error){
      console.error('Erro ao buscar usuários:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  } 
  async postUser(req, res) {
    try{
      const dados = req.body

      if(!dados.nome || !dados.email || !dados.senha_hash){
        return res.status(400).send({message: 'Nome, email e senha são obrigatórios'})
      }

      const getAllUsers = await Usuario.findAll({where: {email: dados.email}})
      if(getAllUsers.length > 0){
        return res.status(409).send({message: 'Email já cadastrado'})
      }

      const insertUser = await Usuario.create(dados)

      return res.status(201).send({message: 'Usuário criado com sucesso', insertUser})
    }catch(error){
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({message: 'Erro interno do servidor'})
    }
  } 
}

module.exports = new UsuarioController();