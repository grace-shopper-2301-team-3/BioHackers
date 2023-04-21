const router = require('express').Router()
const Cart = require('../db/models/Cart');
const User = require('../db/models/User')
const CartItem = require('../db/models/CartItem')

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.create({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
    });
    res.json({ message: 'Cart created successfully', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/user/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params
    console.log('req body is',req.params)
    const cart = await Cart.findOne({
      where: { userId },
      include: [{ model: User, attributes: ['firstName', 'lastName', 'email'] }]
    });

    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
    } else {
      res.json(cart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//another get maybe with item for itemid route

router.get('/items/:itemId', async (req, res, next) => {
  try {

  } catch (error) { next(error) }
})

router.post('/:cartId/items', async (req, res, next) => {
  try {
    const { cartId } = req.params;
    console.log(cartId)
    // const { productId, quantity, price } = req.body;

    // const cart = await Cart.findByPk(cartId);

    // if (!cart) {
    //   res.status(404).json({ message: 'Cart not found' });
    // } else {
    //   const cartItem = await CartItem.create({
    //     cartId,
    //     productId,
    //     quantity,
    //     price,
    //   });

    //   res.json({ message: 'Cart item created successfully', cartItem });
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router
