'use strict'

const { db, models: { User } } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  // Dummy Data created here to not break auth code. 
  const users = await Promise.all([
    User.create({
      username: 'cody',
      password: '0123',
      firstName: 'Cody',
      lastName: 'Codes',
      email: 'codycodes@gmail.com',
      isAdmin: true,
    }),
    User.create({
      username: 'grace',
      password: '0456',
      firstName: 'Grace',
      lastName: 'Hopper',
      email: 'gracehopper@gmail.com',
      isAdmin: true,
    
    }),
    User.create({
      username: 'murphy',
      password: '0789',
      firstName: 'Murphy',
      lastName: 'Murphs',
      email: 'murphymurphs@gmail.com',
      isAdmin: false,
    }),
    User.create({
      username: 'bobby',
      password: '1011',
      firstName: 'Bobby',
      lastName: 'Bobs',
      email: 'bobbybobs@gmail.com',
    }), 
    User.create({
      username: 'jane',
      password: '1415',
      firstName: 'Jane',
      lastName: 'Jones',
      email: 'janejones@gmail.com',
      isAdmin: false,
    }),   
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
