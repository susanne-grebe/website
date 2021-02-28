import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

export const CardImage = ({ image, noCustomHeight, noShadow }) => {
  const StyledImage = styled(Img)`
    grid-area: image;
    border-radius: ${ noShadow ? "0" : "10px" };
    box-shadow: ${ noShadow ? "0 0 0 rgba(0,0,0, 0%)" : "0 5px 10px rgba(0,0,0, 16%)" };
    margin: 20px 0;
    max-height: ${ noCustomHeight ? "" : "300px" };
    
    @media (min-width: 768px) {
      margin: 0;
    }
    
    @media (min-width: 992px) {
      max-height: ${ noCustomHeight ? "" : "275px" };
    }
  `

  return <StyledImage fluid={ image.fluid }/>

}