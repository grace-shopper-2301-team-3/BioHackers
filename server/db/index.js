const db = require('./db')
const Cart = require('./models/Cart')
const CartItem = require('./models/CartItem')
const Category = require('./models/Category')
const Product = require('./models/Product')
const User = require('./models/User')

//associations could go here!
Category.hasMany(Product)
Product.belongsTo(Category)

Cart.hasMany(CartItem, { as: 'cart-items' })
CartItem.belongsTo(Cart)

User.hasOne(Cart)
Cart.belongsTo(User)

CartItem.belongsTo(Product)
Product.hasMany(CartItem)


module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart,
    CartItem,
  },
}
