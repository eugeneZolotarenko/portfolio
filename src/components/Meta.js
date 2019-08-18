import React from "react"
import { Helmet } from "react-helmet"
class Meta extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600,700,800"
      rel="stylesheet"
        />
    <title>Eugene Zolotarenko</title>
        </Helmet>
      </div>
    )
  }
}

export default Meta;