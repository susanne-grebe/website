import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  margin: 50px 0 0 0;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
  
  @media (min-width: 768px) {
    max-height: 500px;
    width: 100%;
  }
  
  @media (min-width: 992px) {
    margin-top: 0;
    max-height: 650px;
  }
`

export const Image = ({ fluid }) => {
  return <StyledImage fluid={ fluid.fluid }/>
}