const express = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController.js');
const UserController = require('../controllers/UsuarioController.js');
const SoftwareController = require('../controllers/SoftwareController.js');
const TipoAvaliacaoController = require('../controllers/TipoAvaliacaoController.js');


const routes = (app) => {
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    // Routes for Avaliacao
    app.get('/avaliacao', AvaliacaoController.listAllAvaliacao); // List all ratings
    app.post('/avaliacao', AvaliacaoController.createAvaliacao); // Create a new rating

    // Routes for Usuario
    app.get('/usuario', UserController.listAllUsuario); // List all users
    app.post('/usuario', UserController.createUsuario); // Create a new user

    //Routes for Software
    app.get('/software', SoftwareController.listAllSoftware);
    app.post('/software', SoftwareController.createSoftware);

    //Routes for TipoAvaliacao
    app.get('/tipo-avaliacao', TipoAvaliacaoController.listAllTipoAvaliacao);
    app.post('/tipo-avaliacao', TipoAvaliacaoController.createTipoAvaliacao);
};

module.exports = routes;
