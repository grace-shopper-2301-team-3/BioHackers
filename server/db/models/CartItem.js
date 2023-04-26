const Sequelize = require("sequelize");
const db = require("../db");

//cartitem is associated with one cart. based off of user

const CartItem = db.define("cartItem", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = CartItem;
