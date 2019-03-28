import React, { Component } from "react"
import { Button, Card } from 'react-bootstrap'
import "./imagesContainer.sass"
import ImageModal from "../ImageModal/imageModal.js"
import API from "../../utils/API"

export default class ImagesContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      viewImage: {},
      history: props.history,
    }
    this.handleClose = this.handleClose.bind(this)
    this.saveImage = this.saveImage.bind(this)
  }

  componentDidMount(){
    this.setState({viewImage: this.props.status("READ", "lastViewedImage")})
  }

  viewImage = (image) => {
    image.show = true
    image.sol = image.sol || this.props.sol
    image.cameraName = image.camera.full_name
    console.log(image.sol, this.props.sol)
    this.setState({viewImage: image})
    this.props.status("SET", "lastViewedImage", image)
  }

  handleClose() {
    const viewImage = {...this.state.viewImage}
    viewImage.show = false
    this.setState({ viewImage })
    this.props.status("SET", "lastViewedImage", viewImage)
  }

  saveImage() {
    const user = this.props.status("READ", "userStatus")
    const userImage = {
      image: {
        name: "img_"+this.state.viewImage.id,
        sol: this.state.viewImage.sol,
        image: this.state.viewImage
      },
      id: user._id
    }
    if (user._id && user.userName) {
      API.saveUserImage(userImage)
        .then(payload=>{
          if (payload.data === "alreadySaved") {
            alert("😜You've already saved this Image")
          } else {
            alert("image saved")
          }
          this.handleClose()
        })
        .catch(err => console.log(err))
    } else {
      alert("😶To save this image you must be logged In.\n\nWe'll redirect you back here after you've successfully logged in or signed up. 👍")
      this.state.history.push('/signin')
    }
  }

  render(){

    return (
      <div className="images-container">

        <div className="card-container">
          {this.props.images.length > 0 &&
            this.props.images.map( (img, i) => (
              <Card className={"card bg-"+this.props.bgcolor} key={i}>

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
          status={this.props.status}
          handleClose={this.handleClose}
          saveImage={this.saveImage}
          noSaveButton={this.props.noSaveButton}
        />

        <br /><br />
      </div>
    )
  }
}
