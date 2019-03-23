const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  savedImages: { type: Array, default: [] },
  created_at: { type: Date, default: Date.now },
})
userSchema.plugin(uniqueValidator)
const User = mongoose.model("User", userSchema)

module.exports = User
