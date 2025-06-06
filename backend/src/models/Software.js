const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Software = sequelize.define('Software', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  versao: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'Software',
  timestamps: false,
});

module.exports = Software;
