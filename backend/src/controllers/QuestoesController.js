const Questoes = require('../models/Questoes');

class QuestoesController {
  static async criarQuestao(req, res) {
    try {
      const { descricao, valor } = req.body;
      const questao = await Questoes.create({ descricao, valor });
      res.status(201).json(questao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarQuestoes(req, res) {
    try {
      const questoes = await Questoes.findAll();
      res.status(200).json(questoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obterQuestaoPorId(req, res) {
    try {
      const { id } = req.params;
      const questao = await Questoes.findByPk(id);

      if (!questao) {
        return res.status(404).json({ error: 'Questão não encontrada' });
      }

      res.status(200).json(questao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizarQuestao(req, res) {
    try {
      const { id } = req.params;
      const { descricao, valor } = req.body;

      const questao = await Questoes.findByPk(id);
      if (!questao) {
        return res.status(404).json({ error: 'Questão não encontrada' });
      }

      questao.descricao = descricao;
      questao.valor = valor;
      await questao.save();

      res.status(200).json(questao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletarQuestao(req, res) {
    try {
      const { id } = req.params;
      const questao = await Questoes.findByPk(id);

      if (!questao) {
        return res.status(404).json({ error: 'Questão não encontrada' });
      }

      await questao.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = QuestoesController;
