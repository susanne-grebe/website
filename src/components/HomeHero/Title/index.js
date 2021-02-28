import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const Title = ({ title, textRight, textLeftAlign }) => {
  const theme = useContext(ThemeContext)

  const StyledTitle = styled.h1`
    text-align: ${ textLeftAlign ? "left" : "center" };
    color: ${ theme.colors.primary };
    margin-top: calc(${ theme.margins.top }rem / 2);
    margin-bottom: calc(${ theme.margins.bottom }rem / 8);
    font-size: 30px;
    
    @media (min-width: 540px) {
      font-size: 32px;
    }
    @media (min-width: 768px) {
      font-size: 38px;
    }
    @media (min-width: 992px) {
      text-align: ${ textRight === false ? "left" : "right" };
      font-size: 56px;
    }
  `

  return <StyledTitle>{ title }</StyledTitle>
}