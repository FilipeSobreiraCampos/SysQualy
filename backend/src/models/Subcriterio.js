const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subcriterio = sequelize.define('Subcriterio', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nota_total: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0,
  },
  criterio_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Criterio', // Nome da tabela referenciada
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'Subcriterio',
  timestamps: false,
});

module.exports = Subcriterio;
