const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/ourcurousity",
  { useNewUrlParser: true }
)

const seedPages = [
    {
      page: "home",
      views: 0,
      date: new Date(Date.now())
    },
    {
      page: "imagelog",
      views: 0,
      date: new Date(Date.now())
    },
    {
      page: "observations",
      views: 0,
      date: new Date(Date.now())
    },
    {
      page: "signin",
      views: 0,
      date: new Date(Date.now())
    }
]

db.PageViews
  .remove({})
  .then(() => db.PageViews.collection.insertMany(seedPages))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => { console.error(err); process.exit(1); })
