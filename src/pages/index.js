import React from "react"
import styled, { ThemeProvider } from "styled-components";
import Layout from "../components/layout"
import Meta from "../components/Meta"
import Intro from "../components/sections/Intro"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"

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
    <Meta/>
    <Intro/>
    <Projects/>
    <Skills/>
  </Layout>
  </ThemeProvider>
)

export default IndexPage
