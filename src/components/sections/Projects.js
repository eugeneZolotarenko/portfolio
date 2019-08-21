import React, { Component } from 'react'
import styled from 'styled-components'
import BlueWave from "../../images/BlueWave.svg"
import TriangleRed from "../../images/TriangleRed.svg"
import KazkaPreview from "../../images/ProjectsPreviews/KazkaPreview.svg"
import StoreWheelsPreview from "../../images/ProjectsPreviews/StoreWheelsPreview.svg"
import StoreWheelsLogo from "../../images/ProjectsPreviews/StoreWheelsLogo.svg"
import PortfolioPreview from "../../images/ProjectsPreviews/PortfolioPreview.svg"

const ProjectsStyle = styled.section`
  margin-top: 87px;
  background: linear-gradient(180deg, #05314E 0%, #DF2A61 100%);
  width: 100%;
  position: relative;
  padding: 1.5% 5%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  .BlueWave {
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
    .ProjectsContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10em 20em;
        margin-top: 5%;
        z-index: 200;
        button{
        height: 35vh;
        border: none;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        }
        .KazkaPreview{
            background-image: url(${KazkaPreview});
            color: white;
            font-size: 19rem;
            @media screen and (max-width: 800px){
                font-size: 11rem;
            }
        }
        .StoreWheelsPreview{
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
        .PortfolioPreview{
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
    .TriangleRed {
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
`


export default class Projects extends Component {
    render() {
        return (
               <ProjectsStyle>
                   <div className="BlueWave"/>
                   <h3>projects</h3>
                   <div className="ProjectsContainer">
                   <button className="StoreWheelsPreview"><img src={StoreWheelsLogo}/></button>
                     <button className="KazkaPreview">KAZKA</button>
                     <button className="PortfolioPreview">Eugene<br/>Zolotarenko</button>
                   </div>
                   <div className="TriangleRed"/>
                </ProjectsStyle>    
        )
    }
}
