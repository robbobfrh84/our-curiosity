import React from "react"
import { Link } from "react-router-dom"
import "./navBar.sass"
import { Navbar, Nav, Button } from 'react-bootstrap'
import Mars from '../../images/mars.svg'


export default function NavBar(props) {

  return (
    <Navbar expand="lg" className="navbar bg-secondary" >
      <Navbar.Brand>
        <Link to="/" className="title">
          <span className="imageContainer">
            <img src={Mars} alt="Mars" className="marsSVG"/>
          </span>
          {props.title}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"
        className="bg-primary"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>

          <Link to="/home">
            <Button variant="outline-primary noborder"> Home </Button>
          </Link>
          <div className="double-colon">: :</div>
          <Link to="/page2" >
            <Button variant="outline-primary noborder"> Image Log </Button>
          </Link>
          <div className="double-colon">: :</div>
          <Link to="/theme" >
            <Button variant="outline-primary noborder"> Obervations </Button>
          </Link>
          <div className="double-colon">: :</div>
          <Link to="/fullpage" className="full">
            <Button variant="outline-success bg-light"> Sign In </Button>
          </Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}
