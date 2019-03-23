const db = require("../models")
const mongoose = require("mongoose")

const SavedControllers = {

  findAll: function(req, res) {
    console.log('Find All Saved')
    db.Saved.find()
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  save: function(req, res) {
    console.log('Save Image', req.body)
    db.Saved.create(req.body)
      .then(savedDB => {
        console.log(savedDB)
        db.Admin.findOneAndUpdate( {name: "admin"}, { $inc : {images_saved : 1} } )
          .then(dbModel => { res.json(savedDB) })
          .catch(err => res.status(422).json(err) )
      })
      .catch(err => res.status(422).json(err) )
  }

}

module.exports = SavedControllers
