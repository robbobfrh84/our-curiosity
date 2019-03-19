const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/") // This actually Matches with "/api/admin"
  .get(adminController.findAll)
  .put(adminController.incrementPage)

module.exports = router
