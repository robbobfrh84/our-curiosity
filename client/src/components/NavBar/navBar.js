import React from "react"
import { Link } from "react-router-dom"
import "./navBar.sass"
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap'
import Mars from '../../images/mars.svg'
import UserIcon from '../../images/user-icon1.svg'


export default function NavBar(props) {

  return (
    <Navbar expand="lg" className="navbar bg-secondary" >
      <Navbar.Brand>
        <Link to="/" className="title">
          <span>
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
          <div className="spacer">
            <hr></hr>
          </div>
          <Link to="/images" >
            <Button variant="outline-primary noborder"> Image Log </Button>
          </Link>
          <div className="spacer">
            <hr></hr>
          </div>
          <Link to="/observations" >
            <Button variant="outline-primary noborder"> Obervations </Button>
          </Link>
          <div className="spacer">
            <hr></hr>
          </div>

            {(!props.site_state.user || props.site_state.user === "false") &&
              <Link to="/signin" className="full">
                <Button variant="outline-success bg-light">
                  Sign In
                </Button>
              </Link>
            }

            {(props.site_state.user && props.site_state.user !== "false") &&

              <Dropdown alignRight>

                <Dropdown.Toggle id="dropdown-basic" className="dropdown-box"
                  variant="outline-none text-white-bbb">
                  {props.site_state.user}
                  <span className="user-icon-container">
                    <img src={UserIcon} alt="UserIcon" className="user-icon"/>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-primary" title="Dropdown right">
                  <Link to="/observations" className="text-gray-444  dropdown-item" >
                      Saved Images
                  </Link>
                  <br />
                  <Dropdown.Item className="text-gray-444"
                    onClick={props.logout}>
                    Log Out
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item className="text-white" disabled>
                    {props.site_state.user}
                  </Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
            }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}
// 
// <Route exact path="/observations"
//   render={route => <Observations {...route}
//     pageData={props.app.rootData.pages.observations}
//     for="community"
//   />}
// />
