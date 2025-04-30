const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Avaliacao = sequelize.define('Avaliacao', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  valor: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  software_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipo_avaliacao_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Avaliacao',
  timestamps: false
});

module.exports = Avaliacao;

/*
// src/models/Avaliacao.js (continuação
//const Usuario = require('./Usuario');
//const Software = require('./Software');
//const TipoAvaliacao = require('./TipoAvaliacao');

Avaliacao.belongsTo(Usuario, {
  foreignKey: 'usuario_id',
  onDelete: 'CASCADE',
});

Avaliacao.belongsTo(Software, {
  foreignKey: 'software_id',
  onDelete: 'CASCADE',
});

Avaliacao.belongsTo(TipoAvaliacao, {
  foreignKey: 'tipo_avaliacao_id',
  onDelete: 'CASCADE',
});*/
