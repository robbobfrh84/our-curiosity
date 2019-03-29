import React from "react"
import './imageModal.sass'
import { Modal, Button } from 'react-bootstrap'

export default function ImageModal(props) {
  const viewImage = props.Root("READ", "lastViewedImage")
  return (
    <div>
      <div>
        <Modal size="xl"
          show={viewImage.show}
          onHide={props.handleClose}
          className="image-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>

            Image ID# {viewImage.id}

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <img src={viewImage.img_src} className="image" alt="mars"/>

            <h5>
              Camera:
              <span className="right"> {viewImage.cameraName} </span>
            </h5>
            <hr />
            <h5>
              Martian days from landing(sol):
              <span className="right"> {viewImage.sol} </span>
            </h5>
            <hr />
            <h5>
              Date taken:
              <span className="right"> {viewImage.earth_date} </span>
            </h5>

          </Modal.Body>
          {!props.noSaveButton &&
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" className="save-button"
                onClick={props.saveImage}
              >
                Save Image
              </Button>
            </Modal.Footer>
          }
        </Modal>
      </div>

    </div>
  )
}
