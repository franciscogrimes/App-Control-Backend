'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'João da Silva',
        email: 'joao@example.com',
        senha_hash: '123456',
        created_at: new Date(),
      },
      {
        nome: 'Maria Oliveira',
        email: 'maria@example.com',
        senha_hash: 'abcdef',
        created_at: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {})
  }
}
