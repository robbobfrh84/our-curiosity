const router = require("express").Router()
const adminController = require("../../controllers/adminController")

router.route("/") // "/api/admin"
  .get(adminController.findAll)
  .put(adminController.incrementPage)

module.exports = router
