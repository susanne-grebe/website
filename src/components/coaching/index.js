import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

import { Link } from "gatsby"
import Img from "gatsby-image"

import SectionHeader from "../section-header"

const Coaching = ({ coachingData, lang }) => {
  const {
    homePageCoachingFirstColContent,
    homePageCoachingFirstColImage,
    homePageCoachingFirstColTitle,
    homePageCoachingFooterLinkText,
    homePageCoachingHeading,
    homePageCoachingSecondColContent,
    homePageCoachingSecondColImage,
    homePageCoachingSecondColTitle,
    homePageCoachingThirdColContent,
    homePageCoachingThirdColImage,
    homePageCoachingThirdColTitle,
    homePageCoachingSubHeading,
  } = coachingData.nodes[0]

  const Cards = [
    {
      title: homePageCoachingSecondColTitle,
      img: homePageCoachingSecondColImage,
      content: homePageCoachingSecondColContent,
    },
    {
      title: homePageCoachingFirstColTitle,
      img: homePageCoachingFirstColImage,
      content: homePageCoachingFirstColContent,
    },
    {
      title: homePageCoachingThirdColTitle,
      img: homePageCoachingThirdColImage,
      content: homePageCoachingThirdColContent,
    },
  ]

  const theme = useContext(ThemeContext)

  const Section = styled.section`
    position: relative;
    padding-top: calc(${theme.paddings.top}rem * 2);
    padding-bottom: calc(${theme.paddings.bottom}rem * 2);
    padding-left: ${theme.paddings.left}rem;
    padding-right: ${theme.paddings.right}rem;
  `

  const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.widths["container-width"]};
    @media (min-width: 768px) {
      max-width: ${theme.widths["container-width-sm"]};
    }
    @media (min-width: 1025px) {
      flex-direction: row;
      max-width: ${theme.widths["container-width-lg"]};
      justify-content: space-between;
    }
  `

  const CardHeader = styled.div`
    display: flex;
  `

  const CardImg = styled(Img)`
    min-width: calc(320px - 2rem) !important;
    max-width: calc(360px - 2rem) !important;
    width: 100% !important;
    height: 220px !important;
    margin-bottom: ${theme.margins.bottom}rem;
    @media (min-width: 375px) {
      min-width: calc(375px - 2rem) !important;
      max-width: calc(411px - 2rem) !important;
      width: 100%;
    }
    @media (min-width: 414px) {
      margin-right: auto;
      margin-left: auto;
      display: flex !important;
    }
    @media (min-width: 768px) {
      grid-area: 1;
      width: 320px !important;
      margin-bottom: 0;
    }
    @media (min-width: 1025px) {
      width: 375px !important;
      height: 280px !important;
      margin-bottom: ${theme.margins.bottom}rem;
    }
  `

  const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: calc(${theme.margins.bottom}rem * 1);
    @media (min-width: 768px) {
      height: 225px;
      justify-content: flex-start;
      margin-bottom: 0;
    }
  `

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.margins.bottom}rem;
    @media (min-width: 414px) {
      text-align: center;
    }
    @media (min-width: 768px) {
      flex-direction: row;
      margin-bottom: calc(${theme.margins.bottom}rem * 2);
      ${CardBody} {
        padding-left: calc(${theme.paddings.left}rem * 2);
        height: 210px;
      }
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        text-align: center;
        ${CardBody} {
          padding-left: 0;
          padding-right: calc(${theme.paddings.right}rem * 2);
          height: 210px;
        }
      }
    }
    @media (min-width: 1025px) {
      flex-direction: column;
      width: 33%;
      max-width: 375px;
      text-align: center;
      margin-bottom: calc(${theme.margins.bottom}rem * 0.5);
      ${CardBody} {
        padding: 0;
        height: 225px;
        justify-content: space-between;
      }
      &:nth-of-type(2n) {
        flex-direction: column;
        width: 33%;
        text-align: center;
        ${CardBody} {
          padding: 0;
          height: 225px;
          justify-content: space-between;
        }
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
    margin-top: 0;
    text-align: left;
    max-width: ${theme.widths["container-width"]};
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
    max-width: 500px;
    &:hover,
    &:focus {
      background-color: #aa5d00;
      border-color: #aa5d00;
      color: #fff;
    }
  `

  return (
    <Section>
      <SectionHeader
        title={homePageCoachingHeading}
        subTitle={homePageCoachingSubHeading}
      />
      <SectionInner>
        {Cards.map((card, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardImg
                  fixed={card.img.fixed}
                  alt={card.img.description}
                  loading="lazy"
                />
              </CardHeader>
              <CardBody>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </CardBody>
            </Card>
          )
        })}
      </SectionInner>
      <SectionFooter>
        <A
          to={
            lang === "de"
              ? "/coaching-im-raum-aachen"
              : "/en/coaching-in-the-aachen-area"
          }
        >
          {homePageCoachingFooterLinkText}
        </A>
      </SectionFooter>
    </Section>
  )
}

export default Coaching
