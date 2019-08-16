import React, { Component } from 'react'
import styled from 'styled-components'
import Triangles from "../Triangles"
import MainSpot from "../../images/main-spot.svg"

// const Spot = styled.div`
//    background-image: url(${MainSpot});
//    background-repeat: no-repeat;
//    background-size: contain; 
//    width: 85vw;
//    height: 150vh;
//    z-index: 1000;
// `

export default class Intro extends Component {
    render() {
        return (
            <>
            <Triangles/>
            </>
        )
    }
}
