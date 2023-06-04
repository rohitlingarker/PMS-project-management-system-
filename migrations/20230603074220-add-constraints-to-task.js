'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Tasks', 'title', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Task title is required',
        },
        notNull: {
          msg: 'Task title is required',
        },
      },
    });

    // Add more constraints and validations if needed
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Tasks', 'title', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
      validate: {},
    });

    // Remove other constraints and validations if added
  },
};
