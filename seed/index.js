const mongoose = require("mongoose")
const db = require("../models")
const Admin = require("./adminSeed")
const Page = require("./pageSeed")
const seed = process.argv[2]

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/ourcurousity", { useNewUrlParser: true })
console.log(seed, '🌰...Seeding...💦...💦...🌱')

switch (seed) {
  case "admin": Admin.resetAdminDb(logSeed); break;
  case "pages": Page.seed3blanks(logSeed); break;
  default: {
    console.log('\n🤔please enter a seed argument... i.e. `npm run seed stockImages`\n')
    process.exit(0)
  }
}

function logSeed(data){
  console.log("\nDocument(s) inserted!\n" + JSON.stringify(data, null, 2))
  process.exit(0)
}

/* * * 👍 NOTES and OPTIONS 👍 * * *

-  .then(() => db.PageViews.insertMany(someArrayOfObjects)

* * * */