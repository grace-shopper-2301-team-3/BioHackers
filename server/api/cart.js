const router = require("express").Router();
const Cart = require("../db/models/Cart");
const User = require("../db/models/User");
const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const { isNumber } = require("@mui/x-data-grid/internals");
const { Op } = require('sequelize')

// Add authentication middleware
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

router.get("/", async (req, res, next) => {
  try {
    console.log('token:', req.headers.authorization)
    // const currentUser = await User.findByToken(req.headers.authorization);
    const currentUser = await User.findOne({ where: {id: 1}})
    const cart = await Cart.findOrCreate({ where: { id: currentUser.id } });
    const cartItems = await CartItem.findAll({
      where: {
        quantity: {
          [Op.gt]: 0
        }
      },
      include: {
        model: Product
      }
    });
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
});

router.get("/:cartId", async (req, res, next) => {
  try {
    const cartInParams = req.params;
    const cart = await Cart.findByPk(cartInParams.cartId);
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

router.delete("/:cartItemId", async (req, res, next) => {
  try {
    console.log('endpoint' ,req.params.cartItemId)
    const cartItem = await CartItem.findByPk(req.params.cartItemId);
    await cartItem.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// api/cart/number
router.patch("/", async (req, res, next) => {
  try {
      const { quantity, productId, numToChangeBy } = req.body;
      // const currentUser = await User.findByToken(req.headers.authorization);
      const currentUser = await User.findOne({ where: {id: 1}})
      const [cart] = await Cart.findOrCreate({ where: { userId: currentUser.id } });
      await cart.save()
      const [cartItem] = await CartItem.findOrCreate({
        where: { productId, cartId: cart.id },
        defaults: {quantity: 0},
      });
      console.log('cartItem:', cartItem)
      if (isNumber(quantity)) {
        cartItem.quantity = quantity
        if (cartItem.quantity === 0) {
          console.log('quantity is 0')
          cartItem.destroy()
        }
      }
      else {
        cartItem.quantity += numToChangeBy
      }

    await cartItem.save()
    cart.cartItems.push(cartItem)
    console.log('cart items in cart:', cart.cartItems)
    await cart.save()
    res.status(201).json(cartItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

/**
 *  PATCH cart/:productId
 *  {}
 */
