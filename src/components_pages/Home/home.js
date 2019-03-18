import React from "react"
import Footer from "../../components/Footer/footer.js"
import Rover from '../../images/rover.svg'

import "./home.sass"

export default function Home(props) {

  return (
    <div className="home">

      <div className="imageContainer">
        <img src={Rover} alt="Rover" className="roverSVG"/>
      </div>

      <br /><br />
      <h3 className="text-warning">
        &bull; {props.rootData.website_subtitle} &bull;
      </h3>
      <br /><br />

      <Footer />

    </div>
  )

}
