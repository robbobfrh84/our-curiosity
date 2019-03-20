import React from "react"
import { Button } from "react-bootstrap"

export default function SignIn(props){

  return (
    <div>
      <br /><br />
      <h1 className="text-info">
        {props.pageData.title}
      </h1>
      <br /><br />
      <Button onClick={props.history.goBack}> Go Back </Button>
    </div>
  )
}
