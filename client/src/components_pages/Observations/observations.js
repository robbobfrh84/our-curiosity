import React, { Component } from "react"
import { Card } from "react-bootstrap"
import API from "../../utils/API"
import "./observations.sass"

export default class Obervations extends Component {

  constructor(props){
    super()
    this.state = {
      pageData: props.pageData,
      forWho: props.for,
      images: []
    }
  }

  componentDidMount(){
    this.getAllSavedImages()
  }

  getAllSavedImages = () => {
    API.getAllSavedImages()
      .then(res => {
        this.setState({images: res.data || []})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="observations">

        <br /><br />
        <h1 className="text-info">
          Community Observations
        </h1>
        <br /><br />

        <div className="card-container">
        {this.state.images.length > 0 &&
          this.state.images.map( (img, i) => (
            <Card className="card bg-secondary" key={i} >
              <Card.Img variant="top" src={img.image.img_src} />
              <Card.Body>
               <Card.Title>ID#{img.image.id}</Card.Title>
               <Card.Text>
                 Saved ({img.totalSaved}) times
               </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        </div>

        <br /><br />
      </div>
    )
  }

}

// {!this.state.images.length > 0 && <Footer /> }
// {this.state.images.length > 0 && <Footer force="true"/> }
