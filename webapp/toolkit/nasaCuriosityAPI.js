const axios = require("axios")

const NasaMarsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity"
const APIKEY = "api_key=vHsbv71ltvu4dshAiy0TGrxuOKKr1umnhFsyH2uV" // Original (not sure when ~2016-7)
// const APIKEY = "api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo" // Got on 03/20/19:
const Photos = "/photos?sol="

module.exports = {

  photos: function(sol, page) {
    const url = NasaMarsURL + Photos + sol + "&page="+ page +"&"+ APIKEY
    return axios.get(url)
  },

  manifest: function(sol, page) {
    const url = NasaMarsURL +"/?"+ APIKEY
    return axios.get(url)
  },

}

/* * * 👍 NOTES and OPTIONS 👍 * * *

- .sort({ page: -1 })

🔑 API KEYS
- Got on 03/20/19: NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
  - This one started to get lots of 429 (too many request errors)
- Original (not sure when ~2016-7): vHsbv71ltvu4dshAiy0TGrxuOKKr1umnhFsyH2uV

* * * */
