const Saida = require('../database/models/Saida.js');
const Produto = require('../database/models/Produto.js');
const Cliente = require('../database/models/Cliente.js');

class SaidaController {
  async getAllSaidas(req, res) {
    try {
      const saidas = await Saida.findAll({ include: ['produto', 'cliente'] });

      if (saidas.length === 0) {
        return res.status(404).json({ message: 'Nenhuma saída encontrada' });
      }

      return res.status(200).json(saidas);
    } catch (error) {
      console.error('Erro ao buscar saídas:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async postSaida(req, res) {
    try {
      const { produto_id, cliente_id, quantidade, valor } = req.body;

      if (!produto_id || !cliente_id || !quantidade || !valor) {
        return res.status(400).json({ message: 'produto_id, cliente_id, quantidade e valor são obrigatórios' });
      }

      const produto = await Produto.findByPk(produto_id);
      if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });

      const cliente = await Cliente.findByPk(cliente_id);
      if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });

      const saida = await Saida.create({ produto_id, cliente_id, quantidade, valor });

      return res.status(201).json({ message: 'Saída registrada com sucesso', saida });
    } catch (error) {
      console.error('Erro ao registrar saída:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async deleteSaida(req, res) {
    try {
      const { id } = req.params;
      const saida = await Saida.findByPk(id);

      if (!saida) {
        return res.status(404).json({ message: 'Saída não encontrada' });
      }

      await Saida.destroy({ where: { id } });
      return res.status(200).json({ message: 'Saída deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar saída:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

module.exports = new SaidaController();
