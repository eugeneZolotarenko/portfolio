import React, { Component } from 'react'
import styled from 'styled-components'
import TriangleRed from "../../images/TriangleRed.svg"
import OrangeWave from "../../images/OrangeWave.svg"

const ContactStyle = styled.section`
  background: linear-gradient(180deg, #DF2A61 0%, #F8981C 100%);
  position: relative;
  padding: 4% 5% 7% 5%;
  .TriangleRed {
      background-image: url(${TriangleRed});
      background-repeat: no-repeat;
      width: 100%;
      height: 128px;
      position: absolute;
      top: calc(0% - 128px);
      left: 0;
      z-index: 100;
      transform: rotateX(180deg);
      transform: scale(1, -1);
    }
    h3, h4, h5, a{
        color: white;
        font-weight: 500;
        font-size: 5rem;
        @media screen and (max-width: 900px){
            font-size: 3.5rem;
        }
    }
    h4{
        margin-top: 5%;
        text-align: right;
    }
    h5{
        margin-top: 5%;
        text-align: center;
    }
    .social{
        margin-top: 5%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width: 600px){
            flex-direction: column;
        }
    }
    .OrangeWave {
      background-image: url(${OrangeWave});
      background-repeat: repeat-x;
      width: 100%;
      height: 95px;
      position: absolute;
      bottom: calc(0% - 95px);
      left: 0;
    }
`

export default class contact extends Component {
    render() {
        return (
            <ContactStyle>
                <div className="TriangleRed"/>
                <h3>to contact with me</h3>
                <h4>just send me an <a href="mailto: zolotarenko.yevheniy1998@gmail.com">email</a></h4>
                <h5>or</h5>
                <div className="social">
                  <a href="https://github.com/eugeneZolotarenko">GitHub</a>
                  <a href="">LinkedIn</a>
                  <a href="https://www.facebook.com/profile.php?id=100014069172679">Facebook</a>
                </div>
                <div className="OrangeWave"/>
            </ContactStyle>
        )
    }
}
