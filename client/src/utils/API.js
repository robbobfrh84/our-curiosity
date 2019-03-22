import axios from "axios"

export default {

  putGetAdmin: function() {
    return axios.put("/api/admin")
  },

  findPage: function(sol, page) {
    return axios.get("/api/page/"+sol+"/"+page)
  }

}
