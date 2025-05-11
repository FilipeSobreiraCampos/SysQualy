const Criterio = require('../models/Criterio');

class CriterioController {
  static async criar(req, res) {
    try {
      const { nome, descricao } = req.body;
      const novoCriterio = await Criterio.create({ nome, descricao });
      res.status(201).json(novoCriterio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarTodos(req, res) {
    try {
      const criterios = await Criterio.findAll();
      res.status(200).json(criterios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obterPorId(req, res) {
    try {
      const { id } = req.params;
      const criterio = await Criterio.findByPk(id);
      if (!criterio) {
        return res.status(404).json({ error: 'Criterio não encontrado' });
      }
      res.status(200).json(criterio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const criterio = await Criterio.findByPk(id);
      if (!criterio) {
        return res.status(404).json({ error: 'Criterio não encontrado' });
      }
      await criterio.update({ nome, descricao });
      res.status(200).json(criterio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      const criterio = await Criterio.findByPk(id);
      if (!criterio) {
        return res.status(404).json({ error: 'Criterio não encontrado' });
      }
      await criterio.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CriterioController;
