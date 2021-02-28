import React, { useContext } from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { ThemeContext } from "styled-components"

export const Image = ({ fluid, overlay }) => {
  const theme = useContext(ThemeContext)
  const HeroImage = styled(BackgroundImage)`
    min-height: 50vh;
    background-position: center;
    background-size: cover;
    width: 100%;
    position: relative;
    @media (min-width: 768px) {
      min-height: 60vh;
    }
    @media (min-width: 992px) {
      position: absolute !important;
      background-attachment: fixed !important;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  `

  const StyledOverlay = styled.div`
    display: ${ overlay ? "flex" : "none" };
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${ theme.colors.overlay };
  `

  return (
    <HeroImage fluid={ fluid.fluid } loading="lazy">
      <StyledOverlay/>
    </HeroImage>
  )
}