import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const CardTwo = ({ text, index }) => {
  const theme = useContext(ThemeContext)

  const StyledCard = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 20px 20px 20px 50px;
    font-size: 18px;
    background-color: ${ theme.colors.background };
    margin: 50px auto;
    text-align: right;
    position: relative;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    
    @media (min-width: 768px) {
      margin: 50px 50px 50px 70px;
      
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  `

  const NumberShape = styled.div`
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    background-color: ${ theme.colors.primary };
    color: #ffffff;
    width: 75px;
    height: 75px;
    font-size: 34px;
    font-family: ${ theme.fonts.headings };
    position: absolute;
    top: -15px;
    left: -15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <StyledCard>
      <NumberShape>
        0{ index + 1 }
      </NumberShape>
      { text }
    </StyledCard>
  )
}