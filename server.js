const express = require("express")
const mongoose = require("mongoose")
// const routes = require("./routes")
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

console.log('👋 🌋 process.env.NODE_ENV: ', process.env.NODE_ENV)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/test", function(req, res){
  console.log('ok /api/test')
  res.json({ api: "/api/test" })
})

app.listen(PORT, function() {
  console.log(`🏡  API Server on PORT: ${PORT} 🔥`)
})
