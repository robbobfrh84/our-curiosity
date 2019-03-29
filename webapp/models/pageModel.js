const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pageSchema = new Schema({
  sol: { type: Number, required: true },
  page: { type: Number, required: true },
  images: { type: Array, required: true },
  created_at: { type: Date, default: Date.now }
})

const Page = mongoose.model("Page", pageSchema)

module.exports = Page
