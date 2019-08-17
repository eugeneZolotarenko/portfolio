import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
// import styled from 'styled-components'

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

export default class GroupOfTriangles extends Component {
    render() {
        return (
            <>
            <ParallaxLayer offset={0.01} speed={-0.09}>
              <img className="TriangleBig" src={TriangleRedBig} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.02} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '90%'}}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.03} speed={-0.09}>
              <img className="TriangleBig" src={TriangleOrangeBig} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.06} speed={-0.1}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '83.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.09} speed={-0.1}>
              <img className="TriangleBig" src={TriangleBlueBig} style={{ display: 'block', marginLeft: '88%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.12} speed={-0.11}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '96.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.12} speed={-0.1}>
              <img className="TriangleMid" src={TriangleGreenMid} style={{ display: 'block', marginLeft: '79%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.18} speed={-0.11}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '94%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.19} speed={-0.11}>
              <img className="TriangleSmall" src={TriangleOrangeSmall} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '84%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.24} speed={-0.09}>
              <img className="TriangleMid" src={TriangleRedMid} style={{ display: 'block', marginLeft: '89%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.25} speed={-0.09}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.27} speed={-0.11}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '79%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.32} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleOrangeSmall} style={{ display: 'block',marginLeft: '93%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.33} speed={-0.1}>
              <img className="TriangleBig" src={TriangleGreenBig} style={{ display: 'block', marginLeft: '85%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.36} speed={-0.11}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '76%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.39} speed={-0.1}>
              <img className="TriangleBig" src={TriangleOrangeBig} style={{ display: 'block', marginLeft: '95%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.42} speed={-0.09}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '83.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.43} speed={-0.09}>
              <img className="TriangleMid" src={TriangleGreenMid} style={{ display: 'block', marginLeft: '90%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.49} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '87%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '98.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={-0.1}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '79%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.53} speed={-0.1}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '93%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.55} speed={-0.09}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.56} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleOrangeSmall} style={{ display: 'block', marginLeft: '84.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.61} speed={-0.1}>
              <img className="TriangleBig" src={TriangleBlueBig} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.62} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '81%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.62} speed={-0.09}>
              <img className="TriangleBig" src={TriangleRedBig} style={{ display: 'block', marginLeft: '88%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.67} speed={-0.1}>
              <img className="TriangleBig" src={TriangleGreenBig} style={{ display: 'block', marginLeft: '75%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.66} speed={-0.11}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '94.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.71} speed={-0.1}>
              <img className="TriangleMid" src={TriangleOrangeMid} style={{ display: 'block', marginLeft: '82%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.74} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleRedSmall} style={{ display: 'block', marginLeft: '88.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.73} speed={-0.1}>
              <img className="TriangleSmall" src={TriangleBlueSmall} style={{ display: 'block', marginLeft: '97%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.78} speed={-0.11}>
              <img className="TriangleSmall" src={TriangleGreenSmall} style={{ display: 'block', marginLeft: '79.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.81} speed={-0.09}>
              <img className="TriangleMid" src={TriangleBlueMid} style={{ display: 'block', marginLeft: '93.5%' }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.83} speed={-0.1}>
              <img className="TriangleMid" src={TriangleRedMid} style={{ display: 'block', marginLeft: '86.5%' }}/>
            </ParallaxLayer>
            </>
        )
    }
}
