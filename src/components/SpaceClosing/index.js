import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { Card } from "../Card"
import { ThemeContext } from "styled-components"

export const Closing = ({ title, image, content, imageRight, noCustomHeight }) => {
  const theme = useContext(ThemeContext)
  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px auto 0 auto;
    padding: 50px 1.5rem 50px 1.5rem;
    background-color: ${ theme.colors.background };
  
    @media (min-width: 768px) {
      margin-top: 70px;
    }
    
    @media (min-width: 992px) {
      margin-top: 90px;
    }
    
    @media (min-width: 1280px) {
      margin-top: 120px;
    }
  `

  const StyledInner = styled.div`
    max-width: 1280px;
    margin: 50px auto;
  `

  const card = {
    image,
    text: content,
    imageRight: true,
  }

  return (
    <StyledSection>
      <StyledInner>
        <Title title={ title }/>
        <Card card={ card } noCustomHeight={ noCustomHeight }/>
      </StyledInner>
    </StyledSection>
  )
}