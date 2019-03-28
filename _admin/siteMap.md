# Front End

### Pages
- `/` && `/home`
- `/Images`
- `/observations`
- `/singin`
- * `/admin` (not revealed in UI)

### Component Map (With props & state)
```
App
  state  
  	- userStatus
  	- manifest
  	- images
    - lastViewedImage
  bind
  	- status()

(SignIn) PROPS - status()

[NavBar] PROPS - status()

  (Home) PROPS - status()
  (Images) PROPS - status()
  (Observations) PROPS - status()
  (Admin) ...Not revealed in UI

[footer]
```
### Requests

API
- admin
  - get `api/admin` > gets admin manifest
  - put `api/admin` > increments page view count.  
- page
  - get `api/pages/:sol/:page` > get's
- users
  - post `api/user` > sign in users
  - gost `api/users/` >
  - post `api/images`

----

# Back End

#

----
