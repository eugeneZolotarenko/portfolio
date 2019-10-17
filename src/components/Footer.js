import React, { Component } from 'react'
import styled from 'styled-components'
import Laptop from "./laptop"

const FooterStyle = styled.section`
  padding: 200px 5% 150px 5%;
  position: relative;
  display: flex;
  @media screen and (max-width: 500px){
    padding: 100px 5% 50px 5%;;
    }
  p{
      font-size: 3rem;
      width: 80%;
      @media screen and (max-width: 1500px){
        font-size: 2rem;
       }
  }
  .gatsby-image-wrapper{
    width: 25%;
    max-width: 500px;
    position: absolute !important;
    bottom: 0%;
    right: 2%;
    z-index: 1000;
    } 
`

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <p>developed & designed by Eugene Zolotarenko</p>
                <Laptop/>
            </FooterStyle>
        )
    }
}
