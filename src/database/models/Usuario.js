const { DataTypes } = require("sequelize");
const { hashSync } = require("bcryptjs"); 
const connection = require("../connection.js");

const Usuario = connection.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  senha_hash: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

Usuario.beforeSave((usuario) => {
  if (usuario.changed('senha_hash')) {
    usuario.senha_hash = hashSync(usuario.senha_hash, 10)
  }
})

module.exports = Usuario;