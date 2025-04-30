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
      const { tipo, atributo5 } = req.body;
      const novoTipo = await TipoAvaliacao.create({ tipo, atributo5 });
      res.status(201).json(novoTipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TipoAvaliacaoController;
