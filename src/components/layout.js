import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "./theme"

import "./styles/main.scss"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${ theme.colors.black };
    font-family: ${ theme.fonts.body };
    font-size: ${ theme.fontSizes.body }rem;
    font-weight: ${ theme.fontWeights.body };
    position: relative;
    
    @media (min-width: 768px) {
      font-size: ${ theme.fontSizes[ "body-large" ] }rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${ theme.fonts.headings };
    font-weight: ${ theme.fontWeights[ "headings-bold" ] };
  }
  
  p {
    margin-bottom: 15px;
  }

  a {
    color: #aa5d00;
    font-size: ${ theme.fontSizes.body };
    font-weight: ${ theme.fontWeights[ "body-bold" ] };
    transition: all 300ms ease-in-out;
    &:hover {
      color: ${ theme.colors[ "primary-active" ] };
      text-decoration: none !important;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
