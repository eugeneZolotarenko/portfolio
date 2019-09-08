import React, { Component } from 'react'
import SkillsStyle from '../styles/SkillsStyle'

import html5 from "../../images/Skills/html5.svg"
import css3 from "../../images/Skills/css3.svg"
import js from "../../images/Skills/js.svg"
import graphql from "../../images/Skills/graphql.svg"

import react from "../../images/Skills/react.svg"
import jquery from "../../images/Skills/jquery.svg"

import gatsbyjs from "../../images/Skills/gatsbyjs.svg"
import nextjs from "../../images/Skills/nextjs.svg"

import wordpress from "../../images/Skills/wordpress.svg"

import visualStudioCode from "../../images/Skills/visualStudioCode.svg"

import sass from "../../images/Skills/sass.svg"
import styledComp from "../../images/Skills/styledComp.svg"

import figma from "../../images/Skills/figma.svg"
import photoshop from "../../images/Skills/photoshop.svg"

import git from "../../images/Skills/git.svg"



export default class Skills extends Component {
    render() {
        return (
            <SkillsStyle>
                <h3>to get things done, I use...</h3>
                <h5>click on logo to read more...</h5>
                <div className="SkillsContainer">
                  <span className="languages"><p>languages:</p><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><img alt="html5" src={html5}/></a><a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" rel="noopener noreferrer"><img alt="css3" src={css3}/></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img alt="js" src={js}/></a><a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"><img alt="graphql" src={graphql}/></a></span>
                  <span className="librieries"><p>libraries:</p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img alt="react" src={react}/></a><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><img alt="jquery" src={jquery}/></a></span>
                  <span className="frameworks"><p>frameworks:</p><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"><img alt="gatsbyjs" src={gatsbyjs}/></a><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img alt="nextjs" src={nextjs}/></a></span>
                  <span className="cms"><p>CMS:</p><a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"><img alt="wordpress" src={wordpress}/></a></span>
                  <span className="prittyCss"><p>for prettier css:</p><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img alt="SASS" src={sass}/></a><a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer"><img alt="Styled Components" src={styledComp}/></a></span>
                  <span className="control"><p>version-control system:</p><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img alt="GIT" src={git}/></a></span>
                  <span className="design"><p>for design:</p><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"><img alt="Figma" src={figma}/></a><a href="https://www.adobe.com/pl/products/photoshop.html" target="_blank" rel="noopener noreferrer"><img alt="Photoshop" src={photoshop}/></a></span>
                  <span className="codeEditor"><p>code editor:</p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img alt="Visual Studio Code" src={visualStudioCode}/></a></span>
                </div>
            </SkillsStyle>
        )
    }
}
