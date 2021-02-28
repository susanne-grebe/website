import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "./Title"
import { Card } from "../Card"
import { Link } from "gatsby"
import { ThemeContext } from "styled-components"

export const Coaching = ({ data, lang }) => {
  const theme = useContext(ThemeContext)
  const { title, coachingCards, coachingContactButtonText } = data

  const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    padding: 50px 1.5rem 0 1.5rem;
  
    @media (min-width: 768px) {
      padding: 70px 1.5rem 0 1.5rem;
    }
    
    @media (min-width: 992px) {
      padding: 90px 1.5rem 0 1.5rem;
    }
    
    @media (min-width: 1280px) {
      padding: 120px 1.5rem 0 1.5rem;
    }
  `

  const Button = styled(Link)`
    margin: 65px auto 0 auto;
    max-width: 200px;
    width: 100%;
    padding: 12px 20px;
    background-color: ${ theme.colors.primary };
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    
    :hover, :focus {
      color: #ffffff;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 16%);
    }
  `

  return (
    <StyledWrapper>
      <Title title={ title }/>
      { coachingCards.map((card, index) => <Card card={ card }
                                                 key={ index }/>) }

      <Button to={ lang === "de" ? "/kontakt" : "/en/contact" }
              state={ { choice: title } }>{ coachingContactButtonText }</Button>
    </StyledWrapper>
  )
}