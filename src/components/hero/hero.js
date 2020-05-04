import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

import BackgroundImage from "gatsby-background-image"

const Hero = ({ heroData }) => {
  const {
    homePageHeroTitle,
    homePageHeroSubtitle,
    homePageHeroSlogan,
    homePageHeroBackgroundImage,
  } = heroData.nodes[0]

  const theme = useContext(ThemeContext)

  const Hero = styled(BackgroundImage)`
    width: 100%;
    height: 90vh;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  `

  const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: ${theme.colors.overlay};
  `

  const HeroInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: ${theme.paddings.left}rem;
    padding-right: ${theme.paddings.right}rem;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.widths["container-width"]};
    width: 100%;
    justify-content: center;
    height: 100%;
    z-index: 100;
    @media (min-width: 768px) {
      max-width: ${theme.widths["container-width-md"]};
      text-align: center;
    }
  `

  const HeroTitle = styled.h1`
    font-size: 1.4rem;
    z-index: 100;
    text-transform: capitalize;
    @media (min-width: 360px) {
      font-size: 1.6rem;
    }
    @media (min-width: 375px) {
      font-size: 1.9rem;
    }
    @media (min-width: 768px) {
      font-size: 3.5rem;
      line-height: 1.1;
    }
  `

  const HeroSubTitle = styled.span`
    font-size: 1.1rem;
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
    position: relative;
    display: inline-block;
    line-height: 1.2;
    z-index: 101;
    &:after {
      content: "";
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: ${theme.colors.background};
      bottom: 0;
      left: 0;
      @media (min-width: 768px) {
        left: 10%;
      }
    }
    @media (min-width: 360px) {
      font-size: 1.3rem;
    }
    @media (min-width: 375px) {
      font-size: 1.4rem;
    }
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  `

  const HeroSlogan = styled.p`
    font-size: 1rem;
    z-index: 100;
  `

  return (
    <Hero fluid={homePageHeroBackgroundImage.fluid} loading="lazy">
      <Overlay />
      <HeroInner>
        {homePageHeroTitle ? (
          <HeroTitle>
            {homePageHeroSubtitle ? (
              <HeroSubTitle>{homePageHeroSubtitle}</HeroSubTitle>
            ) : (
                ""
              )}
            <br />
            {homePageHeroTitle}
          </HeroTitle>
        ) : (
            ""
          )}
        {homePageHeroSlogan ? (
          <HeroSlogan>{homePageHeroSlogan}</HeroSlogan>
        ) : (
            ""
          )}
      </HeroInner>
    </Hero>
  )
}

export default Hero
