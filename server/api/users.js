const router = require('express').Router()
const { models: {
  User
} } = require('../db')

// fetch all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// fetch single user
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// create user
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// update user
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (err) {
    next(err)
  }
})

// delete user
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err)
  }
})

module.exports = router
