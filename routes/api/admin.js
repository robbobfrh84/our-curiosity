const router = require("express").Router()
const adminController = require("../../controllers/adminController")
//
// const mongoose = require("mongoose")
// const db = require("../../models")
// const nasaCuriosityAPI = require("../../toolkit/nasaCuriosityAPI")
//
// db.Admin.findOne({name:"admin"})
//   .then(data => {
//
//     const lastUpdate = data.mission_manifest.updated
//     const h24 = 86400000
//
//     if (Date.now() > lastUpdate+h24) {// 👆? Check for 24 hour update
//       console.log('Update Manifest - 24+ hours passed')
//       nasaCuriosityAPI.manifest()
//         .then(data => console.log('manifest data: ', data))
//     } else {
//       console.log('Manifest Up to Date')
//     }
//
//     router.route("/") // This actually Matches with "/api/admin"
//       .get(adminController.findAll)
//       .put(adminController.incrementPage)
//   })


router.route("/") // This actually Matches with "/api/admin"
  .get(adminController.findAll)
  .put(adminController.incrementPage)

module.exports = router
