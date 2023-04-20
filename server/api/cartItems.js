const router = require('express').Router()
const { models: { Cart, CartItems }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const cartItems = await CartItems.findAll()
    res.json(cartItems)
  } catch (error) { next(error) }
})

router.get('/:cartItemId', async (req, res, next) => {
  try {
    const cartItem = await CartItems.findByPk(req.params.cartItemId)
    res.json(cartItem)
  } catch (error) { next(error) }
})

module.exports = router
