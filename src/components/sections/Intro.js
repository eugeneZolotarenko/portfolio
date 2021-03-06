import React, { Component } from 'react'
import IntroStyle from "../styles/IntroStyle"
import Guy from "../guy"


export default class Intro extends Component {
    render() {
        return (
              <IntroStyle>
                <div className="GuyName">
                  <Guy/>
                  <h1>Hi,<br/>I'm<br/>Eugene<br/>Zolotarenko✌️</h1>
                </div>
                <h3 className="IntroWords">I'm passionate <br className="mobile"/>Front-end Developer<br/>& Designer. I code and design<br/>beautifully simple things, <br className="mobile"/>and I love<br/>what I do.</h3>
              </IntroStyle>
        )
    }
}
