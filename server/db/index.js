//this is the access point for all things database related!

const db = require('./db')
const Category = require('./models/Category')
const Product = require('./models/Product')
const User = require('./models/User')

//associations could go here!
Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = {
  db,
  models: {
    User,
    Product,
    Category
  },
}
