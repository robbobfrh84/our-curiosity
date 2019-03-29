### Heroku Re-deploay

Make sure to add/remove `&& npm seed data as needed` from heroku-postbuild script.

----

# Original Set UP.

All I did was make sure I was on my MASTER branch and all uptodate and tested with git/github, then...

* $`heroku create our-curiosity`
* $`heroku addons:create mongolab -a our-curiosity` 👈 Creates Mlab plugin for Mongodb
* $`git push heroku master`


This works, but if you wanna seed data you need to add
  - `&& nmp run seed`
  - to the "hoereku-postbuild" Script.
  - So it looks like "heroku-postbuild": "npm run build && npm run seed admin"
