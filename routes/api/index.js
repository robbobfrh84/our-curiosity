const router = require("express").Router();
const adminRoutes = require("./admin.js");

router.use("/admin", adminRoutes);

module.exports = router;
