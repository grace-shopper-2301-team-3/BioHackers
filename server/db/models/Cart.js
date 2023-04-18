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

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  }
})

module.exports = Cart
