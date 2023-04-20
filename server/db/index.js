//this is the access point for all things database related!

const db = require('./db')
const Category = require('./models/Category')
const Product = require('./models/Product')
const User = require('./models/User')
const AdminType = require('./models/AdminType')
const AdminUser = require('./models/AdminUser')

//associations could go here!
// Product.belongsTo(Category)
// Category.hasMany(Product)

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
// Ref: "admin_type"."id" - "admin_user"."type_id"
// Ref: "users"."admin_id" - "admin_user"."id"

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    AdminType,
    AdminUser
  },
}
