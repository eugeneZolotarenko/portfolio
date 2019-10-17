import React, { Component } from 'react'
import classnames from "classnames";
import { Link, animateScroll as scroll } from "react-scroll";
import Navigation from "./styles/NavStyle"
import { window } from 'browser-monads';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true,
          positionTop: true,
        };
        this.burgerClick = this.burgerClick.bind(this);
      }

      burgerClick() {
        this.setState({
          condition: !this.state.condition
        });
      }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.positionNavTop);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

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
              <button onClick={this.burgerClick} className={ this.state.condition ? "hamburger hamburger--emphatic is-active" : "hamburger hamburger--emphatic" } type="button">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
              </button>
                <ul className={ this.state.condition ? "menu-open" : "menu-close" }>
                  <li>
                    <Link
                    onClick={this.burgerClick}                     
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
                      onClick={this.burgerClick}                     
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
                      onClick={this.burgerClick}
                      activeClass="active"
                      className="skills"
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={500}
                      >
                        skills
                      </Link>
                    </li>
                    <li>
                      <Link
                      onClick={this.burgerClick}
                      activeClass="active"
                      className="contact"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
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
