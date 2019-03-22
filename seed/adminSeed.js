const db = require("../models")

const Admin = {

  resetAdminDb: (seedLogger)=>{
    db.Admin
      .deleteOne({})
      .then(() => db.Admin.insertMany([{}]) )
      .then(data => seedLogger(data) )
      .catch(err => { console.error(err); process.exit(1); } )
  }

}

module.exports = Admin
