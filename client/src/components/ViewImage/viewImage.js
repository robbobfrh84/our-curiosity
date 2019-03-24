import React, { Component } from "react"
import './viewImage.sass'
import { Modal, Button } from 'react-bootstrap'
import API from "../../utils/API"


export default class ViewImage extends Component {

  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      show: false,
      image: this.props.viewImage,
      user: ""
    }
  }

  saveImage = () => {
    API.saveImage(this.state.image)
      .then(res=>{
        console.log(res)
      })
  }

  handleClose() {
    const obj = {...this.state.image}
    obj.show = false
    this.setState({ show: false, image: obj })
  }

  handleShow() {
    this.setState({ show: true })
  }

  componentWillReceiveProps(props) {
    if (props.viewImage.show) {
      this.handleShow()
      this.setState({
        image: props.viewImage.image,
        user: props.viewImage.user,
        show: props.viewImage.show
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
            <div>User: {this.state.image.user}</div>
            <div>Image ID: {this.state.image.id}</div>
            <img src={this.state.image.img_src} className="modal-image" alt="mars"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.saveImage}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
