import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"


export const Slogan = ({ slogan, textRight, textLeftAlign }) => {
  const theme = useContext(ThemeContext)

  const StyledSlogan = styled.p`
    text-align: ${ textLeftAlign ? "left" : "center" };
    font-size: 19px;
    font-weight: ${ theme.fontWeights.headings };
    
    @media (min-width: 414px) {
      font-size: 20px;
    }
    @media (min-width: 540px) {
      font-size: 20px;
    }
    @media (min-width: 768px) {
      font-size: 22px;
    }
    @media (min-width: 992px) {
      text-align: ${ textRight === false ? "left" : "right" };
      font-size: 30px;
    }
  `

  return <StyledSlogan>{ slogan }</StyledSlogan>

}