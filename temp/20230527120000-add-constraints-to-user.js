'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Invalid email address',
        },
        notNull: {
          msg: 'Email is required',
        },
      },
    });

    // Add more constraints and validations if needed
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
      validate: {},
    });

    // Remove other constraints and validations if added
  },
};
