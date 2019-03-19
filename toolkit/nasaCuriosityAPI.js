const axios = require("axios")

const NasaMarsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity"
const APIKEY = "api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo"
const Photos = "/photos?sol="

module.exports = {

  // photos: function(sol, page) {
  //   const url = NasaMarsURL + Photos + sol + "&page="+ page +"&"+ APIKEY
  //   return axios.get(url)
  // },

  manifest: function(sol, page) {
    const url = NasaMarsURL +"/?"+ APIKEY
    return axios.get(url)
  },

}
