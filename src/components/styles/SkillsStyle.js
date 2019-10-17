import styled from 'styled-components'

const SkillsStyle = styled.section`
   background: linear-gradient(90deg, #fff 85%, rgba(242, 251, 253, 0) 100%);
   width: 100%;
   z-index: 100;
   padding: 180px 2%;
   position: relative;
   z-index: 1;
   @media screen and (max-width: 800px){
        padding-right: 0;
    }
   h3:first-of-type, h5{
    color: ${props => props.theme.red};
    font-size: 5rem;
    font-weight: 500;
    width: 50%;
    margin: 0 auto 15px auto;
    text-align: center;
        @media screen and (max-width: 1500px){
           font-size: 3.5rem;
           width: 100%;
        }
    }
    h5{
        font-size: 3rem;
        font-weight: 400;
        @media screen and (max-width: 1500px){
           font-size: 2.5rem;
           width: 100%;
        }
    }
    .SkillsContainer{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 2%;
        span{
          padding: 2% 5% 0 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: fit-content;
          @media screen and (max-width: 800px){
               width: 100%;
               padding: 5% 0 0 0;
          }
          p{
            font-size: 4rem;
            margin-right: 20px;
            color: ${props => props.theme.red};
            @media screen and (max-width: 1500px){
               font-size: 3rem;
               margin: 5px 5px 5px 0;
            }
            @media screen and (max-width: 800px){
               font-size: 2.2rem;
               margin: 5px 5px 5px 0;
            }
           }
           a{
               display: flex;
               position: relative;
               width: fit-content;
               justify-content: center;
               align-items: center;
            img{
               margin-right: 10px;
               width: 90%;
               @media screen and (max-width: 1400px){
                   margin-right: 0;
                   width: 70%;
                   height: auto;
                   /* transform: scale(0.7) */
               }
               @media screen and (max-width: 500px){
                    width: 60%;
                   /* transform: scale(0.6) */
               }
           }
           }
        }
    }
`

export default SkillsStyle