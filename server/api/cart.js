const router = require('express').Router()
const { models: { Cart }} = require('../db')
const { models: { User }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    console.log('cart.js api / req.body', req.body)
    res.json(req.body)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router
