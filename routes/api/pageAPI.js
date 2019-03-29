const router = require("express").Router()
const adminController = require("../../controllers/pageController")

// 📄 "/api/page" +
router.route("/:sol/:page")
  .get(adminController.findAll)

module.exports = router
