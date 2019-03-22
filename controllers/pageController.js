const db = require("../models")
const mongoose = require("mongoose")
const NasaCuriosityAPI = require("../toolkit/nasaCuriosityAPI")

const PageControllers = {

  findAll: function(req, res) {
    console.log('👥findall🤖', req.params.sol, req.params.page)
    db.Page
      .findOne({sol: req.params.sol, page: req.params.page})
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel)
        } else {
          getNewPageFromNasaAPI(req.params.sol, req.params.page)
            .then( page => db.Page.create(page))
            .then( dbModel =>  res.json(dbModel) )
            .catch(err => res.status(422).json(err) )
        }
      })
      .catch(err => res.status(422).json(err) )
  }

}

async function getNewPageFromNasaAPI(sol, page) {
  return await new Promise((res, rej)=>{
    NasaCuriosityAPI.photos(sol, page)
      .then(payload => {
        console.log("\n🚀 NASA API 🚀\n")
        const photos = payload.data.photos.map(photo => {
          return ({
            id: photo.id,
            img_src: photo.img_src,
            earth_date: photo.earth_date,
            camera: photo.camera
          })
        })
        res({ sol: sol, page: page, images: photos })
      })
      .catch(err => res({msg:"🛰NASA API request error + "+err}))
  })
}

module.exports = PageControllers
