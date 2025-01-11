'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    underscored: true,
    });
  return User;
};