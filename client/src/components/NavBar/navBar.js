import React from "react"
import { Link } from "react-router-dom"
import "./navBar.sass"
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap'
import Mars from '../../images/mars.svg'
import UserIcon from '../../images/user-icon1.svg'

export default function NavBar(props) {

  const userStatus = props.Root("READ", "userStatus")

  return (
    <Navbar expand="md" className="navbar bg-secondary" >

      <Navbar.Brand>
        <Link to="/" className="title">
          <span>
            <img src={Mars} alt="Mars" className="marsSVG"/>
          </span>

          Our Curiosty

        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"
        className="bg-primary"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <div className="spacer">
            <hr></hr>
          </div>
          <Link to="/images" className="navBar-btn">
            <Button variant="outline-primary noborder">

              Image Log

            </Button>
          </Link>
          <div className="spacer">
            <hr></hr>
          </div>
          <Link to="/observations" className="navBar-btn">
            <Button variant="outline-primary noborder">

              Obervations

            </Button>
          </Link>
          <div className="spacer">
            <hr></hr>
          </div>

            {(!userStatus.userName || userStatus.userName === "false") &&
              <Link to="/signin" className="full">
                <Button variant="outline-success bg-light">

                  Sign In

                </Button>
              </Link>
            }

            {(userStatus.userName && userStatus.userName !== "false") &&
              <Dropdown alignRight>

                <Dropdown.Toggle id="dropdown-basic" className="dropdown-box"
                  variant="outline-none text-white-bbb">

                  {userStatus.userName}

                  <span className="user-icon-container">
                    <img src={UserIcon} alt="UserIcon" className="user-icon"/>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-primary" title="Dropdown right">
                  <Link to="/usersaved" className="text-gray-444  dropdown-item" >

                    My Saved Images

                  </Link>
                  <br />
                  <Dropdown.Item className="text-gray-444"
                    onClick={()=>props.Root("SET_USER", "userStatus", {})}>
                    Log Out

                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item className="text-white" disabled>

                    {userStatus.userName}

                  </Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
            }

        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}
