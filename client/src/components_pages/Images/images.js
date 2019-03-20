import React from "react"
import Footer from "../../components/Footer/footer.js"

export default function Images(props) {

  return (
    <div>

      <br /><br />
      <h1 className="text-info">
        {props.pageData.title}
      </h1>
      <br /><br />

      <Footer />
    </div>
  )
}
