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
    type: Sequelize.TEXT,
    defaultValue: "default"
  },
  description: {
    type: Sequelize.TEXT
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: "0",
  }
});

module.exports = Product;
