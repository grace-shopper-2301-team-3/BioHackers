const db = require("./db");
const Cart = require("./models/Cart");
const CartItem = require("./models/CartItem");
const Category = require("./models/Category");
const Product = require("./models/Product");
const User = require("./models/User");
const Address = require("./models/Address")

//associations could go here!
Category.hasMany(Product);
Product.belongsTo(Category);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.hasMany(CartItem, { as: "cart-items" });
CartItem.belongsTo(Cart);
CartItem.belongsTo(Product);
Product.hasMany(CartItem);
User.hasMany(Address, { as: 'addresses' });
Address.belongsTo(User, { as: 'user' });

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart,
    CartItem,
    Address
  },
};
