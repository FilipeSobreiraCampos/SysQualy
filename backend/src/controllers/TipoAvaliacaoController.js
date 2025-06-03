// src/controllers/TipoAvaliacaoController.js
const TipoAvaliacao = require('../models/TipoAvaliacao');

class TipoAvaliacaoController {
  // Lista todos os tipos de avaliação
  static async listAllTipoAvaliacao(req, res) {
    try {
      const tipos = await TipoAvaliacao.findAll();
      res.status(200).json(tipos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Cria um novo tipo de avaliação
  static async createTipoAvaliacao(req, res) {
    try {
      const { tipo } = req.body;
      const novoTipo = await TipoAvaliacao.create({ tipo });
      res.status(201).json(novoTipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtém um tipo de avaliação por ID
  static async getTipoAvaliacaoById(req, res) {
    try {
      const { id } = req.params;
      const tipoAvaliacao = await TipoAvaliacao.findByPk(id);
      if (tipoAvaliacao) {
        res.status(200).json(tipoAvaliacao);
      } else {
        res.status(404).json({ message: 'Tipo de avaliação não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualiza um tipo de avaliação existente
  static async updateTipoAvaliacao(req, res) {
    try {
      const { id } = req.params;
      const { tipo } = req.body;
      const tipoAvaliacao = await TipoAvaliacao.findByPk(id);
      if (tipoAvaliacao) {
        tipoAvaliacao.tipo = tipo;
        await tipoAvaliacao.save();
        res.status(200).json(tipoAvaliacao);
      } else {
        res.status(404).json({ message: 'Tipo de avaliação não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Deleta um tipo de avaliação
  static async deleteTipoAvaliacao(req, res) {
    try {
      const { id } = req.params;
      const tipoAvaliacao = await TipoAvaliacao.findByPk(id);
      if (tipoAvaliacao) {
        await tipoAvaliacao.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Tipo de avaliação não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TipoAvaliacaoController;
