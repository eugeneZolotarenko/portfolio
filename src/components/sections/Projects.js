import React, { Component } from 'react'
import styled from 'styled-components'
import BlueWave from "../../images/BlueWave.svg"
import TriangleRed from "../../images/TriangleRed.svg"
import KazkaPreview from "../../images/ProjectsPreviews/KazkaPreview.svg"
import StoreWheelsPreview from "../../images/ProjectsPreviews/StoreWheelsPreview.svg"
import StoreWheelsLogo from "../../images/ProjectsPreviews/StoreWheelsLogo.svg"
import PortfolioPreview from "../../images/ProjectsPreviews/PortfolioPreview.svg"

const ProjectsStyle = styled.section`
@font-face {
  font-family: "DS Brushes";
  src: url("../fonts/ds_brushes.ttf");
  font-weight: normal;
  font-style: normal;
  }
  margin-top: 87px;
  background: linear-gradient(180deg, #05324F 0%, #DF2A61 100%);
  width: 100%;
  position: relative;
  padding: 1.5% 5%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  .blue-wave {
      background-image: url(${BlueWave});
      background-repeat: repeat-x;
      width: 100%;
      height: 87px;
      position: absolute;
      top: calc(0% - 78px);
      left: 0;
    }
    h3{
        width: 100%;
        color: white;
        font-size: 6rem;
        font-weight: 500;
    }
    .projects-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10em 20em;
        margin-top: 5%;
        z-index: 200;
        button{
        height: 35vh;
        min-height: 300px;
        border: none;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        transition: 0.3s;
        outline: none;
        cursor: pointer;
        &:hover{
            box-shadow: 0px 0px 15px 0px rgba(255,255,255,0.8);
        }
        &:focus{
            box-shadow: 0px 0px 15px 0px rgba(255,255,255,1);
        }
        }
        .kazka-preview{
            background-image: url(${KazkaPreview});
            color: white;
            font-size: 19rem;
            font-family: "DS Brushes";
            @media screen and (max-width: 800px){
                font-size: 11rem;
            }
        }
        .storeWheels-preview{
            background-image: url(${StoreWheelsPreview});
            color: #262527;
            font-weight: 600;
            @media screen and (max-width: 800px){
                font-size: 3rem;
            }
            strong{
                color: #FF268E;
            }
            img{
                width: 70%;
                height: 70%;
            }
        }
        .portfolio-preview{
            background-image: url(${PortfolioPreview});
            font-weight: 600;
            font-size: 6.5rem;
            @media screen and (max-width: 800px){
                font-size: 4rem;
            }
        }
        @media screen and (max-width: 1100px){
            margin-top: 15%;
            grid-template-columns: 1fr;
        }
    }
    .triangle-red {
      background-image: url(${TriangleRed});
      background-repeat: no-repeat;
      width: 100%;
      height: 128px;
      position: absolute;
      bottom: calc(0% - 128px);
      left: 0;
      z-index: 100;
    }
    @media screen and (max-width: 800px){
        h3{
            font-size: 4rem;
        }
    }
    /* .storeWheels-popup, .kazka-popup, .portfolio-popup{
        transition: 0.8s;
    } */
    .popup{
        position: fixed;
    }
    .popup-open{
        transition: 0.4s;
        background-color: white;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9000;
        font-size: 19rem;
        display: flex;
        align-items: center;
        transform: translateY(0);
        div{
            height: 100%;
            overflow-y: auto;
            p{
                margin:0;
            }
        }
    }
    .popup-close{
        transform: translateY(-150%);
    }
`


export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          openPopup1: false,
          openPopup2: false,
          openPopup3: false
        };
        this.toOpenPopup1 = this.toOpenPopup1.bind(this);
        this.toOpenPopup2 = this.toOpenPopup2.bind(this);
        this.toOpenPopup3 = this.toOpenPopup3.bind(this);
    }
    toOpenPopup1() {
        this.setState({
          openPopup1: !this.state.openPopup1
        });
        setTimeout(function(){ document.documentElement.classList.toggle('noscroll'); }, 200)
    }
    toOpenPopup2() {
        this.setState({
          openPopup2: !this.state.openPopup2
        });
        setTimeout(function(){ document.documentElement.classList.toggle('noscroll'); }, 200)
    }
    toOpenPopup3() {
        this.setState({
          openPopup3: !this.state.openPopup3
        });
        setTimeout(function(){ document.documentElement.classList.toggle('noscroll'); }, 200)
    }
    render() {
        return (
               <ProjectsStyle>
                   <div className="blue-wave"/>
                   <h3>projects</h3>
                   <div className="projects-container">
                     <button onClick={this.toOpenPopup1} className="storeWheels-preview"><img src={StoreWheelsLogo}/></button>
                     <button onClick={this.toOpenPopup2} className="kazka-preview">KAZKA</button>
                     <button onClick={this.toOpenPopup3} className="portfolio-preview">Eugene<br/>Zolotarenko</button>
                   </div>
                   <div className={this.state.openPopup1 ? "popup popup-open storeWheels-popup" : "popup popup-close storeWheels-popup"}></div>
                   <div className={this.state.openPopup2 ? "popup popup-open kazka-popup" : "popup popup-close kazka-popup"}></div>
                   <div className={this.state.openPopup3 ? "popup popup-open portfolio-popup" : "popup popup-close portfolio-popup"}><div><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p><p>fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf fdfshgfjh gkjfhlkg; jkhjghf gdfs daszf</p></div></div>                   
                   <div className="triangle-red"/>
                </ProjectsStyle>    
        )
    }
}
