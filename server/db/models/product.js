'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Product.init({
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    img: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
