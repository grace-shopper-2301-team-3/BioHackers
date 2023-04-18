const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  productPrice: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  imageUrl: {
    allowNull: false,
    type: Sequelize.STRING,
    defaultValue: "default"
  },
  productId: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
