import React, { Component } from 'react'
import styled from 'styled-components'
import Laptop from "../laptop"

import html5 from "../../images/Skills/html5.svg"
import css3 from "../../images/Skills/css3.svg"
import js from "../../images/Skills/js.svg"
import graphql from "../../images/Skills/graphql.svg"

import react from "../../images/Skills/react.svg"
import jquery from "../../images/Skills/jquery.svg"

import gatsbyjs from "../../images/Skills/gatsbyjs.svg"

import wordpress from "../../images/Skills/wordpress.svg"

import visualStudioCode from "../../images/Skills/visualStudioCode.svg"

import sass from "../../images/Skills/sass.svg"
import styledComp from "../../images/Skills/styledComp.svg"

import figma from "../../images/Skills/figma.svg"
import photoshop from "../../images/Skills/photoshop.svg"

import git from "../../images/Skills/git.svg"


const SkillsStyle = styled.section`
   background: linear-gradient(90deg, #F2FBFD 60%, rgba(242, 251, 253, 0) 90%);
   width: 100%;
   /* min-height: 100vh; */
   z-index: 100;
   padding: 150px 4%;
   position: relative;
   z-index: 1;
   h3:first-of-type{
    color: ${props => props.theme.red};
    font-size: 5rem;
    font-weight: 500;
    width: 50%;
    margin: 0 auto;
    }
    .SkillsContainer{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin-top: 2%;
        span{
          padding: 2% 5% 0 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: fit-content;
          p{
            font-size: 4rem;
            margin-right: 20px;
            color: ${props => props.theme.red};
           }
           img{
               margin-right: 10px;
           }
        }
    }

    .gatsby-image-wrapper{
    /* height: 40%; */
    width: 35%;
    position: absolute !important;
    bottom: -15%;
    right: 2%;
    } 
`

export default class Skills extends Component {
    render() {
        return (
            <SkillsStyle>
                <Laptop/>
                <h3>to get things done, I use...</h3>
                <div className="SkillsContainer">
                  <span className="lenguages"><p>lenguages:</p><img src={html5}/><img src={css3}/><img src={js}/><img src={graphql}/></span>
                  <span className="labrieries"><p>labrieries:</p><img src={react}/><img src={jquery}/></span>
                  <span className="frameworks"><p>frameworks:</p><img src={gatsbyjs}/></span>
                  <span className="cms"><p>CMS:</p><img src={wordpress}/></span>
                  <span className="codeEditor"><p>code editor:</p><img src={visualStudioCode}/></span>
                  <span className="prittyCss"><p>for prettier css:</p><img src={sass}/><img src={styledComp}/></span>
                  <span className="design"><p>for design:</p><img src={figma}/><img src={photoshop}/></span>
                  <span className="control"><p>version-control system:</p><img src={git}/></span>
                </div>
            </SkillsStyle>
        )
    }
}
