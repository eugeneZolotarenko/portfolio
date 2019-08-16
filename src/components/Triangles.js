import React, { Component } from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import MainSpot from "../images/main-spot.svg"

import TriangleRedBig from "../images/Triangles/TriangleRedBig.svg"
import TriangleRedMid from "../images/Triangles/TriangleRedMid.svg"
import TriangleRedSmall from "../images/Triangles/TriangleRedSmall.svg"
import TriangleOrangeBig from "../images/Triangles/TriangleOrangeBig.svg"
import TriangleOrangeMid from "../images/Triangles/TriangleOrangeBig.svg"
import TriangleOrangeSmall from "../images/Triangles/TriangleOrangeSmall.svg"
import TriangleGreenBig from "../images/Triangles/TriangleGreenBig.svg"
import TriangleGreenSmall from "../images/Triangles/TriangleGreenSmall.svg"
import TriangleGreenMid from "../images/Triangles/TriangleGreenMid.svg"
import TriangleBlueBig from "../images/Triangles/TriangleBlueBig.svg"
import TriangleBlueMid from "../images/Triangles/TriangleBlueMid.svg"
import TriangleBlueSmall from "../images/Triangles/TriangleBlueSmall.svg"


const TrianglesContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  .TriangleBig{
    width: 5.1%;;
    height: 5.1%;
  }
  .TriangleMid{
    width: 3.6%;;
    height: 3.6%;
  }
  .TriangleSmall{
    width: 2.2%;;
    height: 2.2%;
  }
`
const Spot = styled.div`
   background-image: url(${MainSpot});
   background-repeat: no-repeat;
   background-size: contain; 
   width: 85vw;
   height: 150vh;
   z-index: 1000;
`

export default class Triangles extends Component {
    render() {
        let parallax;
        return (
          <TrianglesContainer>
            <Parallax pages={2} ref={ref => parallax = ref}>
            <ParallaxLayer offset={0.01} speed={-0.11}>
              <img className="TriangleBig" src={TriangleRedBig} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.02} speed={-0.12}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '90%'}}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.03} speed={-0.11}>
              <img className="TriangleBig" src={TriangleOrangeBig} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.06} speed={-0.12}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '83.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.09} speed={-0.13}>
              <img className="TriangleBig" src={TriangleBlueBig} style={{ display: 'block', marginLeft: '88%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.12} speed={-0.14}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '96.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.12} speed={-0.15}>
              <img className="TriangleMid" src={TriangleGreenMid} style={{ display: 'block', marginLeft: '79%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.18} speed={-0.19}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '94%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.19} speed={-0.19}>
              <img className="TriangleSmall" src={TriangleOrangeSmall} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={-0.18}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '84%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.24} speed={-0.13}>
              <img className="TriangleMid" src={TriangleRedMid} style={{ display: 'block', marginLeft: '89%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.25} speed={-0.18}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.27} speed={-0.18}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '79%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.32} speed={-0.14}>
              <img className="TriangleSmall" src={TriangleOrangeSmall} style={{ display: 'block',marginLeft: '93%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.33} speed={-0.13}>
              <img className="TriangleBig" src={TriangleGreenBig} style={{ display: 'block', marginLeft: '85%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.36} speed={-0.15}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '76%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.39} speed={-0.13}>
              <img className="TriangleBig" src={TriangleOrangeBig} style={{ display: 'block', marginLeft: '95%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.42} speed={-0.15}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '83.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.43} speed={-0.16}>
              <img className="TriangleMid" src={TriangleGreenMid} style={{ display: 'block', marginLeft: '90%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={-0.12}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '86.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={-0.12}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '98.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={-0.14}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '79%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.53} speed={-0.13}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '93%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.55} speed={-0.12}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.59} speed={-0.13}>
              <img className="TriangleSmall" src={TriangleOrangeSmall} style={{ display: 'block', marginLeft: '83%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.61} speed={-0.15}>
              <img className="TriangleBig" src={TriangleBlueBig} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.62} speed={-0.16}>
              <img className="TriangleBig" src={TriangleRedBig} style={{ display: 'block', marginLeft: '88%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.67} speed={-0.16}>
              <img className="TriangleBig" src={TriangleGreenBig} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.66} speed={-0.12}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '94.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.71} speed={-0.14}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '82%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.74} speed={-0.14}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '88.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.73} speed={-0.14}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.81} speed={-0.12}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '93.5%' }}/>
            </ParallaxLayer>
            {/* Main Spot */}
              <ParallaxLayer offset={0} speed={0.1}>
              <Spot />
            </ParallaxLayer>
            {/* End Main Spot */}
           </Parallax>
          </TrianglesContainer>
        )
    }
}
