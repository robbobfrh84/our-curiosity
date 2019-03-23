import React, { Component } from "react"
import API from "../../utils/API"
import { InputGroup, FormControl, Container, Button, Row, Col } from 'react-bootstrap'
import "./signIn.sass"

export default class User extends Component {

  state = {
    pageData: this.props.pageData,
    history: this.props.history,
    site_state: this.props.site_state,
    updateUser: this.props.updateUser,
    userName: "",
    email: "",
    password: "",
    confirm: "",
    focus: "userName",
    isSignUp: "false"
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers(){
    API.getUsers()
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err))
  }

  toggleSignInUp = () => {
    this.setState({
      isSignUp: this.state.isSignUp === "false" ? "true" : "false",
      userName: "",
      email: "",
      password: "",
      confirm: "",
      focus: "userName",
    })

  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  createUser = (event) => {
    const { userName, password, email, isSignUp, confirm } = this.state
    if (isSignUp === "true") {
      if (confirm !== password) {
        alert("your password and your confirm password did not match")
        this.setState({password: "", confirm: ""})
      } else {
        API.createUser({ userName: userName, password: password, email: email })
          .then(res => {
            console.log('sucesssss')
            this.state.updateUser(res.data)
            this.state.history.goBack()
            // add user to site_state
          })
          .catch(err => {
            if (err) {
              console.log(err)
              alert("ERROR processing your sign up. "
              +"Maybe that user name is already being used?")
            }
          })
      }
    } else {
      API.signIn({ userName: userName, password: password})
        .then(res => {
          if (res.data && res.data.userName) {
            this.state.updateUser(res.data)
            this.state.history.goBack()
            // add user to site_state
          }
          if (res.data === "unknown") {
            alert("User unknown or incorrct password")
            this.setState({userName: "", password: ""})
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  }

  render(){
    return (
      <div className="signin">

        <Button onClick={this.state.history.goBack}
          className="back-btn"
          variant="outline text-secondary">
          Back
        </Button>

        <br />
        <h1 className="text-secondary">
          {this.state.pageData.title}
        </h1>
        <br />

        <Container>
          <Row className="justify-content-md-center">
            <Col lg="6">

              <InputGroup size="lg" className="input">
                <InputGroup.Prepend >
                  <InputGroup.Text id="inputGroup-sizing-lg"
                  className="bg-secondary text-primary input-label border-light" >
                    User Name:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="bg-light border-light"
                  name="userName"
                  onChange={this.handleInputChange}
                  value={this.state.userName}
                  autoFocus={this.state.focus === "userName"}
                />
              </InputGroup>

              {this.state.isSignUp === "true" &&
                <InputGroup size="lg" className="input">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg"
                      className="bg-secondary text-primary input-label border-light" >
                      Email:
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="bg-light border-light"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
              }

              <InputGroup size="lg" className="input">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg"
                    className="bg-secondary text-primary input-label border-light" >
                    Password:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="bg-light border-light"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  type="password"
                />
              </InputGroup>

              {this.state.isSignUp === "true" &&
                <InputGroup size="lg" className="input">
                  <FormControl
                    placeholder="...Confirm Password"
                    className="bg-light border-light"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleInputChange}
                    type="password"
                  />
                </InputGroup>
              }

              <hr/>

              <Button size="lg" variant="primary text-dark" className="w-100"
                onClick={this.createUser}>
                {this.state.isSignUp === "false" ? "Sign In" : "Sign Up" }
              </Button>


            </Col>
          </Row>
        </Container>

        <br />
        <hr />
        <br />

        <Button size="lg" variant="outline-primary text-dark" className="w-25"
          onClick={this.toggleSignInUp}>
          {this.state.isSignUp === "false" ? "New ? Sign Up" : "Already have an Account ? Sign In"}
        </Button>

        <br /><br />

      </div>
    )
  }

}
