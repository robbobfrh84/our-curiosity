import axios from "axios"

export default {

  putGetAdmin: function() {
    return axios.put("/api/admin")
  }

}
