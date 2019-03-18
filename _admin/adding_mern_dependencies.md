# After React front end. Build MERN dependencies and environment.

- Before moving files around, in Atom > Preferences > packages > tree-view
  - turn off "hide ignored Names"
  - Because we want to move `.git` folder `package-lock.json`.... etc..
- I create a `client` folder on the root, and put in everything....
  - Except `_admin`
  - Except `.gitignore`
  - Except `.git`
  - Except `.DS_Store`

### Starting at the New root level.
- `npm init`
  - > `description: Fan and observation page for NASA's Curiosity Rover.`
  - > `entry point: (index.js) server.js`
  - Everything else should be default.

Dependancies
- `npm install express`
- `npm install axios`
- `npm install if-env`
- `npm install mongoose`

devDependencies
- `npm install nodemon --save-dev`
- `npm install concurrently --save-dev`

- Add update root package.json "scripts"
```json
"scripts": {
  "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
  "start:prod": "node server.js",
  "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
  "client": "cd client && npm run start",
  "seed": "node scripts/seedDB.js",
  "install": "cd client && npm install",
  "build": "cd client && npm run build",
  "heroku-postbuild": "npm run build"
},
```

- Create `server.js`
```javascript
const express = require("express");
```

### in Client Root Level.

Install additional Dependancies
- `npm install axios`

Add to client's `package.json`
- `"proxy": "http://localhost:3001/",`

Add folder `utils`
- add `API.js`
- add code...
```javascript
import axios from "axios"

export default {

  test: function() {
    return axios.get("/api/test")
  },

}
```
