const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema({
  name: { type: String, default: "admin" },
  visits: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  images_viewed: { type: Number, default: 0 },
  images_saved: { type: Number, default: 0 },
  mission_manifest: {
    type: Object,
    default: {
      updated: 0,
      total_photos: "?",
      max_sol: "?",
      status: "?",
      launch_date: "?",
      landing_date: "?",
      max_date: "?",
    }
  }
})

const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin
