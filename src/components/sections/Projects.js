import React, { Component } from 'react'
import styled from 'styled-components'
import BlueWave from "../../images/BlueWave.svg"
import TriangleRed from "../../images/TriangleRed.svg"
import KazkaPreview from "../../images/ProjectsPreviews/KazkaPreview.svg"
import StoreWheelsPreview from "../../images/ProjectsPreviews/StoreWheelsPreview.svg"
import StoreWheelsLogo from "../../images/ProjectsPreviews/StoreWheelsLogo.svg"
import PortfolioPreview from "../../images/ProjectsPreviews/PortfolioPreview.svg"
import Image from "../../images/image.jpg"
import GroupOfTriangles from '../GroupOfTriangles'

import liveBtn from "../../images/ProjectBtns/liveBtn.svg"
import closeBtn from "../../images/ProjectBtns/closeBtn.svg"
import codeBtn from "../../images/ProjectBtns/codeBtn.svg"
import HoverUpBtn from "../../images/ProjectBtns/HoverUpBtn.svg"
import HoverRightBtn from "../../images/ProjectBtns/HoverRightBtn.svg"



import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';

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
    .popup-open{
        transform: translateY(0);
    }
    .popup{
        position: fixed;
        background-color: white;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9000;
        display: flex;
        align-items: center;
        transition: 0.8s ease-in-out;
        .project-wrapper{
            padding: 1% 2%;
            height: 100%;
            width: 100%;
            overflow-y: auto;
            display: flex;
            z-index: 300;
            .kUOAvI{
                right: 2%;
            }
            &::before{
                content: "";
                width: 99%;
                height: 100%;
                background: linear-gradient(90deg, #FEFEFE 84.9%, rgba(254, 254, 254, 0.16) 100%);
                position: absolute;
                left: 0;
                top: 0;
                z-index: 99;
                @media screen and (max-width: 500px){
                    background: linear-gradient(90deg, #FEFEFE 91%, rgba(254, 254, 254, 0.16) 100%);
                }
            }
            .project-content{
                width: 100%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 2.5rem;
                z-index: 900;
                .project-slider-btns{
                    display: flex;
                    justify-content: space-around;
                    width: 80%;
                    @media screen and (max-width: 1100px){
                        width: 100%;
                    }
                    @media screen and (max-width: 650px){
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                    }
                    .slider{
                      height: 60%;
                      width: 60%;
                      border-radius: 10px;
                      @media screen and (max-width: 1400px){
                        width: 70%;
                      }
                      @media screen and (max-width: 1100px){
                        width: 80%;
                      }
                      @media screen and (max-width: 500px){
                        width: 100%;
                      }
                    }
                    .project-btns{
                        justify-self: flex-start;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding-bottom: 5%;
                        @media screen and (max-width: 650px){
                           flex-direction: row;
                           width: 80%;
                           padding-bottom: 7%;
                        }
                        div{
                        display: flex;
                        flex-direction: column;
                        justify-self: center;
                        @media screen and (max-width: 650px){
                           flex-direction: row;
                        }
                        }
                        a, button{
                            background-position: center;
                            background-repeat: no-repeat;
                            font-size: 2.5rem;
                            padding: 0;
                            width: 72px;
                            height: 72px;
                            border: none;
                            transition: .3s;
                            display: block;
                            text-decoration: none;
                            span{
                                display: block;
                                margin-top: 72px;
                                transition: .3s;
                                font-weight: 600;
                                text-align: center;
                            }
                            @media screen and (max-width: 1100px){
                                transform: scale(0.8)
                            }
                            @media screen and (max-width: 500px){
                                transform: scale(0.6)
                            }
                        }
                        .close{
                            background-image: url(${closeBtn});
                            background-color: transparent;
                            border: none;
                            cursor: pointer;
                            justify-self: flex-start;
                            &:hover{
                               background-image: url(${HoverUpBtn});
                               span{
                                   color: ${props => props.theme.green};
                               }
                            }
                        }
                        .live{
                            background-image: url(${liveBtn});
                            justify-self: flex-end;
                            span{
                                color: ${props => props.theme.red};
                            }
                        }
                        .code{
                            background-image: url(${codeBtn});
                            justify-self: flex-end;
                            span{
                                color: ${props => props.theme.orange};
                            }
                        }
                        .live, .code {
                            margin-top: 50px;
                            &:hover{
                               background-image: url(${HoverRightBtn});
                               span{
                                   color: ${props => props.theme.green};
                               }
                            }
                            @media screen and (max-width: 650px){
                                margin-top: 0;
                            }
                        }
                    }
              }
              p{
                font-size: 2.7rem;
                width: 85%;
                align-self: flex-start;
                &:first-of-type{
                    margin-top: 120px;
                }
                @media screen and (max-width: 650px){
                    /* margin-top: 50px; */
                    width: 95%;
                    font-size: 2rem;
                    &:first-of-type{
                       margin-top: 60px;
                    }
                  }
                }
            }
        }
    }
    .popup-close{
        transform: translateY(-350%);
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
        setTimeout(function(){ document.documentElement.classList.toggle('noscroll'); }, 400)
    }
    toOpenPopup2() {
        this.setState({
          openPopup2: !this.state.openPopup2
        });
        setTimeout(function(){ document.documentElement.classList.toggle('noscroll'); }, 400)
    }
    toOpenPopup3() {
        this.setState({
          openPopup3: !this.state.openPopup3
        });
        setTimeout(function(){ document.documentElement.classList.toggle('noscroll'); }, 400)
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
                   <div className={this.state.openPopup1 ? "popup popup-open storeWheels-popup" : "popup popup-close storeWheels-popup"}>
                   <div className="project-wrapper">
                          <GroupOfTriangles/>
                          <div className="project-content">
                              <div className="project-slider-btns">
                                <div className="project-btns">
                                    <button onClick={this.toOpenPopup1} className="close" href=""><span>close</span></button>
                                    <div>
                                       <a className="live" href="https://bnvk-kazka.com/" target="_blank"><span>live</span></a>
                                       <a className="code" href="https://github.com/eugeneZolotarenko/Kazka" target="_blank"><span>code</span></a>
                                    </div>
                                </div>
                                    <AwesomeSlider className="slider" cssModule={AwsSliderStyles}>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                    </AwesomeSlider>
                                </div>
                           <p>I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do.I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer.</p>
                           <p>I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do.I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer.</p>
                          </div>
                       </div>
                   </div>
                   <div className={this.state.openPopup2 ? "popup popup-open kazka-popup" : "popup popup-close kazka-popup"}>
                       <div className="project-wrapper">
                          <GroupOfTriangles/>
                          <div className="project-content">
                              <div className="project-slider-btns">
                                <div className="project-btns">
                                    <button onClick={this.toOpenPopup2} className="close" href=""><span>close</span></button>
                                    <div>
                                       <a className="live" href="https://bnvk-kazka.com/" target="_blank"><span>live</span></a>
                                       <a className="code" href="https://github.com/eugeneZolotarenko/Kazka" target="_blank"><span>code</span></a>
                                    </div>
                                </div>
                                    <AwesomeSlider className="slider" cssModule={AwsSliderStyles}>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                    </AwesomeSlider>
                                </div>
                           <p>I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do.I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer.</p>
                           <p>I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do.I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer.</p>
                          </div>
                       </div>
                   </div>
                   <div className={this.state.openPopup3 ? "popup popup-open portfolio-popup" : "popup popup-close portfolio-popup"}>
                   <div className="project-wrapper">
                          <GroupOfTriangles/>
                          <div className="project-content">
                              <div className="project-slider-btns">
                                <div className="project-btns">
                                    <button onClick={this.toOpenPopup3} className="close" href=""><span>close</span></button>
                                    <div>
                                       <a className="live" href="https://bnvk-kazka.com/" target="_blank"><span>live</span></a>
                                       <a className="code" href="https://github.com/eugeneZolotarenko/Kazka" target="_blank"><span>code</span></a>
                                    </div>
                                </div>
                                    <AwesomeSlider className="slider" cssModule={AwsSliderStyles}>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                       <div data-src={Image}/>
                                    </AwesomeSlider>
                                </div>
                           <p>I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do.I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer.</p>
                           <p>I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do.I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer. I design and code beautifully simple things, and I love what I do. I'm passionate Front-end Developer & Designer.</p>
                          </div>
                       </div>
                    </div>                   
                   <div className="triangle-red"/>
                </ProjectsStyle>    
        )
    }
}
