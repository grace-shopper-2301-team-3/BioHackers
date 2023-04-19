const router = require('express').Router()
const { models: { Cart }} = require('../db')
module.exports = router

router.get('/cart', async (req, res, next) => {
  try {
    const cart = await Cart.findAll()
    res.json(cart)
  }
  catch (err) { next(err) }
})
