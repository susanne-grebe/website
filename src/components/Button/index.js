import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"
import { Link } from "gatsby"

export const Button = ({ slug, buttonText, width }) => {
  const theme = useContext(ThemeContext)
  const StyledButton = styled(Link)`
  color: #ffffff;
  background-color: ${ theme.colors.primary };
  padding: 14px 28px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
  margin-top: 50px;
  max-width: ${ width ? width : "200px" };
  width: 100%;
  font-size: 16px;
  
  :hover, :focus {
    color: #ffffff;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 16%);
  }
  
  @media (min-width: 768px) {
    margin: 50px auto 0 auto;
  }
`

  return <StyledButton to={ slug }>{ buttonText }</StyledButton>
}