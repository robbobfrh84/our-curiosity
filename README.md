# our-curiosity
Fan and observation page for NASA's Curiosity Rover.

Heroku Link: https://our-curiosity.herokuapp.com/

# Steps to Development

Download Robo 3T for localhost mongoDB viewing/editing
- https://robomongo.org/download

First time getting started
- $`git clone <this-repo>` & $`cd` into project folder
- $`npm install`
- Install Mongodb

Starting development enviroment
- $`mongod`
  - Not requred: $`mongo` will test the deamon is running which should put you in the mongodb cli `>`.
- $`npm run seed all` > after completion, you may need to [Control+c] to breakout of the process.
- $`npm start`

# Deployment
After updating and testing on the master branch run...
- `git push heroku master`

# Resources

Passport JS: 
- http://www.passportjs.org

Favicon Generator:
- https://realfavicongenerator.net/favicon_result?file_id=p1d6lj02mpfts1l8i1voptk91iaa6#.XJZg1-tKjOR

MERN Google Cloud Services
- https://cloud.google.com/blog/products/databases/build-it-like-you-mean-it-with-mongodb-atlas-on-gcp
