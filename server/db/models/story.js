'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.belongsTo(models.User, {
         foreignKey: 'user_id',
      });
      }
  }
  Story.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    img: DataTypes.STRING,
    author:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};