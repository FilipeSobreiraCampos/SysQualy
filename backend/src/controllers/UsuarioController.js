// src/controllers/UsuarioController.js
const Usuario = require('../models/Usuario');

class UsuarioController {
  // Listar todos os usuários
  static async listAllUsuario(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Criar um novo usuário
  static async createUsuario(req, res) {
    try {
      const { nome, email } = req.body;
      const usuario = await Usuario.create({ nome, email });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obter um usuário por ID
  static async getUsuarioById(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualizar um usuário
  static async updateUsuario(req, res) {
    try {
      const { nome, email } = req.body;
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      usuario.nome = nome;
      usuario.email = email;
      await usuario.save();
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Deletar um usuário
  static async deleteUsuario(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      await usuario.destroy();
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsuarioController;
