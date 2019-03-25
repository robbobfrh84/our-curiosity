import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import API from "./utils/API"

import RootData from "./rootData.json"
import Root from "./root.json"

import NavBar from "./components/NavBar/navBar.js"
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
      rootData: RootData,
      userStatus: Root.userStatus,
      manifest: {},
      admin: {}
    }
    this.setStatus = this.setStatus.bind(this)
  }

  setStatus({userName, _id}) {
    // 👋 NOW... gut updateUser and do local storage thing here. NavBar / Home / SignIn
    this.setState({ userStatus: {userName, _id} })
  }

  componentDidMount() {

    const obj = {...this.state.rootData}
    if (sessionStorage.ocUser && sessionStorage.ocUser !== "false") {
      obj.site_state.user = sessionStorage.ocUser
      obj.site_state.user_id = sessionStorage.ocId
      this.setState({rootData: obj})
    }
    this.putGetAdmin()
  }

  putGetAdmin = () => {
    API.putGetAdmin()
      .then(res => {
        this.setState({
          manifest: res.data.mission_manifest,
          admin: {
            visits: res.data.visits,
            images_saved: res.data.images_saved,
            images_viewed: res.data.images_viewed
          }
        })
      })
      .catch(err => console.log(err))
  }

  updateUser = (user) => {
    const rootData = {...this.state.rootData}
    rootData.site_state.user = user.userName
    rootData.site_state.user_id = user._id
    sessionStorage.ocUser = user.userName
    sessionStorage.ocId = user._id
    this.setState({rootData: rootData})
  }

  logout = () => {
    const rootData = {...this.state.rootData}
    rootData.site_state.user = false
    rootData.site_state.user_id = false
    sessionStorage.ocUser = "false"
    sessionStorage.ocId = "false"
    this.setState({rootData: rootData})
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin"
              render={route => <SignIn {...route}
                pageData={this.state.rootData.pages.signIn}
                site_state={this.state.rootData.site_state}
                updateUser={this.updateUser}
                setStatus={this.setStatus}
              />}
            />
            <Route path="/"
              render={() => <NavPages app={this.state} logout={this.logout}/>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

function NavPages(props, logout) {

  return (
    <div>
      <NavBar
        title={props.app.rootData.website_title}
        site_state={props.app.rootData.site_state}
        logout={props.logout}
      />
      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route}
            manifest={props.app.manifest}
            // pageData={props.app.rootData}
            status={props.app.userStatus}
            admin={props.app.admin}
          />}
        />
        <Route exact path="/images"
          render={route => <Images {...route}
            pageData={props.app.rootData.pages.images}
            site_state={props.app.rootData.site_state}
          />}
        />
        <Route exact path="/observations"
          render={route => <Observations {...route}
            pageData={props.app.rootData.pages.observations}
            for="community"
          />}
        />
        <Route exact path="/admin" render={Admin} />}
        />
      </Switch>
    </div>
  )
}

export default App
