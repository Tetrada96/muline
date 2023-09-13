'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('colors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      name_color_eng: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      name_color_ru: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('colors');
  }
};