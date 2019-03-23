const db = require("../models")
const NasaCuriosityAPI = require("../toolkit/nasaCuriosityAPI")

const Page = {

  seed3blanks: (seedLogger, exit)=>{
    var stockPages = [
      {sol: 1000, page: 1},
      {sol: 1000, page: 2},
      {sol: 1000, page: 3}
    ]
    var promises = stockPages.map( params => {
      return new Promise(function(res, rej) {
        NasaCuriosityAPI.photos(params.sol,params.page)
          .then(payload => {
            console.log("\n🤮\n")
            const photos = payload.data.photos.map(photo => {
              return ({
                id: photo.id,
                img_src: photo.img_src,
                earth_date: photo.earth_date,
                camera: photo.camera
              })
            })
            res({
              sol: params.sol,
              page: params.page,
              images: photos
            })
          })
          .catch(err=> console.log('👹'+err))
      })
    })
    Promise.all(promises).then(function(allData) {
      console.log('🤮🤮🤮\n🌟All Promises Resolved🌟');
      db.Page
        .deleteMany({})
        .then(() => db.Page.insertMany(allData) )
        .then(data => seedLogger(data, exit) )
        .catch(err => { console.error(err); process.exit(1); } )
    })
  }

}

module.exports = Page
