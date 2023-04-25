const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('cart', {
  OrderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = OrderItem
