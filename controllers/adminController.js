const db = require("../models")

module.exports = {

  findAll: function(req, res) {
    db.Admin
      .find(req.query)
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  incrementPage: function(req, res) {
    console.log('🧮increment🧮')
    db.Admin
      .findOneAndUpdate(
        {name: "admin"},
        {$inc : {visits : 1}},
      )
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  }

}

/* * * 👍 NOTES and OPTIONS 👍 * * *

- .sort({ page: -1 })

* * * */
