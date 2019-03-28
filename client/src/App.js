import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import API from "./utils/API"

import NavBar from "./components/NavBar/navBar.js"
import Footer from "./components/Footer/footer.js"
import Home from "./components_pages/Home/home.js"
import Images from "./components_pages/Images/images.js"
import Observations from "./components_pages/Observations/observations.js"
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
      images: { sol: "1000", page: "1", pages: {}},
      lastViewedImage: {}
    }
    this.status = this.status.bind(this)
  }

  componentDidMount() {
    if (sessionStorage.ourCuriosityUser) {
      const user = JSON.parse(sessionStorage.ourCuriosityUser)
      if (user.userName && user._id) this.setState({userStatus: user})
    }
    this.putGetAdmin()
  }

  status(method, state, data) {
    switch (method) {
      case "READ": return this.state[state]
      case "SET": this.setState({[state]: data}); break
      case "ADD_PAGE": this.addPage(data); break
      case "SET_USER": this.setStatus(data); break
      default:
        return "unknown status update"
    }
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
              render={route => <SignIn {...route} status={this.status} />}
            />
            <Route path="/"
              render={() => <NavBarPages status={this.status} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

function NavBarPages({status}) {

  return (
    <div>
      <NavBar status={status} />
      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route} status={status} />}
        />
        <Route exact path="/images"
          render={route => <Images {...route} status={status} />}
        />
        <Route exact path="/observations"
          render={route => <Observations {...route} status={status}
          />}
        />
        <Route exact path="/admin" render={Admin} />}/>
      </Switch>

      <Footer />

    </div>
  )
}

export default App
