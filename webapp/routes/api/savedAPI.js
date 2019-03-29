const router = require("express").Router()
const savedController = require("../../controllers/savedController")

// 💾 "/api/saved" +
router.route("/")
  .get(savedController.findAll)

module.exports = router
