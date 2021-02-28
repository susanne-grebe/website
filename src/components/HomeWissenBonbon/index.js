import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { ThemeContext } from "styled-components"
import { Image } from "./Image"
import { Content } from "./Content"

export const WissenBonbon = ({ data }) => {
  const { title, text, image } = data
  const theme = useContext(ThemeContext)

  const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px 0 0 0;
    padding: 50px 1.5rem 50px 1.5rem;
    background-color: ${ theme.colors.background };
    
    @media (min-width: 768px) {
      margin: 70px 0 0 0;
      padding: 70px 1.5rem 70px 1.5rem;
    }
    
    @media (min-width: 992px) {
      margin: 90px 0 0 0;
    }
    
    @media (min-width: 1280px) {
      margin: 120px 0 0 0;
    }
  `

  return (
    <StyledWrapper>
      <Title title={ title }/>
      <Image fluid={ image }/>
      <Content text={ text }/>
    </StyledWrapper>
  )
}