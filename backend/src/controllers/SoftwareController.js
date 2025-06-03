// src/controllers/SoftwareController.js
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

  // Obtém um software por ID
  static async getSoftwareById(req, res) {
    try {
      const { id } = req.params;
      const software = await Software.findByPk(id);
      if (software) {
        res.status(200).json(software);
      } else {
        res.status(404).json({ message: 'Software não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualiza um software existente
  static async updateSoftware(req, res) {
    try {
      const { id } = req.params;
      const { nome, versao, descricao } = req.body;
      const software = await Software.findByPk(id);
      if (software) {
        software.nome = nome;
        software.versao = versao;
        software.descricao = descricao;
        await software.save();
        res.status(200).json(software);
      } else {
        res.status(404).json({ message: 'Software não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Deleta um software
  static async deleteSoftware(req, res) {
    try {
      const { id } = req.params;
      const software = await Software.findByPk(id);
      if (software) {
        await software.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Software não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SoftwareController;
