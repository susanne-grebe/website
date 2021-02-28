import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const Title = ({ title }) => {
  const theme = useContext(ThemeContext)

  const StyledTitle = styled.h2`
    text-align: center;
    color: ${ theme.colors.primary };
    margin-top: calc(${ theme.margins.top }rem / 2);
    margin-bottom: 0;
    font-size: 1.9rem;
    
    @media (min-width: 540px) {
      font-size: 2.5rem;
    }
    @media (min-width: 768px) {
      font-size: 3.1rem;
    }
  `

  return <StyledTitle>{ title }</StyledTitle>
}