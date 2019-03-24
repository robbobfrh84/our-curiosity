const db = require("../models")
const mongoose = require("mongoose")

const UserControllers = {

  findAll: function(req, res) {
    console.log('👥👥👥 Get users!')
    db.User.find()
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  createUser: function(req, res) {
    console.log('🌱 🤓 Create user!', req.body)
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  signIn: function(req, res) {
    console.log('🌟 🤓 find user!', req.body)
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
    console.log("☝️ 🏞 Update User's saved Images", req.body)
    db.User.findOne({_id: req.body.id})
      .then(user => {
        let hasImage = false
        for (const img of user.savedImages) {
          if (img.name === req.body.image.name) {
            hasImage = true; break
          }
        }
        if (hasImage) {
          console.log("👎This image has already been saved")
          res.json("alreadySaved")
        } else {
          db.User.findOneAndUpdate(
            {_id: req.body.id},
            {$push: {savedImages: req.body.image}
          })
            .then(image => {
              console.log("✅User saves new image", user)
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
        console.log(" 👉 This image exists and save was counted")
      } else {
        console.log(" ⭐️👉 This image did not exists and was saved")
        db.Saved.create(image)
      }
      db.Admin.findOneAndUpdate( {name: "admin"}, { $inc : {images_saved : 1} } )
        .then(admin => { console.log(" 👍 Admin Updated");})
        .catch(err => console.log("🚨 Problem updating admin: inc images saved :( ") )
    })
}

module.exports = UserControllers
