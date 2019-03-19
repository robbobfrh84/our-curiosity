const router = require("express").Router();
const pageViewsRoutes = require("./pageViews");

router.use("/pageviews", pageViewsRoutes);

module.exports = router;
