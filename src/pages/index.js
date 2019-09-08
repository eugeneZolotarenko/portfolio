import React from "react"
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout"
import Meta from "../components/Meta"
import Intro from "../components/sections/Intro"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import GroupOfTriangles from '../components/GroupOfTriangles'
import { Element, animateScroll as scroll } from "react-scroll";

const theme = {
  blue: "#05324F",
  red: "#DF2A61",
  green: "#A6D046",
  orange: "#F8981C",
  bigRadius: "30px",
  smallRadius: "10px",
  maxWidth: "1210px",
  buttonShadow: "0px 0px 7px 0px #FF268E"
};


const IndexPage = () => (
  <ThemeProvider theme={theme}>
  <Layout>
    <GroupOfTriangles/>
    <Nav/> 
    <Meta/>
    <Element name="intro">
      <Intro/>
    </Element>
    <Element name="projects">
      <Projects/>
    </Element>
    <Element name="skills">
      <Skills/>
    </Element>
    <Element name="contact">
      <Contact/>
    </Element>
    <Footer/>
  </Layout>
  </ThemeProvider>
)

export default IndexPage
