const Software = require('../models/Software');

class SoftwareController {
  // Lista todos os softwares
  static async listAllSoftware(req, res) {
    try {
      const softwares = await Software.findAll();
      res.status(200).json(softwares);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Cria um novo software
  static async createSoftware(req, res) {
    try {
      const { nome, versao, descricao } = req.body;
      const novoSoftware = await Software.create({ nome, versao, descricao });
      res.status(201).json(novoSoftware);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SoftwareController;
