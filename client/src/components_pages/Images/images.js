import React, { Component } from "react"
import Footer from "../../components/Footer/footer.js"
import API from "../../utils/API"
import { InputGroup, FormControl, Container, Button, Row, Col, Card } from 'react-bootstrap'
import "./images.sass"
import ViewImage from "../../components/ViewImage/viewImage.js"

export default class Images extends Component {

  state = {
    site_state: this.props.site_state,
    history: this.props.history,
    pageData: this.props.pageData,
    sol: "1000",
    page: "1",
    images: [],
    viewImage: {}
  }

  findPage = () => {
    this.setState({viewImage: {}})
    API.findPage( this.state.sol, this.state.page)
      .then(res => {
        this.setState({images: res.data.images})
      })
      .catch(err => console.log(err))
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      viewImage: {}
    })
  }

  componentWillReceiveProps(p,z){
    this.setState({viewImage: {}})
  }

  viewImage = (image) => {
    const imageData = {
      image: image,
      user: this.state.site_state.user,
      userId: this.state.site_state.user_id,
      show: true,
      sol: this.state.sol
    }
    this.setState({viewImage: imageData})
  }

  render() {
    return (
      <div className="images">

        <br /><br />
        <h1 className="text-info">
          {this.state.pageData.title}
        </h1>
        <br /><br />

        <Container>
          <Row className="justify-content-md-center">
            <Col lg="6">

              <InputGroup size="lg" className="input">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg"
                    className="bg-secondary text-primary input-label" >
                    Sol:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="bg-light"
                  name="sol"
                  onChange={this.handleInputChange}
                  value={this.state.sol}
                />
              </InputGroup>

              <InputGroup size="lg" className="input">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg"
                    className="bg-secondary text-primary input-label" >
                    Page:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="bg-light"
                  name="page"
                  onChange={this.handleInputChange}
                  value={this.state.page}
                />
              </InputGroup>

              <Button size="lg" variant="success" className="w-100"
                onClick={this.findPage}>
                Find Images
              </Button>
            </Col>
          </Row>
        </Container>
        <br />

        <div className="card-container">
          {this.state.images.length > 0 &&
            this.state.images.map( (img, i) => (
              <Card className="card bg-secondary" key={img.id}>
                <Card.Img variant="top" src={img.img_src} />
                <Card.Body>
                 <Card.Title>Title</Card.Title>
                 <Card.Text>
                   ...text {img.id}
                 </Card.Text>
                 <Button variant="primary" onClick={()=>this.viewImage(img)}>View Image</Button>
                </Card.Body>
              </Card>
            ))
          }
        </div>

        <ViewImage
          viewImage={this.state.viewImage}
          history={this.state.history}
        />
        <br /><br />
        <Footer />
      </div>
    )
  }

}
