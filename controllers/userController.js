const db = require("../models")
const mongoose = require("mongoose")

const UserControllers = {

  createUser: function(req, res) {
    console.log('\n👥 🌱 Attempting to create new user 🌱 👥\n')
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  signIn: function(req, res) {
    console.log('\n👥 📜 Attempting to sign in user 📜 👥\n')
    db.User.findOne(req.body)
      .then(dbModel => {
        if(dbModel) {
          res.json(dbModel)
        } else {
          res.json("unknown")
        }
      })
      .catch(err => res.status(422).json(err) )
  },

  saveImage: function(req, res){
    console.log("\n👥 ☝️ 🏞 Attempting to Update User's saved Images 🏞 ☝️ 👥\n")
    db.User.findOne({_id: req.body.id})
      .then(user => {
        let hasImage = false
        for (const img of user.savedImages) {
          if (img.name === req.body.image.name) {
            hasImage = true; break
          }
        }
        if (hasImage) {
          console.log(" -- 👥 👎 The user has already saved this image 👎 👥\n")
          res.json("alreadySaved")
        } else {
          db.User.findOneAndUpdate(
            {_id: req.body.id},
            {$push: {savedImages: req.body.image}
          })
            .then(image => {
              console.log(" -- 👥 ☑️ User saves new image ☑️ 👥\n")
              updateAdmin_images_saved(req.body.image)
              res.json(image)
            })
        }
      })
      .catch(err => res.status(422).json(err) )
  }

}

function updateAdmin_images_saved(image){
  db.Saved.findOneAndUpdate({name: image.name}, { $inc : {totalSaved : 1} })
    .then(img => {
      if (img) {
        console.log("\n👥 This image is already saved in community observations and the save was counted 👥 \n")
      } else {
        db.Saved.create(image)
      }
      db.Admin.findOneAndUpdate( {name: "admin"}, { $inc : {images_saved : 1} } )
        .then(admin => { console.log(" -- 👍 Admin's images_saved Updated\n");})
        .catch(err => console.log("🚨 Problem updating admin: inc images saved :( ") )
    })
}

module.exports = UserControllers
