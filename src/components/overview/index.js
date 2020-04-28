import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

import IconThree from "../../images/slice3.png"
import IconTwo from "../../images/slice2.png"
import IconOne from "../../images/slice1.png"

import SectionHeader from "../section-header"

const Overview = ({ overviewData }) => {
  const {
    homePageOverviewFirstColNumber,
    homePageOverviewFirstColTitle,
    homePageOverviewHeading,
    homePageOverviewSecondColNumber,
    homePageOverviewSecondColTitle,
    homePageOverviewThirdColNumber,
    homePageOverviewThirdColTitle,
  } = overviewData.nodes[0]

  const Cards = [
    {
      img: IconThree,
      num: homePageOverviewFirstColNumber,
      title: homePageOverviewFirstColTitle,
    },
    {
      img: IconTwo,
      num: homePageOverviewSecondColNumber,
      title: homePageOverviewSecondColTitle,
    },
    {
      img: IconOne,
      num: homePageOverviewThirdColNumber,
      title: homePageOverviewThirdColTitle,
    },
  ]

  const theme = useContext(ThemeContext)

  const Section = styled.section`
    padding-top: calc(${theme.paddings.top}rem * 2);
    padding-bottom: 0;
    width: 100%;
    padding-left: ${theme.paddings.left}rem;
    padding-right: ${theme.paddings.right}rem;
    position: relative;
    @media (min-width: 992px) {
      padding-top: ${theme.paddings.top}rem;
    }
  `

  const OverviewInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0;
    padding-bottom: ${theme.paddings.bottom}rem;
    max-width: ${theme.widths["container-width"]};
    margin: ${theme.margins.top}rem ${theme.margins.center};
    @media (min-width: 768px) {
      max-width: ${theme.widths["container-width-md"]};
    }
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: ${theme.widths["container-width-lg"]};
    }
  `

  const Img = styled.img`
    max-width: 150px;
    margin-bottom: calc(${theme.margins.bottom}rem / 1);
    @media (min-width: 768px) {
      grid-area: i;
      margin-right: calc(${theme.margins.right}rem * 5);
      margin-bottom: 0;
    }
    @media (min-width: 992px) {
      width: 125px;
      margin-right: 0;
      margin-bottom: ${theme.margins.bottom}rem;
    }
  `

  const Card = styled.div`
    padding-top: ${theme.paddings.top}rem;
    padding-bottom: ${theme.paddings.bottom}rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 30% 70%;
      text-align: right;
      grid-template: "i w";
      align-items: center;
      &:nth-of-type(2n) {
        grid-template: "w i";
        text-align: center;
        ${Img} {
          margin-right: 0;
          margin-left: calc(${theme.margins.right}rem * 5);
        }
      }
    }
    @media (min-width: 992px) {
      width: 33%;
      text-align: center;
      justify-items: center;
      grid-template: "i" "w";
      &:nth-of-type(2n) {
        grid-template: "i" "w";
        ${Img} {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  `

  const Wrap = styled.div`
    grid-area: w;
    display: flex;
    flex-direction: column;
  `

  const Num = styled.p`
    color: ${theme.colors["primary-active"]};
    font-size: calc(${theme.fontSizes["body-small"]}rem * 3.6);
    font-family: ${theme.fonts.headings};
    text-align: center;
    @media (min-width: 768px) {
      grid-area: n;
    }
  `

  const Title = styled.p`
    font-size: calc(${theme.fontSizes["body-small"]}rem * 1.7);
    font-weight: ${theme.fontWeights["body-bold"]};
    font-family: ${theme.fonts.headings};
    @media (min-width: 768px) {
      grid-area: t;
    }
  `

  return (
    <Section>
      <SectionHeader title={homePageOverviewHeading} />
      <OverviewInner>
        {Cards.map((card, index) => (
          <Card key={index}>
            <Img src={card.img} alt={card.title} loading="lazy" />
            <Wrap>
              <Num>{card.num}</Num>
              <Title>{card.title}</Title>
            </Wrap>
          </Card>
        ))}
      </OverviewInner>
    </Section>
  )
}

export default Overview
