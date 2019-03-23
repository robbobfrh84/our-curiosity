const db = require("../models")

const Admin = {

  resetAdminDb: (seedLogger, exit)=>{
    db.Admin
      .deleteMany({})
      .then(() => db.Admin.insertMany([{}]) )
      .then(data => seedLogger(data, exit) )
      .catch(err => { console.error(err); process.exit(1); } )
  }

}

module.exports = Admin
