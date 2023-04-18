'use strict'

const {db} = require('../server/db')
const Product = require('../server/db/models/Product')
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating products
  const products = await Promise.all([
    Product.create({
      productName: 'Subject Mastery Implant',
      productPrice: 50000,
      imageUrl: '',
      productId: 1,
      description: 'This chip would augment your knowledge on the selected subject and turn you into an expert in the field of your choice.',
      category: 'Neural Augments'
    }),
    Product.create({ 
      productName: 'Memory Enhancement Chip',
      productPrice: 25000,
      imageUrl: '',
      productId: 2,
      description: 'This chip enhances your memory by allowing you to store and recall information more efficiently. The chip also provides real-time feedback on your memory usage and give personalized tips on how to improve.',
      category: 'Neural Augments'
  }),
    Product.create({ 
      productName: 'Neural Mood Regulator',
      productPrice: 35000,
      imageUrl: '',
      productId: 3,
      description: 'A neural mood regulator implant will help users regulate their emotions by stimulating or inhibiting specific parts of the brain. The implant can be controlled via our mobile app, allowing you to adjust your mood as needed.',
      category: 'Neural Augments'
    }),
    Product.create({ 
      productName: 'Telepathy Chip',
      productPrice: 60000,
      imageUrl: '',
      productId: 4,
      description: 'This chip allows users to communicate with each other without ever having to speak a word. It works as a receiver and translates the transposed brain waves to nearby humans to  hear their thoughts and feelings in real-time. If another user is nearby, communication becomes two-way, allowing you to share thoughts, feelings, and ideas with the ultimate privacy.',
      category: 'Neural Augments'
    }),
    Product.create({ 
      productName: 'Brain-Computer Interface',
      productPrice: 35000,
      imageUrl: '',
      productId: 5,
      description: 'A brain-computer interface (BCI) could allow people to control devices with their thoughts. This would be particularly useful for people with disabilities or those who are unable to use traditional input methods. For example, a BCI could allow someone to control a prosthetic limb or communicate with a computer using only their thoughts.',
      category: 'Neural Augments'
    }),
    Product.create({ 
      productName: 'Bionic Exoskeleton',
      productPrice: 200000,
      imageUrl: '',
      productId: 6,
      description: 'This wearable device enhances the mobility of users and allows them to reach Olympic levels of athleticism. Allows users to achieve superhuman strength by augmenting their muscle fibers with synthetic fibers or nano-materials. Powered by advanced motors and sensors in combination with the latest neural network technology. Can also restore function to those who have lost mobility due to degenerative disease or traumatic injury.',
      category: 'Physical Augments'
    }),
    Product.create({ 
      productName: 'Bionic Lens',
      productPrice: 20000,
      imageUrl: '',
      productId: 7,
      description: 'The Bionic Lens gives users superhuman vision capabilities. The implant works by connecting to the optic nerve and processing visual information more efficiently, granting the ability to see in low-light conditions, zoom in on objects from far away, or even see in different spectrums, like ultraviolet or infrared.',
      category: 'Physical Augments' 
    }),
    Product.create({ 
      productName: 'Regenerative Healing Implant',
      productPrice: 150000,
      imageUrl: '',
      productId: 8,
      description: 'The Regenerative Healing Implant allows users to recover from injuries rapidly. The implant stimulates collagen production, accelerating the natural healing processes, encouraging the growth of new tissue and reducing inflammation.',
      category: 'Physical Augments'
    }),
    Product.create({ 
      productName: 'Rejuven-8',
      productPrice: 1000,
      imageUrl: '',
      productId: 9,
      description: 'These supplements guarantee a slowing or complete reversal of the aging process by repairing or regenerating cells and tissues, extending lifespan, and improving overall health while getting to old age. Contains resveratrol, NAD+ precursors, and antioxidants like vitamin C and E.',
      category: 'Supplements' 
    }),
    Product.create({ 
      productName: 'MorpheuX',
      productPrice: 3000,
      imageUrl: '',
      productId: 10,
      description: 'These supplements improve the quality and reduce the duration of sleep, so you can spend more hours awake and improve overall health and well-being.',
      category: 'Supplements' 
    }),
    Product.create({ 
      productName: 'Immune Booster',
      productPrice: 110,
      imageUrl: '',
      productId: 11,
      description: 'A supplement designed to boost the immune system could help prevent illness and promote overall health. Contain vitamin C, zinc, and echinacea.',
      category: 'Supplements' 
    }),
    Product.create({ 
      productName: 'Limitless',
      productPrice: 1250,
      imageUrl: '',
      productId: 12,
      description: 'These supplements improve long-term and short-term memory, recall speed, and learning abilities. Contains racetams, choline, and caffeine.',
      category: 'Supplements' 
    }),
    Product.create({ 
      productName: 'Synergize',
      productPrice: 3000,
      imageUrl: '',
      productId: 13,
      description: 'These supplements improve mood, reduce stress and anxiety, and help alleviate symptoms of mental health disorders such as depression and anxiety throught synapctic actiavtion of key neurotransmitters, such as serotonin and dopamine.',
      category: 'Supplements' 
    }),
  ])

  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
  return {
    products: {
      cody: products[0],
      murphy: products[1]
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
