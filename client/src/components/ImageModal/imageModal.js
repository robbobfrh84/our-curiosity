import React, { Component } from "react"
import './imageModal.sass'
import { Modal, Button } from 'react-bootstrap'
import API from "../../utils/API"


export default class ImageModal extends Component {

  state = {
    // show: false,
    // image: this.props.viewImage.image || {},
    history: this.props.history,
    // user: "",
    // userId: "",
    // sol: "?"
  }

  // componentWillUpdate(props){
  //   console.log(this.props, props)
  //   this.setState({viewImage: this.props.viewImage})
  // }

  // componentWillReceiveProps(props){
  //   console.log(this.props, props)
  //   this.setState({viewImage: this.props.viewImage})
  // }

  saveImage = () => {

    const userImage = {
      image: {
        name: "img_"+this.state.image.id,
        sol: this.state.sol,
        image: this.state.image
      },
      id: this.state.userId
    }

    if (this.state.userId && this.state.user) {
      API.saveUserImage(userImage)
        .then(payload=>{
          console.log('response payload to saveUser Image, ', payload)
          if (payload.data === "alreadySaved") {
            alert("😜You've already saved this Image")
            this.setState({ show: false })
          } else {
            alert("image saved")
            this.setState({ show: false })
          }
        })
        .catch(err => console.log(err))
    } else {
      alert("😶To save this image you must be logged In.\n\nWe'll redirect you back here after you've successfully logged in or signed up. 👍")
      this.state.history.push('/signin')
    }

  }

  render() {
    console.log(this.props.viewImage)
    return (
      <div>
        <div>
          <Modal size="xl"
            show={this.props.viewImage.show}
            onHide={this.props.handleClose}
            className="image-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>

              Image ID# {this.props.viewImage.id}

              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <img src={this.props.viewImage.img_src} className="image" alt="mars"/>

              <h5>
                Camera:
                <span className="right"> {this.props.viewImage.cameraName} </span>
              </h5>
              <hr />
              <h5>
                Martian days from landing(sol):
                <span className="right"> {this.props.viewImage.sol} </span>
              </h5>
              <hr />
              <h5>
                Date taken:
                <span className="right"> {this.props.viewImage.earth_date} </span>
              </h5>

            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" className="save-button"
                onClick={this.saveImage}
              >
                Save Image
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

      </div>
    )
  }
}
