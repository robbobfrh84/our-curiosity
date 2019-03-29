const db = require("../models")

const Saved = {

  saveImages: (seedLogger, exit)=>{

    const saveds = [
      {
        name: "img_102693",
        sol: 1000,
        image: {
          "id":102693,
          "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
          "earth_date": "2015-05-30",
          "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
          }
        }
      },
      {
        name: "img_102694",
        sol: 1000,
        image: {
          "id": 102694,
          "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
          "earth_date": "2015-05-30",
          "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
          }
        }
      }
    ]
    db.Saved
      .deleteMany({})
      .then(() => db.Saved.insertMany(saveds) )
      .then(data => {
        console.log(data.length)
        db.Admin.findOneAndUpdate( {name: "admin"}, {images_saved : data.length} )
          .then(adminDB => { seedLogger([data, adminDB],exit) })
          .catch(err => { console.error(err); process.exit(1); } )
      })
  }


}

module.exports = Saved
