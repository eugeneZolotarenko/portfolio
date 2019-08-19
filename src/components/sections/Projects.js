import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import BlueWave from "../../images/BlueWave.svg"

const ProjectsStyle = styled.section`
  background: linear-gradient(180deg, #05314E 0%, #DF2A61 100%);
  min-height: 1000px;
  width: 100%;
  position: relative;
  .BlueWave {
      background-image: url(${BlueWave});
      background-repeat: repeat-x;
      width: 100%;
      height: 87px;
      position: absolute;
      top: calc(0% - 78px);
      left: 0;
    }
`


export default class Projects extends Component {
    render() {
        return (
            <>
            <ParallaxLayer className="ProjectsHeightL" offset={1} speed={0.7}>
               <ProjectsStyle>
                   <div className="BlueWave"/>
                   <h3>projects</h3>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                </ProjectsStyle>    
            </ParallaxLayer>
            <ParallaxLayer className="ProjectsHeightS" offset={2} speed={0.7}>
                <ProjectsStyle>
                    <div className="BlueWave"/>
                    <h3>projects</h3>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </ProjectsStyle>    
            </ParallaxLayer>
            </>
        )
    }
}
