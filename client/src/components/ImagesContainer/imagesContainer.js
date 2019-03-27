import React, { Component } from "react"
// import React from "react"
// import API from "../../utils/API"
import { Button, Card } from 'react-bootstrap'
import "./imagesContainer.sass"
import ViewImage from "../ViewImage/viewImage.js"

export default class ImagesContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      viewImage: {}
    }
    this.handleClose = this.handleClose.bind(this)
  }


  viewImage = (image) => {
    const imageData = {
      image: image,
      user: this.props.userStatus.userName,
      userId: this.props.userStatus._id,
      show: true,
      sol: this.props.sol
    }
    this.setState({viewImage: imageData})
  }

  handleClose() {
    console.log('contaienr close')
    const viewImage = {...this.state.viewImage}
    viewImage.show = false
    this.setState({ viewImage })
  }

  render(){
    return (
      <div className="image-container">

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

                 <Button variant="primary" className="w-100"
                  onClick={()=>this.viewImage(img)}>
                    View Image
                  </Button>

                </Card.Body>
              </Card>
            ))
          }
        </div>

        <ViewImage
          viewImage={this.state.viewImage}
          history={this.state.history}
          handleClose={this.handleClose}
        />

        <br /><br />
      </div>
    )
  }
}
