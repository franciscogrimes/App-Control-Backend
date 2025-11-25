const Usuario = require('./Usuario.js');
const Cliente = require('./Cliente.js');
const Produto = require('./Produto.js');
const Entrada = require('./Entrada.js');
const Saida = require('./Saida.js');

Produto.hasMany(Entrada, {
  foreignKey: 'produto_id',
  as: 'entradas'
});
Entrada.belongsTo(Produto, {
  foreignKey: 'produto_id',
  as: 'produto'
});

Produto.hasMany(Saida, {
  foreignKey: 'produto_id',
  as: 'saidas'
});
Saida.belongsTo(Produto, {
  foreignKey: 'produto_id',
  as: 'produto'
});

Cliente.hasMany(Saida, {
  foreignKey: 'cliente_id',
  as: 'compras'
});
Saida.belongsTo(Cliente, {
  foreignKey: 'cliente_id',
  as: 'cliente'
});

module.exports = {
  Usuario,
  Cliente,
  Produto,
  Entrada,
  Saida
};