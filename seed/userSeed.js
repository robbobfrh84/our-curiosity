const db = require("../models")

const User = {

  seedUsers: (seedLogger)=>{

    const users = [
      {
        userName: "Bob",
        email: "bobmain49@gmail.com",
        password: "12345",
      },
      {
        userName: "Jordan",
        email: "jordanCoder404@gmail.com",
        password: "12345",
      }
    ]

    db.User
      .deleteOne({})
      .then(() => db.User.insertMany(users) )
      .then(data => seedLogger(data) )
      .catch(err => { console.error(err); process.exit(1); } )
  }

}

module.exports = User
