import React, { Component } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  height: 80px;
  z-index: 1000;
  ul{
    display: flex;
    li{
        list-style: none;
        button{
            border: none;
            background: none;
            font-weight: 500;
            font-size: 24px;
            line-height: 60px;
            transition: .3s;
            padding: 0 22%;
            &:hover{
                color: #DF2A61;
            }
        }
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
