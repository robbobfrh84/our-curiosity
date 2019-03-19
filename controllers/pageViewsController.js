const db = require("../models")

module.exports = {

  createPage: function(req, res) {
    db.PageViews
      .create(req.body)
      .then(dbModel => res.json(dbModle))
      .catch(err => res.status(422).json(err))
  },

  findAll: function(req, res) {
    db.PageViews
      .find(req.query)
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  },

  incrementPage: function(req, res) {
    console.log('🧮increment🧮', req.body.page)
    db.PageViews
      .findOneAndUpdate(
        {page: req.body.page},
        {$inc : {views : 1}},
      )
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) )
  }

}

/* * * 👍 NOTES and OPTIONS 👍 * * *

- .sort({ page: -1 })

* * * */
