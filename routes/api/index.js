const router = require("express").Router()
const adminRoutes = require("./admin.js")
const pageRoutes = require("./page.js")

router.use("/admin", adminRoutes)
router.use("/page", pageRoutes)

module.exports = router
