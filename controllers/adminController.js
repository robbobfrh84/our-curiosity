const db = require("../models")


const mongoose = require("mongoose")
const nasaCuriosityAPI = require("../toolkit/nasaCuriosityAPI")

async function checkForManifestUpdate(){
  return await new Promise((res, rej)=>{
    db.Admin.findOne({name:"admin"})
      .then(data => {
        const lastUpdate = data.mission_manifest.updated
        const h24 = 86400000
        if (Date.now() > lastUpdate+h24) {// 👆? Check for 24 hour update
          console.log('Update Manifest - 24+ hours passed')
          nasaCuriosityAPI.manifest()
            .then(data => {
              console.log(data)
              res("Updated Manifest")
            })
            .catch(err => res({"REQUEST ERROR": err.response.status}) )
        } else {
          res("Manifest Up to Date")
        }
      })
  })
}

module.exports = {

  findAll: function(req, res) {
    // checkForManifestUpdate()
    // ??
    db.Admin
      .find(req.query)
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  incrementPage: function(req, res) {
    checkForManifestUpdate()
      .then(x => {
        console.log('okokokok',x)
        console.log('🧮increment🧮')
        db.Admin
          .findOneAndUpdate(
            {name: "admin"},
            {$inc : {visits : 1}},
          )
          .then(dbModel => res.json(dbModel) )
          .catch(err => res.status(422).json(err) )
      })
  }

}

/* * * 👍 NOTES and OPTIONS 👍 * * *

- .sort({ page: -1 })

* * * */
