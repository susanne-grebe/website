import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"

import "./styles/main.scss"
import { theme } from "./theme"
import { createGlobalStyle } from "styled-components"
import CookieConsent from "react-cookie-consent"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.body}rem;
    font-weight: ${theme.fontWeights.body};
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.headings};
    font-weight: ${theme.fontWeights["headings-bold"]};
  }

  a {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights["body-bold"]};
    transition: all 300ms ease-in-out;
    &:hover {
      color: ${theme.colors["primary-active"]};
      text-decoration: none !important;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        Diese Website verwendet Cookies... Lesen Sie mehr über unsere{" "}
        <a href="/cookie-richtlinie">Cookie-Richtlinie</a>
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
