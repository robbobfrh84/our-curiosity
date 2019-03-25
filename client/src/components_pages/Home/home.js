import React, { Component } from "react"
import Footer from "../../components/Footer/footer.js"
import Rover from "../../images/rover.svg"
import SubTitle from "../../subTitle.txt"

import "./home.sass"

export default class Home extends Component {

  constructor(props){
    super(props)
    console.log("home super(props)", props)
    this.state = {
      subTitle: "",
      // pageData: props.pageData,
      manifest: props.manifest,
      admin: props.admin
    }
  }

  componentDidMount(){
    fetch(SubTitle)
      .then(r => r.text())
      .then(t => this.setState({subTitle: t}) )
  }

  componentWillReceiveProps({manifest, admin}){
    this.setState({ manifest: manifest, admin: admin })
  }

  dressNum(n){
    return n ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : n
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" }) // this will allow things to load in their proper place / time. like the footer, who needs this images size to determine position.
  }

  render() {
    return (
      <div className="home">

        {this.props.status.userName && <>
          <br />
          <h3 className="text-warning">
            Welcome, {this.props.status.userName} !
          </h3>
        </>}

        <div className="imageContainer">
          <img src={Rover} alt="Rover" className="roverSVG"
            onLoad={this.handleImageLoaded.bind(this)}
          />
        </div>

        <h1 className="text-warning">
          &bull; Mission Manifest &bull;
        </h1>

        { Object.entries(this.state.manifest).length === 0 &&
          <div>
            <h1 className="text-secondary">?</h1> <br/ >
          </div>
        }

        { Object.entries(this.state.manifest).length !== 0 &&
          <div>
            <h4 className="text-primary">
              Launch Date: {this.state.manifest.launch_date}
            </h4>
            <h4 className="text-primary">
              Landing Date: {this.state.manifest.landing_date}
            </h4>
            <h4 className="text-primary">
              Last Updated: {this.state.manifest.max_date}
            </h4>
            <h4 className="text-primary">
              Martian Days("sols"): {this.dressNum(this.state.manifest.max_sol)}
            </h4>
            <h4 className="text-primary">
              Status: {this.state.manifest.status}
            </h4>
            <h4 className="text-primary">
              Total Photos: {this.dressNum(this.state.manifest.total_photos)}
            </h4>
            <br />
          </div>
        }

        <h1 className="text-warning">
          &bull; Community Activity &bull;
        </h1>

        { Object.entries(this.state.admin).length === 0 &&
          <div>
            <h1 className="text-secondary">?</h1> <br/ >
          </div>
        }

        { Object.entries(this.state.admin).length !== 0 &&
          <div>
            <h4 className="text-primary">
              Visits({this.state.admin.visits})
            </h4>
            <h4 className="text-primary">
              Saved Images({this.state.admin.images_saved})
            </h4>
            <h4 className="text-primary">
              Images Viewed({this.state.admin.images_viewed})
            </h4>
            <br /><br />
            <hr />
            <h5 style={{width:590, margin:"auto"}} className="text-secondary">
              <strong> Our Curiosity </strong>
              <br></br>
              {this.state.subTitle}
            </h5>
            <br /><br />
          </div>
        }

        <Footer />

      </div>
    )
  }

}
