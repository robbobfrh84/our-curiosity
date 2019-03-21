const db = require("../models")
const mongoose = require("mongoose")
const nasaCuriosityAPI = require("../toolkit/nasaCuriosityAPI")

const PageControllers = {

  findAll: function(req, res) {
    console.log('🔴', req.params.sol, req.params.page)
    db.Page
      .findOne({sol: req.params.sol, page: req.params.page})
      .then(dbModel => { res.json(dbModel) })
      .catch(err => res.status(422).json(err) )

  }
}

module.exports = PageControllers
