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
  - state ( userStatus, manifest, images )
  - bind ( setStatus, addPage )
  (SignIn)
    - PROPS ( setStatus )

  NavBar Pages    
    [NavBar]
      - PROPS ( userStatus, setStatus() )
    (Home)
      - PROPS ( userStatus, manifest )
    (Images)
      - PROPS ( images, addPage() )
    (Observations)
      - ... 
    (Admin: Note revealed in UI)
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
