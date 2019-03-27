import React, { Component } from "react"
import './viewImage.sass'
import { Modal, Button } from 'react-bootstrap'
import API from "../../utils/API"


export default class ViewImage extends Component {

  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      show: false,
      image: this.props.viewImage,
      history: this.props.history,
      user: "",
      userId: "",
      sol: "?"
    }
  }

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

  handleClose() {
    const obj = {...this.state.image}
    obj.show = false
    this.setState({ show: false, image: obj })
  }

  handleShow() {
    this.setState({ show: true })
  }

  componentWillReceiveProps = (props,x) => {
    if (props.viewImage.show) {
      this.handleShow()
      this.setState({
        image: props.viewImage.image,
        user: props.viewImage.user,
        userId: props.viewImage.userId,
        show: props.viewImage.show,
        sol: props.viewImage.sol
      })
    }
  }

  render() {
    return (
      <div>
        <Modal size="xl" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
            Date taken: {this.state.image.earth_date}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>User: {this.state.user}</div>
            <div>Image ID: {this.state.image.id}</div>
            <img src={this.state.image.img_src} className="modal-image" alt="mars"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.saveImage}>
              Save Image
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
