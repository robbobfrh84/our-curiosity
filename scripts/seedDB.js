const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/ourcurousity",
  { useNewUrlParser: true }
)

const seed = process.argv[2]

console.log('🌰...Seeding...🥜...🌱', seed)

if (seed === "admin") {

  db.Admin
    .remove({})
    .then(() => db.Admin.insertMany([{}]) )
    .then(data => logSeed(data) )
    .catch(err => { console.error(err); process.exit(1); } )

} else if (seed === "stockImages") {

  console.log('seed stock images here...')
  process.exit(0)
} else {

  console.log('\n🤔please enter a seed argument... i.e. `npm run seed stockImages`\n')
  process.exit(0)
}

function logSeed(data){
  console.log("\nRecord inserted!\n" + JSON.stringify(data, null, 2))
  process.exit(0)
}

/* * * 👍 NOTES and OPTIONS 👍 * * *

-  .then(() => db.PageViews.insertMany(someArrayOfObjects)

* * * */
