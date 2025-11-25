const { DataTypes } = require("sequelize");
const connection = require("../connection.js");

const Cliente = connection.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(20)
  },
  data_nascimento: {
    type: DataTypes.DATEONLY
  },
  valor_gasto_total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  }
}, {
  tableName: 'clientes',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Cliente;