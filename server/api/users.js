const router = require('express').Router()
const { models: {
  User
} } = require('../db')
const bcrypt = require('bcrypt')

// fetch all users - route works
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

// fetch single user - route works
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err)
  }
})

// create user
// router.post('/', async (req, res, next) => {
//   try {
//     const { username, password, firstName, lastName, email, isAdmin } = req.body;

//     //hash the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const newUser = await User.create({
//       username,
//       password: hashedPassword,
//       firstName,
//       lastName,
//       email,
//       isAdmin
//     });

//     res.json(newUser);

//   } catch (err) {
//     next(err)
//   }
// })


// update user
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(await user.update(req.body));
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
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
