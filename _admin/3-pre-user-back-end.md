### 3-Refactor admin
- [x] - Figure out default
- [x] - create schema admin
  - visits, images_saved, images_viewed, manifest: {+Date = 0 (for updated track)}
- [x] - update npm seed admin.
- [x] - re-impliment on APPS component. created this.pageviewsaved = false > true.
  - It actually wasn't required. Apps only reloads when entire pages reloads.

### 4-Add backend NASA Curiosuty API...  
- [x] - Add actual axios request
  - Start by if statement if updated <= 1000*60*60*24
  - then call API.
- [ ] - `api/admin` + `/visits`
  - increment, check manifest date (if < 24 hour; get new) (else return admin)
- [ ] - impliment UGLY F.E.
  - Manifest
  - Community Activity

? heroku?

### Stock Images
- See notes.

### View Page
- See notes.

----
# Development Notes
