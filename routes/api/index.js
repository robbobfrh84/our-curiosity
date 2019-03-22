const router = require("express").Router()
const adminRoutes = require("./adminAPI.js")
const pageRoutes = require("./pageAPI.js")

router.use("/admin", adminRoutes)
router.use("/page", pageRoutes)

module.exports = router
