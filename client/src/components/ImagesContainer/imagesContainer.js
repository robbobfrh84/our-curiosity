import React, { Component } from "react"
import { Button, Card } from 'react-bootstrap'
import "./imagesContainer.sass"
import ImageModal from "../ImageModal/imageModal.js"

export default class ImagesContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      viewImage: {}
    }
    this.handleClose = this.handleClose.bind(this)
  }

  viewImage = (image) => {
    image.user = this.props.userStatus.userName
    image.userId = this.props.userStatus._id
    image.show = true
    image.sol = this.props.sol
    image.cameraName = image.camera.full_name
    this.setState({viewImage: image})
  }

  handleClose() {
    console.log('contaienr close')
    const viewImage = {...this.state.viewImage}
    viewImage.show = false
    this.setState({ viewImage })
  }

  render(){
    return (
      <div className="images-container">

        <div className="card-container">
          {this.props.images.length > 0 &&
            this.props.images.map( (img, i) => (
              <Card className="card bg-secondary" key={img.id}>

                <Card.Img variant="top"
                  src={img.img_src}
                />

                <Card.Body>

                  <div className="text-white">
                    {img.camera.full_name}
                  </div>

                  <div className="text-white-bbb">
                    ID#{img.id} | earth date: {img.earth_date}
                 </div>

                 <Button variant="primary" className="card-view-image-btn w-100"
                  onClick={()=>this.viewImage(img)}>
                    View Image
                  </Button>

                </Card.Body>
              </Card>
            ))
          }
        </div>

        <ImageModal
          viewImage={this.state.viewImage}
          history={this.state.history}
          handleClose={this.handleClose}
        />

        <br /><br />
      </div>
    )
  }
}
