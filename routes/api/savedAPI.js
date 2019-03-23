const router = require("express").Router()
const savedController = require("../../controllers/savedController")

// 👇 "/api/saved" +
router.route("/")
  .get(savedController.findAll)
  .post(savedController.save)

module.exports = router
