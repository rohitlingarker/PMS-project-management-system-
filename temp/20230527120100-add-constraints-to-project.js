'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Project name is required',
        },
        notNull: {
          msg: 'Project name is required',
        },
      },
    });

    // Add more constraints and validations if needed
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
      validate: {},
    });

    // Remove other constraints and validations if added
  },
};
