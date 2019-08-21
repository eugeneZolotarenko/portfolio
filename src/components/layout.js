import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import GroupOfTriangles from './GroupOfTriangles'
import Nav from "./Nav"

import Header from "./header"
import "./layout.css"

const TrianglesContainer1 = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const TrianglesContainer2 = styled.div`
  position: absolute;
  right: 0;
  top: 17%;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const TrianglesContainer3 = styled.div`
  position: absolute;
  right: 0;
  top: 34%;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const TrianglesContainer4 = styled.div`
  position: absolute;
  right: 0;
  top: 51%;
  width: 100%;
  height: 100%;
  z-index: 0;
`

// const LayoutStyle = styled.div`
// display: flex;
// flex-direction: column;
// `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let parallax;
  return (
    <>
      <Nav/>
      <Parallax pages={5} ref={ref => parallax = ref}>
        <TrianglesContainer1>
          <GroupOfTriangles/>
        </TrianglesContainer1>
        <TrianglesContainer2>
          <GroupOfTriangles/>
        </TrianglesContainer2>
        <TrianglesContainer3>
          <GroupOfTriangles/>
        </TrianglesContainer3>
        <TrianglesContainer4>
          <GroupOfTriangles/>
        </TrianglesContainer4>
        <ParallaxLayer offset={0} speed={0.4}>
          <main>{children}</main>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
