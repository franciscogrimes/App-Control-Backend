const express = require('express')
const connection = require('./database/connection.js')
const routes = require('./routes/routes.js') 
const APP_PORT = process.env.APP_PORT || 3000

class Server {
  constructor(server = express()) {
    this.middlewares(server)
    this.database()
    this.initializeServer(server)
  }

  middlewares(server) {
    server.use(express.json())
    server.use(routes) 

  }

  async database() {
    try {
      await connection.authenticate()
      console.log('✅ Conexão ao banco de dados estabelecida com sucesso.')
    } catch (error) {
      console.error('❌ Erro ao conectar ao banco de dados:', error)
    }
  }

  async initializeServer(server) {
    server.listen(APP_PORT, () => {
      console.log(`Servidor rodando na porta ${APP_PORT}`)
    })
  }
}

module.exports = { Server }
