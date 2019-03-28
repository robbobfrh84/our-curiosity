import React, { Component } from "react"
import API from "../../utils/API"
import ImagesContainer from "../../components/ImagesContainer/imagesContainer.js"
import "./observations.sass"

export default class Obervations extends Component {

  state = {
    images: []
  }

  componentDidMount(){
    this.getAllSavedImages()
  }

  getAllSavedImages = () => {
    API.getAllSavedImages()
      .then(res => {
        this.curateImages(res.data)
      })
      .catch(err => console.log(err))
  }

  curateImages(img){
    this.setState({images: img.map(i=>i.image)})
  }

  render() {
    return (
      <div className="observations">

        <ImagesContainer
          images={this.state.images}
          status={this.props.status}
          history={this.props.history}
          noSaveButton={true}
          bgcolor={"warning"}
        />

      </div>
    )
  }

}
