const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('cart', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  total: {
    type: Sequelize.NUMBER,
    allowNull: false,
  }
})

module.exports = Order
