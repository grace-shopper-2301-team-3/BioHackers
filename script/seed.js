"use strict";

const { db } = require("../server/db");
const Product = require("../server/db/models/Product");
const Category = require("../server/db/models/Category");
const User = require("../server/db/models/User");
const Cart = require("../server/db/models/Cart");
const CartItem = require("../server/db/models/CartItem");
const Address = require("../server/db/models/Address");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  // Dummy Data created here to not break auth code.
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "0123",
      firstName: "Cody",
      lastName: "Codes",
      email: "codycodes@gmail.com",
      isAdmin: true,
      cartId: 1,
    }),
    User.create({
      username: "grace",
      password: "0456",
      firstName: "Grace",
      lastName: "Hopper",
      email: "gracehopper@gmail.com",
      isAdmin: true,
      cartId: 2,
    }),
    User.create({
      username: "murphy",
      password: "0789",
      firstName: "Murphy",
      lastName: "Murphs",
      email: "murphymurphs@gmail.com",
      isAdmin: false,
      cartId: 3,
    }),
    User.create({
      username: "bobby",
      password: "1011",
      firstName: "Bobby",
      lastName: "Bobs",
      email: "bobbybobs@gmail.com",
      cartId: 4,
    }),
    User.create({
      username: "jane",
      password: "1415",
      firstName: "Jane",
      lastName: "Jones",
      email: "janejones@gmail.com",
      isAdmin: false,
      cartId: 5,
    }),
  ]);

  const address = await Promise.all([
    Address.create({
      userId: 1, 
      addressLine1: "123 Main St", 
      addressLine2: "Apt 2B", 
      city: "Anytown", 
      state: "NY", 
      zipcode: "12345"
    }),
    Address.create({
      userId: 2, 
      addressLine1: "456 Broadway", 
      addressLine2: "Floor 5", 
      city: "New York", 
      state: "NY", 
      zipcode: "10013"
    }),
    Address.create({
      userId: 3, 
      addressLine1: "789 Oak St", 
      addressLine2: "", 
      city: "Smallville", 
      state: "CA", 
      zipcode: "90210"
    }),
    Address.create({
      userId: 4, 
      addressLine1: "10 Elm St", 
      addressLine2: "", 
      city: "Boston", 
      state: "MA", 
      zipcode: "02108"
    }),
    Address.create({
      userId: 5, 
      addressLine1: "20 Beacon St", 
      addressLine2: "Apt 3C", 
      city: "Boston", 
      state: "MA", 
      zipcode: "02108"})
    ])

  const carts = await Promise.all([
    Cart.create({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      userId: 1
    }),
    Cart.create({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      userId: 2
    }),
    Cart.create({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      userId: 3
    }),
    Cart.create({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      userId: 4
    }),
    Cart.create({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      userId: 5
    }),
  ])

  const categories = await Promise.all([
    Category.create({
      name: "Neural Augments",
      imageUrl:
        "https://assets.newatlas.com/dims4/default/c478776/2147483647/strip/true/crop/1999x1333+0+0/resize/720x480!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fe7%2F0b%2F5c982a3d445e99e3841fbea58ce2%2Fdepositphotos-205044790-l-2015.jpg",
      description:
        "Devices implanted in the brain to enhance performance and living experience for users.",
      categoryId: 1,
    }),
    Category.create({
      name: "Physical Augments",
      imageUrl:
        "https://assets.iflscience.com/assets/articleNo/67765/aImg/66111/transhumanism-o.webp",
      description:
        "Devices worn by user or infused in muscularskeletal system to enhance physical attributes.",
      categoryId: 2,
    }),
    Category.create({
      name: "Supplements",
      imageUrl:
        "https://img.theepochtimes.com/assets/uploads/2021/02/22/digital-pills.jpg",
      description:
        "Consumables taken on a regular schedule to reach new heights of human performance.",
      categoryId: 3,
    }),
  ]);

  // Creating products
  const products = await Promise.all([
    Product.create({
      productName: "Subject Mastery Implant",
      productPrice: 50000,
      imageUrl:
        "https://t4.ftcdn.net/jpg/05/46/00/47/360_F_546004711_mhXwat1NdyNvEhPDEigFH11YRPndCUvj.jpg",
      description:
        "This chip would augment your knowledge on the selected subject and turn you into an expert in the field of your choice.",
      categoryId: 1,
      inventory: 25,
    }),
    Product.create({
      productName: "Memory Enhancement Chip",
      productPrice: 25000,
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/21/70/86/360_F_321708677_B63bBdTVDWXghNqjnX4nlxOCdk0Bdzbe.jpg",
      description:
        "This chip enhances your memory by allowing you to store and recall information more efficiently. The chip also provides real-time feedback on your memory usage and give personalized tips on how to improve.",
      categoryId: 1,
      inventory: 30,
    }),
    Product.create({
      productName: "Neural Mood Regulator",
      productPrice: 35000,

      imageUrl:
        "https://singularityhub.com/wp-content/uploads/2019/04/brain-activity-3D-illustration-future-of-health-shutterstock-622433543-900x506.jpg",
      description:
        "A neural mood regulator implant will help users regulate their emotions by stimulating or inhibiting specific parts of the brain. The implant can be controlled via our mobile app, allowing you to adjust your mood as needed.",
      categoryId: 1,
      inventory: 15,
    }),
    Product.create({
      productName: "Telepathy Chip",
      productPrice: 60000,

      imageUrl:
        "https://media.licdn.com/dms/image/D4E12AQHrFJqUGME5ag/article-cover_image-shrink_720_1280/0/1676072349380?e=2147483647&v=beta&t=V5lPGb7ckFdWGfpZ24VPRJ5i_PIC9DFjfd2UrWTatcM",
      description:
        "This chip allows users to communicate with each other without ever having to speak a word. It works as a receiver and translates the transposed brain waves to nearby humans to  hear their thoughts and feelings in real-time. If another user is nearby, communication becomes two-way, allowing you to share thoughts, feelings, and ideas with the ultimate privacy.",
      categoryId: 1,
      inventory: 11,
    }),
    Product.create({
      productName: "Brain-Computer Interface",
      productPrice: 35000,
      imageUrl:
        "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9h19qtg0077qdopaggrl5gi/public",
      description:
        "A brain-computer interface (BCI) could allow people to control devices with their thoughts. This would be particularly useful for people with disabilities or those who are unable to use traditional input methods. For example, a BCI could allow someone to control a prosthetic limb or communicate with a computer using only their thoughts.",
      categoryId: 1,
      inventory: 10,
    }),
    Product.create({
      productName: "Bionic Exoskeleton",
      productPrice: 200000,
      imageUrl:
        "https://www.shutterstock.com/shutterstock/videos/1059528692/thumb/5.jpg?ip=x480",
      description:
        "This wearable device enhances the mobility of users and allows them to reach Olympic levels of athleticism. Allows users to achieve superhuman strength by augmenting their muscle fibers with synthetic fibers or nano-materials. Powered by advanced motors and sensors in combination with the latest neural network technology. Can also restore function to those who have lost mobility due to degenerative disease or traumatic injury.",
      categoryId: 2,
      inventory: 11,
    }),
    Product.create({
      productName: "Bionic Lens",
      productPrice: 20000,
      imageUrl:
        "https://www.techetron.com/wp-content/uploads/2015/05/bioniceye.jpg",
      description:
        "The Bionic Lens gives users superhuman vision capabilities. The implant works by connecting to the optic nerve and processing visual information more efficiently, granting the ability to see in low-light conditions, zoom in on objects from far away, or even see in different spectrums, like ultraviolet or infrared.",
      categoryId: 2,
      inventory: 8,
    }),
    Product.create({
      productName: "Regenerative Healing Implant",
      productPrice: 150000,

      imageUrl:
        "https://lh3.googleusercontent.com/LpYGTaHL6SG39CRkGqMeyrdmkIB4DkPCReEv4wl8mhYErV6t0XM-hOWHb3joSVP-_N-xrpYgv-10xj-vxOmIup9OOAx9ZlLZuvnwm5IgjjOoisBeF3lus3pVwrdKEQYbQFsfnohc",
      description:
        "The Regenerative Healing Implant allows users to recover from injuries rapidly. The implant stimulates collagen production, accelerating the natural healing processes, encouraging the growth of new tissue and reducing inflammation.",
      categoryId: 2,
      inventory: 11,
    }),
    Product.create({
      productName: "Rejuven-8",
      productPrice: 1000,
      imageUrl:
        "https://ca-times.brightspotcdn.com/dims4/default/115dac2/2147483647/strip/true/crop/948x533+0+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F23%2F05%2Ff7c308299c98ae1a801e8f0e3862%2Fla-1527199382-ihe5nyq8fi-snap-image",
      description:
        "These supplements guarantee a slowing or complete reversal of the aging process by repairing or regenerating cells and tissues, extending lifespan, and improving overall health while getting to old age. Contains resveratrol, NAD+ precursors, and antioxidants like vitamin C and E.",
      categoryId: 3,
      inventory: 20,
    }),
    Product.create({
      productName: "MorpheuX",
      productPrice: 3000,
      imageUrl: "https://media.istockphoto.com/id/989941230/vector/concept-of-health-care-technology-graphic-of-realistic-transparent-pill-with-abstract.jpg?s=612x612&w=0&k=20&c=3Pe9xihVbb55zXxUdG7YgbdFJ928bRzQuVFIFXbyr8s=",
      description:
        "These supplements improve the quality and reduce the duration of sleep, so you can spend more hours awake and improve overall health and well-being.",
      categoryId: 3,
      inventory: 11,
    }),
    Product.create({
      productName: "Immune Booster",
      productPrice: 110,
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/015/649/135/non_2x/abstract-circle-digital-dna-and-pills-concept-dna-or-ana-cell-therapy-modern-medical-treatment-on-background-banner-futuristic-medical-modern-vector.jpg",
      description:
        "A supplement designed to boost the immune system could help prevent illness and promote overall health. Contain vitamin C, zinc, and echinacea.",
      categoryId: 3,
      inventory: 15,
    }),
    Product.create({
      productName: "Limitless",
      productPrice: 1250,
      imageUrl:
        "https://media.istockphoto.com/id/878255366/vector/vector-medicine-pill-polygonal-vector-cylinder.jpg?s=612x612&w=0&k=20&c=hCsexb26jCCev54g0s0yv-e-cMOt-s4awUTjwUMa92Q=",
      description:
        "These supplements improve long-term and short-term memory, recall speed, and learning abilities. Contains racetams, choline, and caffeine.",
      categoryId: 3,
      inventory: 14,
    }),
    Product.create({
      productName: "Synergize",
      productPrice: 3000,
      imageUrl:
        "https://ychef.files.bbci.co.uk/976x549/p01n87fj.jpg",
      description:
        "These supplements improve mood, reduce stress and anxiety, and help alleviate symptoms of mental health disorders such as depression and anxiety throught synapctic actiavtion of key neurotransmitters, such as serotonin and dopamine.",
      categoryId: 3,
      inventory: 20,
    }),
  ]);


  console.log(`seeded ${users.length} products`);
  console.log(`seeded ${address.length} addresses`)
  console.log(`seeded ${products.length} products`);
  console.log(`seeded ${categories.length} categories`);
  console.log(`seeded ${carts.length} carts`)
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/

if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
