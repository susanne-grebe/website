import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  max-width: 1024px;
  margin: 50px auto;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
  
  @media (min-width: 768px) {
    max-height: 500px;
  }
`

export const Image = ({ fluid }) => {
  return <StyledImage fluid={ fluid.fluid }/>
}