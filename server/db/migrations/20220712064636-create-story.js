'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stories', {
      id: {
        allowNull: false,
        notEmpty: true, 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        notEmpty: true, 
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        notEmpty: true, 
        type: Sequelize.TEXT
      },
      user_id: {
        allowNull: false,
     
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'Users',
          },
      key: 'id',
      },
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author:{
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stories');
  }
};