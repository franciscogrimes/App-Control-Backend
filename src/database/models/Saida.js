const { DataTypes } = require("sequelize");
const connection = require("../connection.js");

const Saida = connection.define('Saida', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // 🔗 Relacionamento com o produto
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos', // nome da tabela relacionada
      key: 'id'
    }
  },

  // 🔗 Relacionamento com o cliente
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clientes', // nome da tabela relacionada
      key: 'id'
    }
  },

  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }

}, {
  tableName: 'saidas',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Saida;
