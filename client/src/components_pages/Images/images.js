import React, { Component } from "react"
import API from "../../utils/API"
import { InputGroup, FormControl, Container, Button, Row, Col } from 'react-bootstrap'
import "./images.sass"
import ImagesContainer from "../../components/ImagesContainer/imagesContainer.js"

export default class Images extends Component {

  state = {
    history: this.props.history,
    sol: "1000",
    page: "1",
    images: [],
    viewImage: {}
  }

  componentDidMount(){
    const images = this.props.images
    const pageSaved = images.pages[images.sol+"_"+images.page]
    if (pageSaved) {
      this.setState({
        images: pageSaved,
        sol: images.sol,
        page: images.page
      })
    }
  }

  findPage = () => {
    const pageSaved = this.props.images.pages[this.state.sol+"_"+this.state.page]
    if (pageSaved) {
      this.setState({images: pageSaved})
    } else {
      API.findPage(this.state.sol, this.state.page)
        .then(res => {
          this.props.addPage({
            sol: this.state.sol,
            page: this.state.page,
            images: res.data.images
          })
          this.setState({images: res.data.images})
        })
        .catch(err => console.log(err))
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="images">
        <br /><br />
        <h1 className="text-info">

          Curiosity Photography

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

        <ImagesContainer
          images={this.state.images}
          userStatus={this.props.userStatus}
          sol={this.state.sol}
        />

      </div>
    )
  }
}
