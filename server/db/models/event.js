'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    img: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    people: DataTypes.INTEGER,
    place: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};