const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const Cart = db.define('cart', {
  items: {
    type: Sequelize.ARRAY,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = Cart
