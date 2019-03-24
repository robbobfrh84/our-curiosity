const db = require("../models")
const mongoose = require("mongoose")

const SavedControllers = {

  findAll: function(req, res) {
    console.log('findAll() > Saved')
    db.Saved.find()
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err) )
  },

  // save: function(req, res) {
  //   console.log('Attempt Update || Save Image', req.body)
  //   db.Saved.findOneAndUpdate({name: req.body.name}, { $inc : {totalSaved : 1} })
  //     .then(image => {
  //       if (image) {
  //         console.log(" 👉 This image exists and save was counted")
  //         // res.json(image)
  //       } else {
  //         console.log(" ⭐️👉 This image did not exists and was saved")
  //         db.Saved.create(req.body)
  //           // .then(savedDB => res.json(savedDB) )
  //           .catch(err => res.status(422).json(err) )
  //       }
  //       updateAdmin_images_saved()
  //     })
  //     .catch(err => { res.status(422).json(err) })
  // }

}
//
// function updateAdmin_images_saved(){
//   db.Admin.findOneAndUpdate( {name: "admin"}, { $inc : {images_saved : 1} } )
//     .then(admin => { console.log(" 👍 Admin Updated");})
//     .catch(err => console.log("🚨 Problem updating admin: inc images saved :( ") )
// }


module.exports = SavedControllers
