const Entrada = require('../database/models/Entrada.js');
const Produto = require('../database/models/Produto.js');

class EntradaController {
  async getAllEntradas(req, res) {
    try {
      const entradas = await Entrada.findAll({ include: ['produto'] });

      if (entradas.length === 0) {
        return res.status(404).json({ message: 'Nenhuma entrada encontrada' });
      }

      return res.status(200).json(entradas);
    } catch (error) {
      console.error('Erro ao buscar entradas:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async postEntrada(req, res) {
    try {
      const { produto_id, quantidade, valor, fornecedor } = req.body;

      if (!produto_id || !quantidade) {
        return res.status(400).json({ message: 'produto_id e quantidade são obrigatórios' });
      }

      const produto = await Produto.findByPk(produto_id);
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      const entrada = await Entrada.create({ produto_id, quantidade, valor, fornecedor });
      return res.status(201).json({ message: 'Entrada registrada com sucesso', entrada });
    } catch (error) {
      console.error('Erro ao registrar entrada:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async deleteEntrada(req, res) {
    try {
      const { id } = req.params;
      const entrada = await Entrada.findByPk(id);

      if (!entrada) {
        return res.status(404).json({ message: 'Entrada não encontrada' });
      }

      await Entrada.destroy({ where: { id } });
      return res.status(200).json({ message: 'Entrada deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar entrada:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

module.exports = new EntradaController();
