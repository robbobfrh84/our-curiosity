const router = require("express").Router()
const adminRoutes = require("./adminAPI.js")
const pageRoutes = require("./pageAPI.js")
const userRoutes = require("./userAPI.js")
const savedRoutes = require("./savedAPI.js")

// 🧮
router.use("/admin", adminRoutes)

// 📄
router.use("/page", pageRoutes)

// 👥
router.use("/user", userRoutes)

// 💾
router.use("/saved", savedRoutes)

module.exports = router
