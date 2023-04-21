//this is the access point for all things database related!

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

CartItem.hasOne(Product)

// These relationships were automatically built from our dbdiagram.io
// Ref: "product_category"."id" < "product"."category_id"
// Ref: "product_inventory"."id" < "product"."inventory_id"
// Ref: "users"."id" < "user_address"."user_id"
// Ref: "users"."id" < "user_payment"."user_id"
// Ref: "cart_item"."product_id" - "product"."id"
// Ref: "cart"."user_id" > "users"."id"
// Ref: "cart_item"."session_id" > "cart"."id"
// Ref: "order_items"."order_id" > "order_details"."id"
// Ref: "users"."id" < "order_details"."user_id"
// Ref: "order_details"."payment_id" - "payment_details"."id"

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Cart,
    CartItem
  },
}
