import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

import { Link } from "gatsby"
import Img from "gatsby-image"

import SectionHeader from "../section-header"

const Mediation = ({ mediationData, lang }) => {
  const {
    homePageMediationHeading,
    homePageMediationSubHeading,
    homePageMediationContent,
    homePageMediationImage,
    homePageMediationFooterLinkText,
  } = mediationData.nodes[0]

  const theme = useContext(ThemeContext)

  const Section = styled.section`
    position: relative;
    padding-top: calc(${theme.paddings.top}rem * 2);
    padding-bottom: calc(${theme.paddings.bottom}rem * 2);
    padding-left: ${theme.paddings.left}rem;
    padding-right: ${theme.paddings.right}rem;
  `

  const BackgroundRight = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 50%;
    -webkit-clip-path: polygon(0 0, 100% 50%, 0 100%, 0 100%);
    clip-path: polygon(0 0, 100% 50%, 0 100%, 0 100%);
    background-color: ${theme.colors.background};
    @media (min-width: 992px) {
      height: 70%;
    }
  `

  const BackgroundLeft = styled.div`
    position: absolute;
    top: 30%;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 50%;
    clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0 50%);
    background-color: ${theme.colors.background};
    @media (min-width: 768px) {
      top: 50%;
    }
    @media (min-width: 992px) {
      height: 70%;
      top: 45%;
    }
  `

  const MediationInner = styled.div`
    position: relative;
    z-index: 2;
    margin-bottom: 4rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.widths["container-width"]};
    overflow: hidden;
    @media (min-width: 768px) {
      display: grid;
      grid-template: "c i";
      max-width: ${theme.widths["container-width-md"]};
    }
  `

  const MediationImg = styled(Img)`
    min-width: calc(320px - 2rem) !important;
    max-width: calc(360px - 2rem) !important;
    width: 100% !important;
    height: 350px !important;
    margin-bottom: ${theme.margins.bottom}rem;
    @media (min-width: 375px) {
      width: calc(100% - 2rem) !important;
      min-width: calc(375px - 2rem) !important;
      max-width: calc(411px - 2rem) !important;
    }
    @media (min-width: 411px) {
      margin-right: auto;
      margin-left: auto;
      display: flex !important;
      width: calc(100% - 2rem) !important;
      min-width: calc(411px - 2rem) !important;
      max-width: calc(500px - 2rem) !important;
    }
    @media (min-width: 768px) {
      grid-area: i;
      width: 280px !important;
      height: 430px !important;
    }
    @media (min-width: 992px) {
      min-width: 500px !important;
      height: 330px !important;
    }
    @media (min-width: 1024px) and (min-height: 768px) {
      max-width: 350px !important;
      min-width: 350px !important;
      width: 100% !important;
    }
  `

  const MediationContent = styled.div`
    width: 90%;
    h3 {
      font-size: calc(${theme.fontSizes["body-small"]}rem * 1.5);
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      &:nth-of-type(1) {
        margin-top: 0;
      }
    }
    p {
      font-size: ${theme.fontSizes.body}rem;
    }
    @media (min-width: 768px) {
      padding-right: calc(${theme.paddings.left}rem * 3);
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
    margin-top: 2rem;
    z-index: 2;
    position: relative;
    @media (min-width: 768px) {
      max-width: ${theme.widths["container-width-md"]};
      text-align: center;
      justify-content: center;
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
    &:hover,
    &:focus {
      background-color: #aa5d00;
      border-color: #aa5d00;
      color: #fff;
    }
  `

  return (
    <Section>
      <BackgroundRight />
      <BackgroundLeft />
      <SectionHeader
        title={homePageMediationHeading}
        subTitle={homePageMediationSubHeading}
      />
      <MediationInner>
        <MediationImg
          fixed={homePageMediationImage.fixed}
          alt={homePageMediationImage.description}
          loading="lazy"
        />
        <MediationContent
          dangerouslySetInnerHTML={{
            __html: homePageMediationContent.childMarkdownRemark.html,
          }}
        ></MediationContent>
      </MediationInner>
      <SectionFooter>
        <A
          to={
            lang === "de"
              ? "/mediation-im-raum-aachen"
              : "/en/mediation-in-the-aachen-area"
          }
        >
          {homePageMediationFooterLinkText}
        </A>
      </SectionFooter>
    </Section>
  )
}

export default Mediation
