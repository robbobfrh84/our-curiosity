const db = require("../models")

const User = {

  seedUsers: (seedLogger, exit)=>{

    const users = [
      {
        userName: "Bob",
        email: "bobmain49@gmail.com",
        password: "1234",
      },
      {
        userName: "Jordan",
        email: "jordanCoder404@gmail.com",
        password: "1234",
      }
    ]

    db.User
      .deleteMany({})
      .then(() => db.User.insertMany(users) )
      .then(data => seedLogger(data, exit) )
      .catch(err => { console.error(err); process.exit(1); } )
  }

}

module.exports = User
