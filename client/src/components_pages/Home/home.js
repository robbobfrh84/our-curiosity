import React, { Component } from "react"
// import Footer from "../../components/Footer/footer.js"
import Rover from "../../images/rover.svg"
import SubTitle from "../../subTitle.txt"

import "./home.sass"

export default class Home extends Component {

  state = {
    subTitle: ""
  }

  componentDidMount(){
    fetch(SubTitle)
      .then(r => r.text())
      .then(t => this.setState({subTitle: t}) )
  }

  dressNum(n){ return n ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : n }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" }) // this will allow things to load in their proper place / time. like the footer, who needs this images size to determine position.
  }

  render() {
    return (
      <div className="home">

        {this.props.userStatus.userName && <>
          <br />
          <h3 className="text-warning">
            Welcome, {this.props.userStatus.userName} !
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

        { !this.props.manifest.mission_manifest &&
          <div>
            <h1 className="text-secondary">?</h1> <br/ >
          </div>
        }

        { this.props.manifest.mission_manifest &&
          <div>
            <h4 className="text-primary">
              Launch Date: {this.props.manifest.mission_manifest.launch_date}
            </h4>
            <h4 className="text-primary">
              Landing Date: {this.props.manifest.mission_manifest.landing_date}
            </h4>
            <h4 className="text-primary">
              Last Updated: {this.props.manifest.mission_manifest.max_date}
            </h4>
            <h4 className="text-primary">
              Martian Days("sols"):&nbsp;
              {this.dressNum(this.props.manifest.mission_manifest.max_sol)}
            </h4>
            <h4 className="text-primary">
              Status: {this.props.manifest.mission_manifest.status}
            </h4>
            <h4 className="text-primary">
              Total Photos:&nbsp;
              {this.dressNum(this.props.manifest.mission_manifest.total_photos)}
            </h4>
            <br />
          </div>
        }

        <h1 className="text-warning">
          &bull; Community Activity &bull;
        </h1>

        { !this.props.manifest.visits &&
          <div>
            <h1 className="text-secondary">?</h1> <br/ >
          </div>
        }

        { this.props.manifest.visits &&
          <div>
            <h4 className="text-primary">
              Visits({this.props.manifest.visits})
            </h4>
              <h4 className="text-primary">
                Saved Images({this.props.manifest.images_saved})
              </h4>
              <h4 className="text-primary">
                Images Viewed({this.props.manifest.images_viewed})
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

      </div>
    )
  }

}
