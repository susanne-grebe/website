import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const CardTitle = ({ title, imageRight }) => {
  const theme = useContext(ThemeContext)

  const StyledCardTitle = styled.h3`
    color: ${ theme.colors.primary };
    margin-top: 0;
    margin-bottom: 1rem;
    grid-area: title;
    
    @media (min-width: 768px) {
      ${ imageRight ? `padding-right: 20px;` : `padding-left: 20px;` };
    }
    
    @media (min-width: 992px) {
      ${ imageRight ? `padding-right: 50px;` : `padding-left: 50px;` };
    }
  `

  return <StyledCardTitle>{ title }</StyledCardTitle>
}