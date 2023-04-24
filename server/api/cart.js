const router = require('express').Router()
const Cart = require('../db/models/Cart');
const User = require('../db/models/User')
const CartItem = require('../db/models/CartItem')

router.get('/', async (req, res, next) => {
  try {
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

router.delete('/:cartItemId', async (req, res, next) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.cartItemId)
    await cartItem.destroy()
    res.sendStatus(204)
  } catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
  try {
    const { itemName, itemPrice, itemImageUrl } = req.body;
    const cartItem = await CartItem.create({ itemName, itemPrice, itemImageUrl });
    res.status(201).json(cartItem);
  } catch (error) { next(error) }
})

router.patch('/:cartItemId', async (req, res, next) => {
  try {
    const itemToUpdate = await CartItem.findByPk(req.params.cartItemId)
    console.log('cart api, req.params', req.params)
    itemToUpdate.quantity = req.body.quantity;
    await itemToUpdate.save();
    res.json(itemToUpdate.toJSON());
  //  res.json(quantity)
  } catch (error) { next(error) }
})

module.exports = router
