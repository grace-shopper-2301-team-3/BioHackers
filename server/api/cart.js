const router = require('express').Router()
const { models: { Cart }} = require('../db')
const { models: { User }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    console.log('req.body:' , req.body)
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router
