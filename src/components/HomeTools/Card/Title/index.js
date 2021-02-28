import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const Title = ({ title }) => {
  const theme = useContext(ThemeContext)

  const StyledTitle = styled.h3`
    color: ${ theme.colors.primary };
    font-size: 22px;
  `

  return <StyledTitle>{ title }</StyledTitle>
}