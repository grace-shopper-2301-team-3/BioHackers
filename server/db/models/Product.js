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
  productId: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull:false
  }
});

module.exports = Product;
