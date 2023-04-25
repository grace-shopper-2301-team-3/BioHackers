const Sequelize = require('sequelize')
const db = require('../db')

//cartitem is associated with one cart. based off of user

const CartItem = db.define('cartItem', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  // itemName: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // itemPrice: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  // itemImageUrl: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // }
})

module.exports = CartItem
