import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import "./assets/main.scss"

const Layout = ({ children }) => {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
