import React from "react"
import styled from "@emotion/styled"

import Img from "gatsby-image"

const LogoWrapper = styled(Img)`
  width: 60px;
  height: 35px;
  margin: 1.5rem 1rem 0 1rem;
`
const Logo = ({ logo }) => {
  return <LogoWrapper fluid={logo} alt="Susanne Grebe" />
}

export default Logo
