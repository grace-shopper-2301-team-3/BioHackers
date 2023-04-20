//this is the access point for all things database related!

const db = require('./db')
const Cart = require('./models/Cart')
const CartItem = require('./models/CartItem')
const Category = require('./models/Category')
const Product = require('./models/Product')
const User = require('./models/User')

//associations could go here!
// Product.belongsTo(Category)
// Category.hasMany(Product)

Cart.hasMany(CartItem, { as: 'cart-items' })
CartItem.belongsTo(Cart)


module.exports = {
  db,
  models: {
    User,
    Product,
    Category
  },
}
