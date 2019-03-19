import React, { Component } from 'react'
import Footer from "../../components/Footer/footer.js"
import Rover from '../../images/rover.svg'

import "./home.sass"

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      rootData: props.rootData,
    }
  }

  componentWillReceiveProps(x){
    const obj = {...this.state.rootData}
    obj.visits = x.rootData.visits
    this.setState({rootData: obj})
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
        <h1 className="text-primary">
          &bull; ({this.state.rootData.visits}) &bull;
        </h1>
        <br /><br />

        <Footer />

      </div>
    )
  }


}
