import styled from 'styled-components'


import BlueWave from "../../images/BlueWave.svg"
import TriangleRed from "../../images/TriangleRed.svg"
import KazkaPreview from "../../images/ProjectsPreviews/KazkaPreview.svg"
import StoreWheelsPreview from "../../images/ProjectsPreviews/StoreWheelsPreview.svg"
import PortfolioPreview from "../../images/ProjectsPreviews/PortfolioPreview.svg"
import liveBtn from "../../images/ProjectBtns/liveBtn.svg"
import closeBtn from "../../images/ProjectBtns/closeBtn.svg"
import codeBtn from "../../images/ProjectBtns/codeBtn.svg"
import HoverUpBtn from "../../images/ProjectBtns/HoverUpBtn.svg"
import HoverRightBtn from "../../images/ProjectBtns/HoverRightBtn.svg"


const ProjectsStyle = styled.section`
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
            @media screen and (max-width: 800px){
                img{
                width: 90%;
                height: 90%;
                }
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
                background: linear-gradient(90deg, #FEFEFE 90%, rgba(254, 254, 254, 0.16) 100%);
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
              section{
                  background: none;
                  padding: 0;
                  div{
                      margin: 0;
                    span{
                      p{
                        width: fit-content;
                        align-self: center;
                        margin: 0;
                      }
                      img{
                          margin-left: 10px;
                        @media screen and (max-width: 650px){
                          transform: scale(0.7);
                        }
                      }
                    }
                  }
              }
              .about{
                margin-top: 120px;
                @media screen and (max-width: 650px){
                    margin-top: 60px;
                  }
              }
              p, h4, h5{
                font-size: 2.7rem;
                width: 90%;
                align-self: flex-start;
                @media screen and (max-width: 650px){
                    width: 95%;
                    font-size: 2rem;
                  }
                }
                h4{
                    margin-top: 20px;
                }
               h5{
                font-weight: 500;
                font-size: 2rem;
                margin-top: 10px;
                @media screen and (max-width: 650px){
                    font-size: 1.8rem;
                }
               }
            }
        }
    }
    .popup-close{
        transform: translateY(-350%);
    }
`

export default ProjectsStyle