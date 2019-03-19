const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pageViewsSchema = new Schema({
  page: { type: String, required: true, unique: true },
  views: { type: Number, required: true, default: '8' },
  created_at: { type: Date, default: Date.now },
});

const PageViews = mongoose.model("PageViews", pageViewsSchema)

module.exports = PageViews
