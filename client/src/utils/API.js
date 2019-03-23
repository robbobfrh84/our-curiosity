import axios from "axios"

export default {

  // 🤖 Admin
  putGetAdmin: function() {
    return axios.put("/api/admin")
  },

  // 🌌 Page
  findPage: function(sol, page) {
    return axios.get("/api/page/"+sol+"/"+page)
  },

  // 👥 User
  getUsers: function() {
    return axios.get("/api/user")
  },
  createUser: function(newUser){
    return axios.post("/api/user", newUser)
  },
  signIn: function(user){
    return axios.post("/api/user/signin", user)
  },

  // 🏞 saved
  saveImage: function(image, user){
    return axios.post("/api/saved", {image:image})
  }

}
