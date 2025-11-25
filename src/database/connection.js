const { Sequelize } = require('sequelize');
const db_config = require('../config/database.config')

const connection = new Sequelize(db_config)

module.exports = connection;