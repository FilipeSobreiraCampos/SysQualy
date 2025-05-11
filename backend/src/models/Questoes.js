const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Questoes = sequelize.define('Questoes', {
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
}, {
  tableName: 'Questoes',
  timestamps: false,
});

module.exports = Questoes;
