# Front End

### Pages
- `/` && `/home`
- `/Images`
- `/observations`
- `/singin`
- * `/admin` (not revealed in UI)

### Component Map (With props & state)
```
---- Nav and Page Components ----
App
  state  
  	userStatus,
  	manifest,
  	images,
    lastViewedImage
  bind
    props.status()

  (SignIn)
    > props.status()

      [NavBar]
        > props.status()

          (SavedImages)
          > props.status()

      (Home)
        > props.status()

      (Images)
        > props.status()

      (Observations)
        > props.status()

      (Admin)

  [footer]

---- State Components ---
[ImageContainer]
  > props.status()
  > props.images
  > props.history
  > props.bgcolor
  > props.sol
  > props.noSaveButton

[ImageContainer]
  > props.status()
  > props.handleClose()
  > props.saveImage()
  > props.noSaveButton
```

### Requests

API
- admin
  - put `api/admin` > gets admin manifest while incrementing views
- page
  - get `api/pages/:sol/:page` > get's image page
- saved
  - get `api/saved` > get's all saved images
- users
  - post `api/user` > sign in users
  - post `api/users/signin` > signs up a user
  - post `api/images/save` > saves an Image to a user
