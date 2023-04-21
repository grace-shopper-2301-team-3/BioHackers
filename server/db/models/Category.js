const Sequelize = require('sequelize');
const db = require('../db');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageUrl: {
    allowNull: false,
    type: Sequelize.STRING,
    defaultValue: "default"
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Category;
