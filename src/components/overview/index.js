import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"
import { Title as SectionTitle } from "../Title"

import IconThree from "../../images/slice3.png"
import IconTwo from "../../images/slice2.png"
import IconOne from "../../images/slice1.png"

export const Overview = ({ data }) => {
  const {
    title,
    col1Number,
    col1Text,
    col2Number,
    col2Text,
    col3Number,
    col3Text,
  } = data

  const Cards = [
    {
      img: IconThree,
      num: col3Number,
      title: col3Text,
    },
    {
      img: IconTwo,
      num: col2Number,
      title: col2Text,
    },
    {
      img: IconOne,
      num: col1Number,
      title: col1Text,
    },
  ]

  const theme = useContext(ThemeContext)

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 50px 1.5rem 50px 1.5rem;
    background-color: ${ theme.colors.background };
  
    @media (min-width: 768px) {
      padding: 70px 1.5rem 70px 1.5rem;
    }
    
    @media (min-width: 992px) {
      padding: 90px 1.5rem 90px 1.5rem;
    }
    
    @media (min-width: 1280px) {
      padding: 120px 1.5rem 120px 1.5rem;
    }
  `

  const OverviewInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0;
    width: 100%;
    max-width: ${ theme.widths[ "container-width" ] };
    margin: ${ theme.margins.top }rem ${ theme.margins.center };
    @media (min-width: 768px) {
      max-width: ${ theme.widths[ "container-width-md" ] };
    }
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: ${ theme.widths[ "container-width-lg" ] };
    }
  `

  const Img = styled.img`
    max-width: 125px;
    max-height: 125px;
    width: 100%;
    height: auto;
    margin-bottom: calc(${ theme.margins.bottom }rem / 1);
    @media (min-width: 768px) {
      grid-area: i;
      margin-right: calc(${ theme.margins.right }rem * 5);
      margin-bottom: 0;
    }
    @media (min-width: 992px) {
      width: 125px;
      margin-right: 0;
      margin-bottom: ${ theme.margins.bottom }rem;
    }
  `

  const Card = styled.div`
    padding-top: ${ theme.paddings.top }rem;
    padding-bottom: ${ theme.paddings.bottom }rem;
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
        ${ Img } {
          margin-right: 0;
          margin-left: calc(${ theme.margins.right }rem * 5);
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
        ${ Img } {
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
    color: ${ theme.colors[ "primary-active" ] };
    font-size: calc(${ theme.fontSizes[ "body-small" ] }rem * 3.6);
    font-family: ${ theme.fonts.headings };
    text-align: center;
    @media (min-width: 768px) {
      grid-area: n;
    }
  `

  const Title = styled.p`
    font-size: calc(${ theme.fontSizes[ "body-small" ] }rem * 1.7);
    font-weight: ${ theme.fontWeights[ "body-bold" ] };
    font-family: ${ theme.fonts.headings };
    @media (min-width: 768px) {
      grid-area: t;
    }
  `

  return (
    <Section>
      <SectionTitle title={ title }/>
      <OverviewInner>
        { Cards.map((card, index) => (
          <Card key={ index }>
            <Img src={ card.img } alt={ card.title } loading="lazy"/>
            <Wrap>
              <Num>{ card.num }</Num>
              <Title>{ card.title }</Title>
            </Wrap>
          </Card>
        )) }
      </OverviewInner>
    </Section>
  )
}
