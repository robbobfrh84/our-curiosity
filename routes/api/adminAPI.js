const router = require("express").Router()
const adminController = require("../../controllers/adminController")

// 👇 "/api/admin" +
router.route("/")
  .get(adminController.findAll)
  .put(adminController.incrementPage)

module.exports = router
