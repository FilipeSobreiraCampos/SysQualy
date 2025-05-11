const Subcriterio = require('../models/Subcriterio');

class SubcriterioController {
  static async criar(req, res) {
    try {
      const { nome, nota_total, criterio_id } = req.body;
      const novoSubcriterio = await Subcriterio.create({ nome, nota_total, criterio_id });
      res.status(201).json(novoSubcriterio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarTodos(req, res) {
    try {
      const subcriterios = await Subcriterio.findAll();
      res.status(200).json(subcriterios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obterPorId(req, res) {
    try {
      const { id } = req.params;
      const subcriterio = await Subcriterio.findByPk(id);
      if (!subcriterio) {
        return res.status(404).json({ error: 'Subcriterio não encontrado' });
      }
      res.status(200).json(subcriterio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, nota_total, criterio_id } = req.body;
      const subcriterio = await Subcriterio.findByPk(id);
      if (!subcriterio) {
        return res.status(404).json({ error: 'Subcriterio não encontrado' });
      }
      await subcriterio.update({ nome, nota_total, criterio_id });
      res.status(200).json(subcriterio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      const subcriterio = await Subcriterio.findByPk(id);
      if (!subcriterio) {
        return res.status(404).json({ error: 'Subcriterio não encontrado' });
      }
      await subcriterio.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SubcriterioController;
