const router = require("express").Router()
const userController = require("../../controllers/userController")

// 👇 "/api/user" +
router.route("/")
  .get(userController.findAll)
  .post(userController.createUser)

router.route("/signin")
  .post(userController.signIn)

router.route("/save")
  .post(userController.saveImage)

module.exports = router
