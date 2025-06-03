// src/controllers/AvaliacaoController.js
const Avaliacao = require('../models/Avaliacao');

class AvaliacaoController {
  static async listAllAvaliacao(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll();
      res.status(200).json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAvaliacaoById(req, res) {
    try {
      const { id } = req.params;
      const avaliacao = await Avaliacao.findByPk(id);
      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createAvaliacao(req, res) {
    try {
      const { descricao, valor, usuario_id, software_id, tipo_avaliacao_id } = req.body;
      const avaliacao = await Avaliacao.create({
        descricao,
        valor,
        usuario_id,
        software_id,
        tipo_avaliacao_id,
      });
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateAvaliacao(req, res) {
    try {
      const { id } = req.params;
      const { descricao, valor, usuario_id, software_id, tipo_avaliacao_id } = req.body;
      const avaliacao = await Avaliacao.findByPk(id);
      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
      await avaliacao.update({
        descricao,
        valor,
        usuario_id,
        software_id,
        tipo_avaliacao_id,
      });
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteAvaliacao(req, res) {
    try {
      const { id } = req.params;
      const avaliacao = await Avaliacao.findByPk(id);
      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
      await avaliacao.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AvaliacaoController;
