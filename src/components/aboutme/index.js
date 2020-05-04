import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

import { Link } from "gatsby"
import Img from "gatsby-image"

import SectionHeader from "../section-header"

const Aboutme = ({ aboutmeData, lang }) => {
  const {
    homePageAboutMeHeading,
    homePageAboutMeImage,
    homePageAboutMeContent,
    homePageAboutMeLinkText,
  } = aboutmeData.nodes[0]

  const theme = useContext(ThemeContext)

  const Section = styled.section`
    position: relative;
    padding-top: 4rem;
    padding-bottom: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `

  const Skew = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    -webkit-clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
    clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
    background-color: ${theme.colors.background};
    @media (min-width: 768px) {
      clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    }
    @media (min-width: 992px) {
      clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    }
  `

  const AboutInner = styled.div`
    position: relative;
    z-index: 2;
    margin-bottom: 4rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.widths["container-width"]};
    @media (min-width: 768px) {
      display: grid;
      grid-template:
        "i c"
        ". l";
      max-width: ${theme.widths["container-width-md"]};
    }
  `

  const AboutImg = styled(Img)`
    min-width: calc(320px - 2rem) !important;
    max-width: calc(360px - 2rem) !important;
    width: 100% !important;
    height: 500px !important;
    margin-bottom: ${theme.margins.bottom}rem;
    @media (min-width: 375px) {
      width: calc(375px - 2rem) !important;
    }
    @media (min-width: 411px) {
      margin-right: auto;
      margin-left: auto;
      display: flex !important;
    }
    @media (min-width: 768px) {
      grid-area: 1;
      width: 280px !important;
      height: 430px !important;
    }
    @media (min-width: 992px) {
      width: 500px !important;
      height: 500px !important;
    }
  `

  const Content = styled.div`
    h3 {
      font-size: calc(${theme.fontSizes["body-small"]}rem * 1.5);
      margin-top: ${theme.margins.top}rem;
      &:nth-of-type(1) {
        margin-top: 0;
      }
    }
    p {
      font-size: ${theme.fontSizes.body}rem;
    }
    @media (min-width: 768px) {
      padding-left: calc(${theme.paddings.left}rem * 3);
      grid-area: c;
      h3 {
        margin-top: 2rem;
        font-size: calc(${theme.fontSizes["body-small"]}rem * 1.8);
      }
    }
  `
  const SectionFooter = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    max-width: ${theme.widths["container-width"]};
    margin-top: 0;
    z-index: 2;
    position: relative;
    justify-content: center;
    @media (min-width: 768px) {
      max-width: ${theme.widths["container-width-md"]};
      text-align: center;
      justify-content: center;
      margin-top: 3rem;
    }
    @media (min-width: 1025px) {
      flex-direction: row;
      max-width: ${theme.widths["container-width-lg"]};
    }
  `

  const A = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    color: #aa5d00;
    border: 1px solid #aa5d00;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    text-align: center;
    width: 100%;
    max-width: 375px;
    &:hover,
    &:focus {
      background-color: #aa5d00;
      border-color: #aa5d00;
      color: #fff;
    }
  `

  return (
    <Section>
      <Skew />
      <SectionHeader title={homePageAboutMeHeading} />
      <AboutInner>
        <AboutImg
          fixed={homePageAboutMeImage.fixed}
          alt={homePageAboutMeImage.description}
          loading="lazy"
        />
        <Content
          dangerouslySetInnerHTML={{
            __html: homePageAboutMeContent.childMarkdownRemark.html,
          }}
        ></Content>
      </AboutInner>
      <SectionFooter>
        <A to={lang === "de" ? "/uber-mich" : "/en/about-me"}>
          {homePageAboutMeLinkText}
        </A>
      </SectionFooter>
    </Section>
  )
}

export default Aboutme
