import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import API from "./utils/API"
import Root from "./root.js"

import NavBar from "./components/NavBar/navBar.js"
import Footer from "./components/Footer/footer.js"
import Home from "./components_pages/Home/home.js"
import Images from "./components_pages/Images/images.js"
import Observations from "./components_pages/Observations/observations.js"
import UserSaved from "./components_pages/UserSaved/userSaved.js"
import Admin from "./components_pages/Admin/admin.js"
import SignIn from "./components_pages/SignIn/signIn.js"

import './styles/App.sass'
import './styles/main.sass'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      userStatus: { userName: false, _id: false },
      manifest: {},
      testy: "",
      images: { sol: "1000", page: "1", pages: {}},
      lastViewedImage: {}
    }
    this.Root = Root.bind(this)
  }

  componentDidMount() {
    if (sessionStorage.ourCuriosityUser) {
      const user = JSON.parse(sessionStorage.ourCuriosityUser)
      if (user.userName && user._id) this.setState({userStatus: user})
    }
    this.putGetAdmin()
  }

  putGetAdmin() {
    API.putGetAdmin()
      .then(res => this.setState({manifest: res.data}) )
      .catch(err => console.log(err))
  }

  setStatus({userName, _id}) {
    sessionStorage.ourCuriosityUser = JSON.stringify({userName, _id})
    this.setState({ userStatus: {userName, _id} })
  }

  addPage({sol, page, images}) {
    const pages = {...this.state.images.pages}
    if (!pages[sol+"_"+page]) {
      pages[sol+"_"+page] = images
      this.setState({images: {sol,page,pages}})
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin"
              render={route => <SignIn {...route} Root={this.Root} />}
            />
            <Route path="/"
              render={() => <NavBarPages Root={this.Root} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

function NavBarPages({Root}) {
  return (
    <div>
      <NavBar Root={Root} />

      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route} Root={Root} />}
        />
        <Route exact path="/images"
          render={route => <Images {...route} Root={Root} />}
        />
        <Route exact path="/observations"
          render={route => <Observations {...route} Root={Root} />}
        />
        <Route exact path="/usersaved"
          render={route => <UserSaved {...route} Root={Root} />}
        />
        <Route exact path="/admin" render={Admin} />}/>
      </Switch>

      <Footer />
    </div>
  )
}

export default App
