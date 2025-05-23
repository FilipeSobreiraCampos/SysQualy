const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoAvaliacao = sequelize.define('TipoAvaliacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },  
}, {
  tableName: 'Tipo_Avaliacao',
  timestamps: false,
});

module.exports = TipoAvaliacao;
