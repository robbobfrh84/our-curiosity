const db = require("../models")
const mongoose = require("mongoose")

const SavedControllers = {

  findAll: function(req, res) {
    console.log("\n💾 Attempting findAll Saved Images 💾\n")
    db.Saved.find()
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err) )
  },

}

module.exports = SavedControllers
