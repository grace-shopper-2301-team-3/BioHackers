const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = Cart
