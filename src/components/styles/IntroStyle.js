import styled from 'styled-components'
import MainSpotXL from "../../images/MainSpots/MainSpotXL.svg"
import MainSpotL from "../../images/MainSpots/MainSpotL.svg"
import MainSpotM from "../../images/MainSpots/MainSpotM.svg"
import MainSpotS from "../../images/MainSpots/MainSpotS.svg"
import MainSpotXS from "../../images/MainSpots/MainSpotXS.svg"

const IntroStyle = styled.section`
   background-image: url(${MainSpotXL});
   background-repeat: no-repeat;
   background-size: contain; 
   margin-top: -1%;
   margin-left: -0.3%;
   width: 85vw;
   height: 150vh;
   z-index: 100;
   padding-top: 5%;
   min-width: 1360px;
   min-height: 1629px;
   .GuyName{
    display: flex;
    align-items: center;
    h1{
    font-weight: 600;
    font-size: 7rem;
    width: 50%;
    margin-left: 8%;
    margin-top: 5%;
   }
  .gatsby-image-wrapper{
    height: 43%;
    width: 43%;
    max-height: 1200px;
    max-width: 1200px;
   } 
   }
   .IntroWords{
    font-style: normal;
    font-weight: 500;
    font-size: 3.5rem;
    line-height: 60px;
    padding-left: 5%;
    padding-top: 7%;
    .mobile{
      display: none;
    }
   }
   @media screen and (max-width: 1450px){
    background-image: url(${MainSpotL});
    min-width: 1250px;
    min-height: 1380px;
    padding-top: 13%;
    .GuyName{
      h1{
        font-size: 5rem;
      }
    }
    .IntroWords{
        font-size: 2.5rem;
        line-height: 50px;
      }
   }
   @media screen and (max-width: 1250px){
    min-height: 1260px;
    .GuyName{
      h1{
        font-size: 4.5rem;
        margin-left: 5%;
      }
      .gatsby-image-wrapper{
        height: 40%;
        width: 40%;
      } 
    }
   }
   @media screen and (max-width: 1100px){
    background-image: url(${MainSpotM});
    min-width: 950px;
    min-height: 1380px;
    padding-top: 30%;
    .IntroWords{
      padding-top: 20%;
      padding-left: 5%;
      font-size: 2.3rem;
      line-height: 40px;
    }
   }
   @media screen and (max-width: 950px){
    min-width: 800px;
    min-height: 1200px;
    padding-top: 22%;
    margin-left: -0.5%;
    .GuyName{
      .gatsby-image-wrapper{
        height: 50%;
        width: 50%;
      } 
      h1{
        margin-left: 3%;
      }
    }
    .IntroWords{
      padding-left: 3%;
      font-size: 2rem;
      }
   }
   @media screen and (max-width: 800px){
    background-image: url(${MainSpotS});
    min-width: 680px;
    height: 1000px;
    padding-top: 30%;
    .GuyName{
      .gatsby-image-wrapper{
        height: 50%;
        width: 50%;
      } 
      h1{
        margin-left: 0;
        margin-top: 15%;
      }
    }
    .IntroWords{
      padding-top: 30%;
      padding-left: 3%;
      font-size: 1.8rem;
      line-height: 35px;
      }
   }
   @media screen and (max-width: 680px){
    background-image: url(${MainSpotS});
    height: 100%;
    min-height: 950px;
    padding-top: 0;
    .GuyName{
      max-width: 680px;
      flex-direction: column;
      align-items: stretch;
      padding-left: 5%;
      .gatsby-image-wrapper{
        height: 40%;
        width: 40%;
      } 
      h1{
        margin-left: 3%;
        margin-top: 5%;
      }
    }
    .IntroWords{
      padding-top: 8%;
      font-size: 1.6rem;
      line-height: 25px;
      .mobile{
        display: inline-block;
       }
      }
   }
   @media screen and (max-width: 530px){
    background-image: url(${MainSpotXS});
    min-height: 1000px;
    padding-top: 6%;
    .GuyName{
      padding-left: 3.5%;
      .gatsby-image-wrapper{
        height: 32%;
        width: 32%;
      } 
      h1{
        margin-left: 0;
        margin-top: 7%;
        font-size: 4rem;
      }
    }
    .IntroWords{
      padding-top: 22%;
      font-size: 1.55rem;
      line-height: 25px;
      padding-left: 1.5%;
      }
   }
   @media screen and (max-width: 374px){
    background-image: url(${MainSpotXS});
    min-height: 850px;
    padding-top: 4%;
    .GuyName{
      padding-left: 0;
      h1{
        padding-left: 1%;
        margin-top: 0;
      }
    }
    .IntroWords{
      padding-top: 19%;
      font-size: 1.5rem;
      line-height: 20px;
      padding-left: 1%;
      }
   }
`

export default IntroStyle;