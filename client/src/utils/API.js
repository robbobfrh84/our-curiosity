import axios from "axios"

export default {

  getPageViews: function() {
    return axios.get("/api/pageviews")
  },
  
  incrementPage: function(page) {
    return axios.put("/api/pageviews", {page: page})
  }

}
