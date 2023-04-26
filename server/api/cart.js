const router = require("express").Router();
const Cart = require("../db/models/Cart");
const User = require("../db/models/User");
const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const { isNumber } = require("@mui/x-data-grid/internals");
const { Op } = require('sequelize')
const jwt = require('jsonwebtoken')
const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// function generateToken(user) {
//   const payload = { id: user.id, username: user.username };
//   const token = jwt.sign(payload, secretKey);
//   return token;
// }

// Add authentication middleware
// const requireToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     console.log({token})
//     if (!token) {
//       return res.status(401).json({ error: 'Missing authorization token' });
//     }
//     const user = await User.findByToken(token);
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid authorization token' });
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

function generateGuestId() {
  const id = Math.random().toString(36).substring(2, 9);
  localStorage.setItem('guestId', id);
  return id;
}

router.get("/", async (req, res, next) => {
  try {
    console.log('token:', req.headers.authorization)
    const currentUser = await User.findByToken(req.headers.authorization);
    // const currentUser = await User.findOne({ where: {id: 1}})
    // console.log('req.user', req.user)
    const [cart] = await Cart.findOrCreate({
      where: { userId: currentUser.id },
      defaults: {
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0
      }
    });
    const cartItems = await CartItem.findAll({
      where: {
        quantity: {
          [Op.gt]: 0
        },
        cartId: cart.id
      },
      include: {
        model: Product
      }
    });
    console.log('curruser cartitems:', cartItems)
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
    console.log('first line============')
      const { quantity, productId, numToChangeBy } = req.body;
      const currentUser = await User.findByToken(req.headers.authorization);
      const [cart] = await Cart.findOrCreate({
        where: { userId: currentUser.id },
        defaults: {
          cartItems: [],
          totalQuantity: 0,
          totalPrice: 0
        }
      });



      await cart.save()
      const [cartItem] = await CartItem.findOrCreate({
        where: { productId, cartId: cart.id },
        defaults: {quantity: 0},
      });
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
