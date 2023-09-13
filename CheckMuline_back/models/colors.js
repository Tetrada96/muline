'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colors extends Model {
    static associate(models) {
    }
  }
  Colors.init({
    color: DataTypes.STRING,
    name_color_eng: DataTypes.STRING,
    name: DataTypes.STRING,
    name_color_ru: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colors',
    tableName: 'colors',
    timestamps: false,
    underscored: true,
  });
  return Colors;
};