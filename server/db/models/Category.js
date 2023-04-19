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
  id: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Category;
