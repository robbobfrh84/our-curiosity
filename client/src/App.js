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
      images: { sol: "1000", page: "1", pages: {}}
    }
    this.setStatus = this.setStatus.bind(this)
    this.addPage = this.addPage.bind(this)
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

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin"
              render={route => <SignIn {...route}
                setStatus={this.setStatus}
              />}
            />
            <Route path="/"
              render={() => <NavBarPages
                app={this.state}
                setStatus={this.setStatus}
                addPage={this.addPage}
              />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

function NavBarPages(props) {

  return (
    <div>
      <NavBar
        userStatus={props.app.userStatus}
        setStatus={props.setStatus}
      />
      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route}
            userStatus={props.app.userStatus}
            manifest={props.app.manifest}
          />}
        />
        <Route exact path="/images"
          render={route => <Images {...route}
            userStatus={props.app.userStatus}
            images={props.app.images}
            addPage={props.addPage}
          />}
        />
        <Route exact path="/observations"
          render={route => <Observations {...route}
            for="community"
          />}
        />
        <Route exact path="/admin" render={Admin} />}/>
      </Switch>

      <Footer images={props.app.images}/>

    </div>
  )
}

export default App
