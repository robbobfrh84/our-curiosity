const db = require("../models")
const mongoose = require("mongoose")
const NasaCuriosityAPI = require("../toolkit/nasaCuriosityAPI")
const delay = 3600000 // 24h = 86400000, 1hr = 3600000, 1min = 60000

const AdminControllers = {

  findAll: function(req, res) {
    checkForManifestUpdate()
      .then(payload => { console.log('🤓 Check for Update ?...\n'+payload.msg)
        if (payload.data) {
          db.Admin
            .findOneAndUpdate({name: "admin"},{$set:{mission_manifest:payload.data}})
            .then(dbModel => { res.json(dbModel) })
            .catch(err => res.status(422).json(err) )
        } else {
          db.Admin.find(req.query)
            .then(dbModel => res.json(dbModel) )
            .catch(err => res.status(422).json(err) )
        }

      })
  },

  incrementPage: function(req, res) {
    checkForManifestUpdate()
      .then(payload => { console.log('🧮 increment Visits 🧮 '+payload.msg)
        const edits = { $inc : {visits : 1} }
        if (payload.data) edits.$set = { mission_manifest: payload.data}
        db.Admin.findOneAndUpdate( {name: "admin"}, edits )
          .then(dbModel => { res.json(dbModel) })
          .catch(err => res.status(422).json(err) )
      })
  }

}

async function checkForManifestUpdate(){
  return await new Promise((res, rej)=>{
    db.Admin.findOne({name:"admin"})
      .then(data => {
        const lastUpdate = data.mission_manifest.updated
        const now = Date.now()
        if (Date.now() > lastUpdate+delay) {// ☝️ ? Check for delay update
          NasaCuriosityAPI.manifest()
            .then(payload => {
              const new_mission_manifest = {
                  updated : now,
                  total_photos : payload.data.rover.total_photos || "?",
                  max_sol : payload.data.rover.max_sol || "?",
                  status : payload.data.rover.status || "?",
                  launch_date : payload.data.rover.launch_date || "?",
                  landing_date : payload.data.rover.landing_date || "?",
                  max_date : payload.data.rover.max_date || "?"
              }
              res({msg: "\n💥\n⏰ 👈 Time to Update Manifest", data: new_mission_manifest})
            })
            .catch(err => res({msg:"🛰NASA API request error + "+err}))
        } else {
          res({msg: "👍 Manifest Up to Date"})
        }
      })
      .catch(err => res({msg: "DB request error + "+err}) )
  })
}

module.exports = AdminControllers

/* * * 👍 NOTES and OPTIONS 👍 * * *

- .sort({ page: -1 })

* * * */
