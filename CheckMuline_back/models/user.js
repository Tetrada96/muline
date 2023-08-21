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
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    underscored: true,
    });
  return User;
};