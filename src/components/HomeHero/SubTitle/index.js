import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const SubTitle = ({ subTitle, textRight, textLeftAlign }) => {
  const theme = useContext(ThemeContext)

  const StyledSubTitle = styled.h2`
    text-align: ${ textLeftAlign ? "left" : "center" };
    font-size: 18px;
    color: ${ theme.colors.primary };
    margin-top: 0;
    font-family: 'ITC Avant Garde Pro XLt';
    @media (min-width: 768px) {
      font-size: 28px;
    }
    @media (min-width: 992px) {
      text-align: ${ textRight === false ? "left" : "right" };
      font-size: 40px;
    }
  `

  return <StyledSubTitle>{ subTitle }</StyledSubTitle>

}