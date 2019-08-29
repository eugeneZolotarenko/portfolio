import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  display: flex;
  background-color: ${props => props.theme.blue};
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 5%;
  transition: background-color 0.5s, transform 0.6s;
  border-bottom-left-radius: ${props => props.theme.smallRadius};
  border-bottom-right-radius: ${props => props.theme.smallRadius};
  ul{
    width: 100%;
    display: flex;
    align-items: center;
    li{
        display: block;
        list-style: none;
        transition: 0.9s;
        @media screen and (min-width: 681px){
        &:first-of-type a{
            padding-left: 0;
        }
      }
        a{
            display: block;
            border: none;
            background: none;
            font-weight: 500;
            font-size: 2.4rem;
            line-height: 60px;
            transition: .3s;
            padding: 0 35px;
            color: white;
            transition: color 0.95s;
            cursor: pointer;
            &:hover{
                color: ${props => props.theme.red} !important;
            }
            @media screen and (max-width: 950px){
              font-size: 2rem;
              padding: 0 20px;
            }
        }
        .active{
          color: ${props => props.theme.red} !important;
        }
    }
    /* Mobile Menu 100vh */
    @media screen and (max-width: 680px){
        position: fixed;
        overflow-y: hidden;
        left: 0;
        top: 0;
        transition: 0.4s ease-in-out;
        transform: translateX(0);
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        height: 115vh;
        background: linear-gradient(0deg, ${props => props.theme.blue} 55%, ${props => props.theme.red} 100%);
    }
    /* End Mobile Menu 100vh */
  }
  @media screen and (max-width: 680px){
  .menu-close{
    transform: translateX(-150%);
    transition: 0.4s ease-in-out;
  }
}
  .logo{
        color: white;
        font-size: 2.4rem;
        display: flex;
        justify-content: flex-end;
        text-align: right;
        width: 100%;
        @media screen and (max-width: 680px){
          font-size: 1.9rem;
    }
  }
  .hamburger{
    outline: none;
    position: relative;
    z-index: 3000;
    .hamburger-box{
          .hamburger-inner{
            &::before, &::after{
              background-color: white;
            }
          }
        }
    span{
      span, &::before, &::after{
        background-color: white;
      }
    }
    @media screen and (min-width: 681px){
          display: none;
    }
  }
  @media screen and (max-width: 680px){
      padding: 0 5% 0 2%;
  }
`

export default Navigation