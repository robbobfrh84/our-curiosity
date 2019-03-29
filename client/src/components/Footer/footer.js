import React from "react"
import { Link } from 'react-router-dom'
import { Row, Col, Container, Button } from 'react-bootstrap'
import "./footer.sass"

export default class Footer extends React.Component {

  state = {
    date: "",
  }

  componentDidMount(){
    this.setState({ date: new Date().getFullYear() })
  }

  componentDidUpdate(props){
    const stickyFooter = document.getElementById("sticky-footer")
    stickyFooter.style.position = "fixed"
    setTimeout(()=>{
      this.setFooterPosition(stickyFooter)
    },20)
    setTimeout(()=>{
      this.setFooterPosition(stickyFooter)
    },10)
    setTimeout(()=>{
      this.setFooterPosition(stickyFooter)
    },500)
  }

  setFooterPosition(stickyFooter){ // Do some CRAZY stuff to keep footer in place for dynamic data-driven updates.
    const root = document.getElementById("root")
    if (window.innerHeight > root.clientHeight + stickyFooter.clientHeight) {
      stickyFooter.style.position = "fixed"
    } else {
      stickyFooter.style.position = "relative"
    }
  }

  render(){
    return (
      <div  id="sticky-footer" className="footer">

          <div className="button-bar bg-secondary">
            <Container>

              <Row>
                <Col md={3}>
                  <Link to="/home">
                    <Button variant="outline-primary"> Home </Button>
                  </Link>
                </Col>

                <Col md={3}>
                  <Link to="/images" >
                    <Button variant="outline-primary"> Image Log </Button>
                  </Link>
                </Col>

                <Col md={3}>
                  <Link to="/observations" >
                    <Button variant="outline-primary"> Observations </Button>
                  </Link>
                </Col>

                <Col md={3}>
                  <Link to="/signin" className="full">
                    <Button variant="outline-primary"> Sign In </Button>
                  </Link>
                </Col>

              </Row>
            </Container>
          </div>

          <p className="text-warning copy bg-light">
            &copy;{this.state.date} Pair Programmers
          </p>

      </div>
    )
  }
}
