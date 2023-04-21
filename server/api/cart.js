const router = require('express').Router()
const Cart = require('../db/models/Cart');
const User = require('../db/models/User')
const CartItem = require('../db/models/CartItem')

router.get('/', async (req, res, next) => {
  try {
    console.log('api/cart was hit')
    const cart = await CartItem.findAll()
    res.json(cart)
  } catch (error) { next(error) }
})

router.get('/:cartId', async (req, res, next) => {
  try {
    const cartInParams = req.params
    const cart = await Cart.findByPk(cartInParams.cartId)
    res.json(cart)
  } catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
  try {
    const { itemName, itemPrice, itemImageUrl } = req.body;
    const cartItem = await CartItem.create({ itemName, itemPrice, itemImageUrl });
    res.status(201).json(cartItem);
  } catch (error) { next(error) }
})

module.exports = router
