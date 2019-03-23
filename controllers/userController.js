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
  }

}

module.exports = UserControllers
