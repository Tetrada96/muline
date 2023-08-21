'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.colors = require("./colors.js")(sequelize, Sequelize);
db.user_color = require("./userColor.model.js")(sequelize, Sequelize);
db.token = require("./token.js")(sequelize, Sequelize, db);

db.users.belongsToMany(db.colors, {
  through: db.user_color,
  foreignKey: "user_id",
})
db.colors.belongsToMany(db.users, {
  through: db.user_color,
  foreignKey: "color_id",
})

db.users.hasMany(db.token, {foreignKey: 'userId'});
db.token.belongsTo(db.users, {foreignKey: 'userId'});

module.exports = db;
