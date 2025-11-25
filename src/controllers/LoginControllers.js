const { compareSync } = require("bcryptjs")
const { sign } = require("jsonwebtoken");
const Usuario = require('../database/models/Usuario.js');

class LoginController {
  async login(req, res){
    try {
      const dados = req.body
      
      if(!dados.email || !dados.password){
        return res.status(400).send({message: 'Email e senha são obrigatórios'})
      }

      const usuario = await Usuario.findOne({where: {email: dados.email}})
      if(!usuario){
        return res.status(404).send({message: 'Usuário não encontrado'})
      }

      const confereSenha = compareSync(dados.password, usuario.senha_hash)

      if(confereSenha === false){
        return res.status(401).json({message: "Senha incorreta"})
      }

      const token = sign(
        { id: usuario.id },
        process.env.JWT_SECRET,
        { expiresIn: '300m' }
      )

      return res.status(200).send({
        message: 'Login realizado com sucesso',
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email
        },
        token: token
      })
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).send({message: 'Erro interno do servidor'})
    }
  }
}

module.exports = new LoginController();