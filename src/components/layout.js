import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from '../components/styles/GlobalStyle'
import "./hamburgers.min.css"


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
