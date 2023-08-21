'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@mail.ru',
        password: 'admin',
        is_activated: false,
        activation_link: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('users', null, {})
  }
};
