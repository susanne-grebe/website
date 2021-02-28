import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { Card } from "./Card"
import { ThemeContext } from "styled-components"
import { Button } from "../Button"

export const Prices = ({ data, lang, height, page }) => {
  const theme = useContext(ThemeContext)
  const { title, cards, footer, footerStudent, footerStudentButtonText } = data
  const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 50px 1.5rem 50px 1.5rem;
  
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

  const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    flex-wrap: wrap;
    margin-top: 50px;
    align-items: center;
    
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `

  const StyledInfoTextLarge = styled.h3`
    font-weight: 400;
    color: ${ theme.colors.primary };
    text-align: center;
    font-family: 'ITC Avant Garde Pro XLt';
  `

  const StyledInfoText = styled.p`
    font-size: 16px;
    font-weight: 300;
  `

  return (
    <StyledWrapper>
      <Title title={ title }/>
      <StyledCardWrapper>
        { cards.map((card, index) => <Card card={ card } lang={ lang }
                                           key={ index } height={ height }/>) }
      </StyledCardWrapper>
      <StyledInfoText>{ footer }</StyledInfoText>

      <StyledInfoTextLarge>{ footerStudent }</StyledInfoTextLarge>
      { page === "index" ? (
        <Button slug={ lang === "de" ? "/kontakt" : "/en/contact" }
                buttonText={ footerStudentButtonText }
                width={ "400px" }/>) : (<></>) }
    </StyledWrapper>
  )
}