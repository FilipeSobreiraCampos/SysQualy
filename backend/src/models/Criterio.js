const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Criterio = sequelize.define('Criterio', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'Criterio',
  timestamps: false,
});

module.exports = Criterio;
