const { Sequelize } = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('SysQualy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
