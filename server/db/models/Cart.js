const Sequelize = require('sequelize')
const db = require('../db')

//think i want each user to have a 'cart' created for them.
//set up associations - cart has many cart items.

const Cart = db.define('cart', {
  cartItems: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false,
    defaultValue: [],
  },
  totalQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Cart
