const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/ourcurousity",
  { useNewUrlParser: true }
)

const seed = process.argv[2]

console.log(seed, '🌰...Seeding...💦...💦...🌱')

if (seed === "admin") {

  db.Admin
    .deleteOne({})
    .then(() => db.Admin.insertMany([{}]) )
    .then(data => logSeed(data) )
    .catch(err => { console.error(err); process.exit(1); } )

} else if (seed === "pages") {

  const pages = [
    {
      sol: 1000,
      page: 1,
      images: [{img:1},{img:2}]
    },
    {
      sol: 1000,
      page: 2,
      images: [{img:3},{img:4}]
    },
    {
      sol: 1000,
      page: 3,
      images: [{img:5},{img:6}]
    }
  ]

  db.Page
    .deleteOne({})
    .then(() => db.Page.insertMany(pages) )
    .then(data => logSeed(data) )
    .catch(err => { console.error(err); process.exit(1); } )

  console.log('seed stock images here...')
} else {

  console.log('\n🤔please enter a seed argument... i.e. `npm run seed stockImages`\n')
  process.exit(0)
}

function logSeed(data){
  console.log("\nDocument(s) inserted!\n" + JSON.stringify(data, null, 2))
  process.exit(0)
}

/* * * 👍 NOTES and OPTIONS 👍 * * *

-  .then(() => db.PageViews.insertMany(someArrayOfObjects)

* * * */
