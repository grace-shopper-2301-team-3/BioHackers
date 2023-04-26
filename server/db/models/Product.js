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
    defaultValue: "https://as2.ftcdn.net/v2/jpg/02/24/99/75/1000_F_224997504_aIS8SXE5a3xPXpmocraop3sDTjpg8lxY.jpg"
  },
  description: {
    type: Sequelize.TEXT
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: "0",
  }
});

module.exports = Product;
