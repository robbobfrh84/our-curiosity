const router = require("express").Router();
const pageViewsController = require("../../controllers/pageViewsController");

router.route("/") // This actually Matches with "/api/pageviews"
  .get(pageViewsController.findAll)
  .put(pageViewsController.incrementPage)
  .post(pageViewsController.createPage) // not implimented. neeed to think about how we handle it

module.exports = router
