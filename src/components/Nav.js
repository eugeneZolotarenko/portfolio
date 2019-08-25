import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from "classnames";
import { Link, Element, animateScroll as scroll } from "react-scroll";

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
  transition: background-color 0.95s, transform 0.8s;
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
        &:first-of-type button{
            padding-left: 0;
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
        }
        .active{
          color: ${props => props.theme.red} !important;
        }
    }
    @media screen and (max-width: 680px){
        display: none;
    }
  }
  .logo{
        color: white;
        font-size: 2.4rem;
        display: flex;
        justify-content: flex-end;
        text-align: right;
        width: 100%;
    }
`

export default class Nav extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true,
          positionTop: true
        };
      }

      // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.positionNavTop);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  positionNavTop = () => {
    const currentScrollPos = window.pageYOffset;
    const positionTop =  currentScrollPos < 80;

    this.setState({
        positionTop
      });
  }

    render() {
        return (
            <Navigation className={classnames("navbar", { "navbar-hidden": !this.state.visible }, { "nav-top": this.state.positionTop })}>
                <ul>
                  <li>
                    <Link                     
                    activeClass="active"
                    className="intro"
                    to="intro"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                      intro
                    </Link>
                  </li>

                    <li>
                      <Link                     
                      activeClass="active"
                      className="projects"
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500}
                      >
                      projects
                      </Link>
                    </li>
                    <li>
                      <Link
                      activeClass="active"
                      className="skills"
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // offset={70}
                      >
                        skills
                      </Link>
                    </li>
                    <li>
                      <Link
                      activeClass="active"
                      className="contact"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // offset={-70}
                      >
                        contact
                      </Link>
                    </li>
                </ul>
                <div className="logo">Eugene Zolotarenko</div>
            </Navigation>
        )
    }
}
