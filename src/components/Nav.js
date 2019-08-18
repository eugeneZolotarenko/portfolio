import React, { Component } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  height: 80px;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  ul{
    width: 100%;
    position: fixed;
    display: flex;
    padding-left: 3%;
    li{
        list-style: none;
        button{
            border: none;
            background: none;
            font-weight: 500;
            font-size: 2.4rem;
            line-height: 60px;
            transition: .3s;
            padding: 0 25px;
            &:hover{
                color: ${props => props.theme.red};
            }
        }
    }
    @media screen and (max-width: 680px){
        display: none;
    }
  }
`

export default class Nav extends Component {
    render() {
        return (
            <Navigation>
                <ul>
                    <li><button>intro</button></li>
                    <li><button>projects</button></li>
                    <li><button>skills</button></li>
                    <li><button>contact</button></li>
                </ul>
            </Navigation>
        )
    }
}
