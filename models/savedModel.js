const mongoose = require("mongoose")
const Schema = mongoose.Schema

const savedSchema = new Schema({
  totalSaved: { type: Number, default: 0 },
  image: { type: Object, required: true },
  created_at: { type: Date, default: Date.now }
})

const Saved = mongoose.model("Saved", savedSchema)

module.exports = Saved
