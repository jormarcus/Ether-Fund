'use strict'

const db = require('../server/db')
const {User, Fund} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'flurry@email.com', password: '123'}),
    User.create({email: 'jordan@email.com', password: '123'}),
    User.create({email: 'eric@email.com', password: '123'}),
  ]);

  const funds = await Promise.all([
    Fund.create({name: 'Toys for Flurry', amount: 200, category: 'Other', description: 'Flurry loves to play, but unfortunately she always destroys her toys. Please help Flurry by donating so we can give her more toys.', imageUrl: 'https://i.imgur.com/gVMtxib.jpg'}),

    Fund.create({name: 'Training for Flurry', amount: 500, category: 'Education & Learning', description: 'Flurry knows some commands, but she is not the best listener.  She does not always come when called, she likes to steal food, and typically sits at the table during meals. Please donate so I can afford to get Flurry some training.', imageUrl: 'https://i.imgur.com/hm7iUym.jpg'}),

    Fund.create({name: 'Travel Expenses for Flurry', amount: 2000, category: 'Travel & Adventure', description: 'Flurry likes to explore different parks and hike with her friends. Please sponsor her travels so she can afford to run around all over the country.', imageUrl: 'https://i.imgur.com/kAFXEpG.jpg'}),

    Fund.create({name: 'Snow Exploration for Flurry', amount: 1500, category: 'Travel & Adventure', description: 'Flurry loves to to play in the snow. Please help sponsor her trip to play in the snow.', imageUrl: 'https://i.imgur.com/y18dsIk.jpg'}),

    Fund.create({name: 'New bed for Flurry', amount: 100, category: 'Accidents & Emergencies', description: 'Flurry really had to go to the bathroom one night and decided to relieve herself on her bed.  Please help her pay for a new one.', imageUrl: 'https://i.imgur.com/fHMAGe1.jpg'}),

    Fund.create({name: 'Halloween costume for Flurry', amount: 50, category: 'Other', description: 'Flurry claims an alligator ate her costume. Please help her pay for a new one.', imageUrl: 'https://i.imgur.com/3Ni29ch.jpg'}),

  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${funds.length} funds`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
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

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
