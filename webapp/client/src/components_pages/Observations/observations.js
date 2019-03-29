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
    let image= []
    for (var i = 0; i < img.length; i++) {
      img[i].image.totalSaved = img[i].totalSaved
      image.push(img[i].image)
    }
    this.setState({images: image})
  }

  render() {
    return (
      <div className="observations">

        <br /><br />
        <h1 className="text-info">

          &#x2729; Recently Saved Images &#x2729;

        </h1>
        <br />

        <ImagesContainer
          images={this.state.images}
          Root={this.props.Root}
          history={this.props.history}
          noSaveButton={true}
          bgcolor={"warning"}
        />

      </div>
    )
  }
}
