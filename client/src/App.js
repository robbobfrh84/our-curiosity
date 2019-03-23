import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import API from "./utils/API"

import RootData from "./rootData.json"
import NavBar from "./components/NavBar/navBar.js"
import Home from "./components_pages/Home/home.js"
import Images from "./components_pages/Images/images.js"
import Observations from "./components_pages/Observations/observations.js"
import SignIn from "./components_pages/SignIn/signIn.js"

import './styles/App.sass'
import './styles/main.sass'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      rootData: RootData,
      manifest: {},
      admin: {}
    }
  }

  componentDidMount() {
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
              />}
            />
            <Route path="/"
              render={() => <NavPages app={this.state}/>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

function NavPages(props) {
  return (
    <div>
      <NavBar
        title={props.app.rootData.website_title}
        site_state={props.app.rootData.site_state}
      />
      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route}
            manifest={props.app.manifest}
            pageData={props.app.rootData}
            admin={props.app.admin}
          />}
        />
        <Route exact path="/images"
          render={route => <Images {...route}
            pageData={props.app.rootData.pages.images}
          />}
        />
        <Route exact path="/observations"
          render={route => <Observations {...route}
            pageData={props.app.rootData.pages.observations}
          />}
        />
      </Switch>
    </div>
  )
}

export default App
