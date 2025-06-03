const express = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController.js');
const UsuarioController = require('../controllers/UsuarioController.js');
const SoftwareController = require('../controllers/SoftwareController.js');
const QuestoesController = require('../controllers/QuestoesController.js');
const SubcriterioController = require('../controllers/SubcriterioController');
const CriterioController = require('../controllers/CriterioController');
const TipoAvaliacaoController = require('../controllers/TipoAvaliacaoController.js');


const routes = (app) => {
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    // Routes for Avaliacao
    app.get('/avaliacao', AvaliacaoController.listAllAvaliacao);
    app.get('/avaliacao/:id', AvaliacaoController.getAvaliacaoById);
    app.post('/avaliacao', AvaliacaoController.createAvaliacao);
    app.put('/avaliacao/:id', AvaliacaoController.updateAvaliacao);
    app.delete('/avaliacao/:id', AvaliacaoController.deleteAvaliacao);
    

    // Routes for Usuario    
    app.get('/usuario', UsuarioController.listAllUsuario);
    app.post('/usuario', UsuarioController.createUsuario);
    app.get('/usuario/:id', UsuarioController.getUsuarioById);
    app.put('/usuario/:id', UsuarioController.updateUsuario);
    app.delete('/usuario/:id', UsuarioController.deleteUsuario);

    //Routes for Software
    app.get('/software', SoftwareController.listAllSoftware);
    app.get('/software/:id', SoftwareController.getSoftwareById);
    app.post('/software', SoftwareController.createSoftware);
    app.put('/software/:id', SoftwareController.updateSoftware);
    app.delete('/software/:id', SoftwareController.deleteSoftware);

    //Routes for TipoAvaliacao
    app.get('/tipo-avaliacao', TipoAvaliacaoController.listAllTipoAvaliacao);             
    app.get('/tipo-avaliacao/:id', TipoAvaliacaoController.getTipoAvaliacaoById);         
    app.post('/tipo-avaliacao', TipoAvaliacaoController.createTipoAvaliacao);            
    app.put('/tipo-avaliacao/:id', TipoAvaliacaoController.updateTipoAvaliacao);        
    app.delete('/tipo-avaliacao/:id', TipoAvaliacaoController.deleteTipoAvaliacao);     

    // Rotas para Questões
    app.post('/questoes', QuestoesController.criarQuestao);
    app.get('/questoes', QuestoesController.listarQuestoes);
    app.get('/questoes/:id', QuestoesController.obterQuestaoPorId);
    app.put('/questoes/:id', QuestoesController.atualizarQuestao);
    app.delete('/questoes/:id', QuestoesController.deletarQuestao);

    // Rotas para Criterio
    app.post('/criterio', CriterioController.criar);
    app.get('/criterio', CriterioController.listarTodos);
    app.get('/criterio/:id', CriterioController.obterPorId);
    app.put('/criterio/:id', CriterioController.atualizar);
    app.delete('/criterio/:id', CriterioController.deletar);

    // Rotas para Subcriterio
    app.post('/subcriterio', SubcriterioController.criar);
    app.get('/subcriterio', SubcriterioController.listarTodos);
    app.get('/subcriterio/:id', SubcriterioController.obterPorId);
    app.put('/subcriterio/:id', SubcriterioController.atualizar);
    app.delete('/subcriterio/:id', SubcriterioController.deletar);
};

module.exports = routes;
