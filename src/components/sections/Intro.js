import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import MainSpot from "../../images/main-spot.svg"
// import Guy from "../../images/guy.png"
import Guy from "../guy"

const Spot = styled.div`
   background-image: url(${MainSpot});
   background-repeat: no-repeat;
   background-size: contain; 
   width: 85vw;
   height: 150vh;
   z-index: 100;
   padding-top: 3.5%;
   .GuyName{
    display: flex;
    align-items: center;
    h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 79px;
    width: 30%;
    margin-left: 8%;
    margin-top: 5%;
   }
  .gatsby-image-wrapper{
    height: 43%;
    width: 43%;
    max-height: 1200px;
    max-width: 1200px;
   } 
   }
   .IntroWords{
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 60px;
    padding-left: 5%;
    padding-top: 7%;
   }
`

export default class StracturePage extends Component {
    render() {
        let parallax;
        return (
            <ParallaxLayer offset={0} speed={0.15}>
              <Spot>
                <div className="GuyName">
                  <Guy/>
                  <h1>Hi,<br/>I'm<br/>Eugene<br/>Zolotarenko</h1>
                </div>
                <h3 className="IntroWords">I'm passionate Front-end Developer<br/>& Designer. I design and code<br/>beautifully simple things, and I love<br/>what I do.</h3>
              </Spot>
            </ParallaxLayer>
        )
    }
}
