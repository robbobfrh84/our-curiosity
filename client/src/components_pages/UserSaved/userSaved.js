import React, { Component } from "react"
import API from "../../utils/API"
import ImagesContainer from "../../components/ImagesContainer/imagesContainer.js"
import "./userSaved.scss"

export default class Obervations extends Component {

  constructor(props){
    super(props)
    this.state = {
      images: [],
      block: false
    }
  }

  componentDidMount(){
    this.getAllUserSaved()
  }

  componentWillReceiveProps(){
    this.getAllUserSaved()
  }

  getAllUserSaved = () => {
    const user = this.props.Root("READ", "userStatus")
    if (user.userName && user._id && !this.state.block) {
      this.setState({block: true})
      API.signIn(user)
        .then(res => {
          this.curateImages(res.data.savedImages)
        })
        .catch(err => console.log(err))
        .finally(()=>this.setState({block: false}))
    }
  }

  curateImages(img){
    this.setState({images: img.map(i=>i.image)})
  }

  render() {
    return (
      <div className="observations">

        <br /><br />
        <h1 className="text-info">

          &#x2742; Your Saved Images &#x2742;

        </h1>
        <br />

        <ImagesContainer
          images={this.state.images}
          Root={this.props.Root}
          noSaveButton={true}
          bgcolor={"light"}
        />

      </div>
    )
  }
}
