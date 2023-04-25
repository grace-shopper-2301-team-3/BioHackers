const db = require('./db')
const Cart = require('./models/Cart')
const CartItem = require('./models/CartItem')
const Category = require('./models/Category')
const Product = require('./models/Product')
const User = require('./models/User')
const Order = require('./models/Order')
const OrderItem = require('./models/OrderItem')

//associations could go here!
Category.hasMany(Product)
Product.belongsTo(Category)

Cart.hasMany(CartItem, { as: 'cart-items' })
CartItem.belongsTo(Cart)

User.hasOne(Cart)
Cart.belongsTo(User)

CartItem.hasOne(Product)

OrderItem.belongsTo(Order, { as: "order"})
Order.belongsTo(User, { as: "users"})
User.hasMany(Order, {as: "orders"})

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart,
    CartItem,
    Order,
    OrderItem
  },
}
