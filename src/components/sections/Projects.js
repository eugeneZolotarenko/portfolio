import React, { Component } from 'react'
import ProjectsStyle from '../styles/ProjectsStyle'
import SkillsStyle from '../styles/SkillsStyle'
import GroupOfTriangles from '../GroupOfTriangles'

import StoreWheelsLogo from "../../images/ProjectsPreviews/StoreWheelsLogo.svg"
import KazkaLogo from "../../images/ProjectsPreviews/KazkaLogo.svg"

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

import apollo from "../../images/Skills/apollo.svg"
import prisma from "../../images/Skills/prisma.svg"
import GraphqlYoga from "../../images/Skills/Graphql-yoga.svg"


export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          openPopup1: false,
          openPopup2: false,
          openPopup3: false
        };
        this.toOpenPopup1 = this.toOpenPopup1.bind(this);
        this.toOpenPopup2 = this.toOpenPopup2.bind(this);
        this.toOpenPopup3 = this.toOpenPopup3.bind(this);
    }
    toOpenPopup1() {
        this.setState({
          openPopup1: !this.state.openPopup1
        });
        document.documentElement.classList.toggle('noscroll');
    }
    toOpenPopup2() {
        this.setState({
          openPopup2: !this.state.openPopup2
        });
        document.documentElement.classList.toggle('noscroll');
    }
    toOpenPopup3() {
        this.setState({
          openPopup3: !this.state.openPopup3
        });
        document.documentElement.classList.toggle('noscroll');
    }
    render() {
        return (
               <ProjectsStyle>
                   <div className="blue-wave"/>
                   <h3>projects</h3>
                   <div className="projects-container">
                     <button onClick={this.toOpenPopup1} className="storeWheels-preview"><img alt="Store Wheels Logo" src={StoreWheelsLogo}/></button>
                     <button onClick={this.toOpenPopup2} className="kazka-preview"><img alt="Kazka Logo" src={KazkaLogo}/></button>
                     <button onClick={this.toOpenPopup3} className="portfolio-preview">Eugene<br/>Zolotarenko</button>
                   </div>
                   <div className={this.state.openPopup1 ? "popup popup-open storeWheels-popup" : "popup popup-close storeWheels-popup"}>
                   <div className="project-wrapper">
                          <GroupOfTriangles/>
                          <div className="project-content">
                              <div className="project-slider-btns">
                                <div className="project-btns">
                                    <button onClick={this.toOpenPopup1} className="close" href=""><span>close</span></button>
                                    <div>
                                       <a className="live" href="https://store--wheels.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span>live</span></a>
                                       <a className="code" href="https://github.com/eugeneZolotarenko/Store-Wheels" target="_blank" rel="noopener noreferrer"><span>code</span></a>
                                    </div>
                                </div>
                                </div>
                                <p className="about">This project introduced me to the world of web technologies with fancy interfaces and custom server side logics.<br/><br/>It is full stack online wheels store created with real credit checkout. Users can search, sell, add to cart and checkout their favourite items.<br/><br/>The application has five main models — Users, Items, Orders, CartItems, and OrderItems — all of which are relational.<br/><br/>The app also includes many server side bits including JWT authentication, permissions, sending email, uploading images, and charging credit cards.</p>
                                <h4>To create this project I used: </h4>
                                <h5>click on logo to read more...</h5>
                                <SkillsStyle>
                                <div className="SkillsContainer">
                                <span className="languages"><p>languages:</p><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><img alt="HTML5" src={html5}/></a><a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" rel="noopener noreferrer"><img alt="CSS3" src={css3}/></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src={js} alt= "Java Script"/></a><a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"><img alt="graphql" src={graphql}/></a></span>
                                  <span className="librieries"><p>library for interface:</p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img alt="react" src={react}/></a></span>
                                  <span className="routing"><p>The srever side rendering, routing and tooling:</p><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img alt="nextjs" src={nextjs}/></a></span>
                                  <span className="data-management"><p>for Data Management:</p><a href="https://www.apollographql.com/docs/react/" target="_blank" rel="noopener noreferrer"><img alt="Apollo" src={apollo}/></a></span>
                                  <span className="data-management"><p>Express | Graphql Server:</p><a href="https://github.com/prisma/graphql-yoga" target="_blank" rel="noopener noreferrer"><img alt="GraphQl-Yoga" src={GraphqlYoga}/></a></span>
                                  <span className="database"><p>Graphql Database interface:</p><a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer"><img alt="Prisma" src={prisma}/></a></span>
                                  <span className="prittyCss"><p>for prettier css:</p><a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer"><img alt="Styled Components" src={styledComp}/></a></span>
                                  <span className="control"><p>version-control system:</p><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img alt="GIT" src={git}/></a></span>
                                  <span className="design"><p>for design:</p><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"><img alt="Figma" src={figma}/></a><a href="https://www.adobe.com/pl/products/photoshop.html" target="_blank" rel="noopener noreferrer"><img alt="Photoshop" src={photoshop}/></a></span>
                                  <span className="codeEditor"><p>code editor:</p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img alt="Visual Studio Code" src={visualStudioCode}/></a></span>
                                </div>
                                </SkillsStyle>
                          </div>
                       </div>
                   </div>
                   <div className={this.state.openPopup2 ? "popup popup-open kazka-popup" : "popup popup-close kazka-popup"}>
                       <div className="project-wrapper">
                          <GroupOfTriangles/>
                          <div className="project-content">
                              <div className="project-slider-btns">
                                <div className="project-btns">
                                    <button onClick={this.toOpenPopup2} className="close" href=""><span>close</span></button>
                                    <div>
                                       <a className="live" href="https://bnvk-kazka.com/" target="_blank" rel="noopener noreferrer"><span>live</span></a>
                                       <a className="code" href="https://github.com/eugeneZolotarenko/Kazka" target="_blank" rel="noopener noreferrer"><span>code</span></a>
                                    </div>
                                </div>
                                </div>
                                <p className="about">This site was created for kindergarten / primary school in Ukraine. I tried to make the design interesting and unique, and I have added some features with css animations.<br/><br/>
                                I appreciate this project for the experience it gave me. I learned a lot of new things in css, html, jquery, Wordpress/php. This site has 5 different templates for categories of pages. Each template has a unique design and background photo.<br/><br/>
                                A lot of things I could make over in this project, if I created it now, but I had to make it so, to be able to make things better in the future.</p>
                                <h4>To create this project I used: </h4>
                                <h5>click on logo to read more...</h5>
                                <SkillsStyle>
                                <div className="SkillsContainer">
                                  <span className="languages"><p>languages:</p><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><img alt="HTML5" src={html5}/></a><a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" rel="noopener noreferrer"><img alt="CSS" src={css3}/></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img alt="Java Script" src={js}/></a></span>
                                  <span className="librieries"><p>libraries:</p><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><img alt="Jquery" src={jquery}/></a></span>
                                  <span className="cms"><p>CMS:</p><a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"><img alt="Wordpress" src={wordpress}/></a></span>
                                  <span className="prittyCss"><p>for prettier css:</p><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img alt="SASS" src={sass}/></a></span>
                                  <span className="design"><p>for design:</p><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"><img alt="Figma" src={figma}/></a><a href="https://www.adobe.com/pl/products/photoshop.html" target="_blank" rel="noopener noreferrer"><img alt="Photoshop" src={photoshop}/></a></span>
                                  <span className="codeEditor"><p>code editor:</p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img alt="Visual Studio Code" src={visualStudioCode}/></a></span>
                                </div>
                                </SkillsStyle>
                          </div>
                       </div>
                   </div>
                   <div className={this.state.openPopup3 ? "popup popup-open portfolio-popup" : "popup popup-close portfolio-popup"}>
                   <div className="project-wrapper">
                          <GroupOfTriangles/>
                          <div className="project-content">
                              <div className="project-slider-btns">
                                <div className="project-btns">
                                    <button onClick={this.toOpenPopup3} className="close" href=""><span>close</span></button>
                                    <div>
                                       <a className="code" href="https://github.com/eugeneZolotarenko/portfolio" target="_blank" rel="noopener noreferrer"><span>code</span></a>
                                    </div>
                                </div>
                                </div>
                                <p className="about">This Portfolio was created to be unique and interesting. Hopefully it will pleasantly surprise visitors.<br/><br/>This web site is powered by Gatsby.js. It follows the latest web standards, and it is optimized for maximum performance. Using Progressive Web App I have been able to make this already compact landing page even faster.<br/><br/>This site uses gatsby-image to efficiently lazy load images to speed up initial page load. It also gives us much better performance along with a smoother user experience.</p>
                                <h4>To create this project I used: </h4>
                                <h5>click on logo to read more...</h5>
                                <SkillsStyle>
                                <div className="SkillsContainer">
                                <span className="languages"><p>languages:</p><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><img alt="html5" src={html5}/></a><a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" rel="noopener noreferrer"><img alt="css3" src={css3}/></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img alt="js" src={js}/></a></span>
                                <span className="librieries"><p>libraries:</p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img alt="react" src={react}/></a></span>
                                <span className="frameworks"><p>frameworks:</p><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"><img alt="gatsbyjs" src={gatsbyjs}/></a></span>
                                <span className="prittyCss"><p>for prettier css:</p><a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer"><img alt="Styled Components" src={styledComp}/></a></span>
                                <span className="control"><p>version-control system:</p><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img alt="GIT" src={git}/></a></span>
                                <span className="design"><p>for design:</p><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"><img alt="Figma" src={figma}/></a><a href="https://   www.adobe.com/pl/products/photoshop.html" target="_blank" rel="noopener noreferrer"><img alt="Photoshop" src={photoshop}/></a></span>
                                <span className="codeEditor"><p>code editor:</p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img alt="Visual Studio Code" src={visualStudioCode}/></a></span>
                                </div>
                                </SkillsStyle>
                          </div>
                       </div>
                    </div>                   
                   <div className="triangle-red"/>
                </ProjectsStyle>    
        )
    }
}
