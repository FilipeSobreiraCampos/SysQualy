const Usuario = require('../models/Usuario');

class UsuarioController {
  static async listAllUsuario(req, res) {
    try {
      const users = await Usuario.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createUsuario(req, res) {
    try {
      const { nome, email } = req.body;
      const user = await Usuario.create({ nome, email });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsuarioController;
