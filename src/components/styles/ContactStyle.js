import styled from 'styled-components'
import TriangleRed from "../../images/TriangleRed.svg"
import OrangeWave from "../../images/OrangeWave.svg"
import FormTriangle from "../../images/FormTriangle.svg"
import FormHoverTriangle from "../../images/FormHoverTriangle.svg"

const ContactStyle = styled.section`
  background: linear-gradient(180deg, #DF2A61 0%, #F8981C 100%);
  position: relative;
  padding: 1% 5% 4% 5%;
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
    h3, h5, a{
        color: white;
        font-weight: 500;
        font-size: 5rem;
        @media screen and (max-width: 1500px){
            font-size: 3.5rem;
        }
    }
    form{
        max-width: 1200px;
        margin: 3% auto 0 auto;
        fieldset{
            border: none;
            div{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                @media screen and (max-width: 600px){
                    flex-direction: column;
                    align-items: center;
                }
                div{
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    width: 45%;
                    @media screen and (max-width: 600px){
                        width: 100%;
                    }
                }
                .textarea-wrapper{
                    width: 75%;
                    @media screen and (max-width: 600px){
                        width: 100%;
                    }
                }
                label{
                    color: white;
                    font-size: 3rem;
                    padding: 5% 0 5% 5%;
                    @media screen and (max-width: 1400px){
                        font-size: 2.2rem;
                    }
                    @media screen and (max-width: 600px){
                        font-size: 2rem;
                        padding-left: 0;
                    }
                }
                input, textarea{
                    border-radius: ${props => props.theme.smallRadius};
                    border: none;
                    background: white;
                    display: block;
                    font: 500 18px "Montserrat";
                    padding: 5%;  
                    @media screen and (max-width: 600px){
                        width: 100%;
                    }
                }
            }
            .submit-form{
                background-image: url(${FormTriangle});
                background-position: center;
                background-color: transparent;
                padding: 0;
                width: 87px;
                height: 87px;
                background-repeat: no-repeat;
                border: none;
                align-self: flex-end;
                cursor: pointer;
                transition: .3s;
                &:hover{
                    background-image: url(${FormHoverTriangle});
                }
                @media screen and (max-width: 600px){
                    align-self: center;
                    transform: scale(0.7);
                }
            }
        }
    }
    h5{
        margin-top: 4%;
        text-align: center;
    }
    .social{
        margin-top: 5%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        a{
            transition: 0.3s;
            &:hover{
            color: ${props => props.theme.blue};
           }
        }
        @media screen and (max-width: 600px){
            flex-direction: column;
            a{
                margin-top: 2%;
            }
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

export default ContactStyle