import React, { Component } from 'react'
import Footer from "../../components/Footer/footer.js"
import Rover from '../../images/rover.svg'
import API from "../../utils/API";

import "./home.sass"

export default class Home extends Component {

  constructor(props){
    super(props)
    this.page = "home"
    this.state = {
      rootData: props.rootData,
      pageViews: '?'
    }
  }

  componentDidMount() {
    this.getPageViews()
  }

  getPageViews = () => {
    API.incrementPage(this.page)
      .then(res => {
        console.log(res)
        this.setState({pageViews: res.data.views})
      })
      .catch(err => console.log(err))
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" }) // this will allow things to load in their proper place / time. like the footer, who needs this images size to determine position.
  }

  render() {
    return (
      <div className="home">

        <div className="imageContainer">
          <img src={Rover} alt="Rover" className="roverSVG"
            onLoad={this.handleImageLoaded.bind(this)}
          />
        </div>

        <br /><br />
        <h3 className="text-warning">
          &bull; {this.state.rootData.website_subtitle} &bull;
        </h3>
        <br />
        <h1 className="text-primary">&bull; ({this.state.pageViews}) &bull;</h1>
        <br /><br />

        <Footer />

      </div>
    )
  }


}
