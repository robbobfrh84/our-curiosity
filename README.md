<!-- [![Website our-curiosity.com](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://our-curiosity.com) -->

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/robbobfrh84)

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


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
- $`npm run seed all` > after completion, you may need to [Control+c] to breakout of the process if hangs.
- $`npm start`

# Deployment
After updating and testing on the master branch run...
- `git push heroku master`

Hypothetically, let's say we wanted to put the app in a subfolder (`webapp`) AND deploy it on a different branch...
- First create the branch on Heroku
  - `git subtree push --prefix webapp heroku testdeploy`
- Then push that branch against Heroku's master
  -`git push heroku webapp:master`


# Resources

Passport JS:
- http://www.passportjs.org

Favicon Generator:
- https://realfavicongenerator.net/favicon_result?file_id=p1d6lj02mpfts1l8i1voptk91iaa6#.XJZg1-tKjOR

MERN Google Cloud Services
- https://cloud.google.com/blog/products/databases/build-it-like-you-mean-it-with-mongodb-atlas-on-gcp

React
- Redux state with user example: https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835
- Example ToDo list with Redux: https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos
