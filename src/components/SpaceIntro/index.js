import React from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { Card } from "../Card"

export const Intro = ({ title, image, content, imageRight, noCustomHeight }) => {
  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    padding: 50px 1.5rem 0 1.5rem;
  
    @media (min-width: 768px) {
      padding: 70px 1.5rem 0 1.5rem;
    }
    
    @media (min-width: 992px) {
      padding: 90px 1.5rem 0 1.5rem;
    }
    
    @media (min-width: 1280px) {
      padding: 120px 1.5rem 0 1.5rem;
    }
`

  const card = {
    image,
    text: content,
    imageRight,
  }

  return (
    <StyledSection>
      <Title title={ title }/>
      <Card card={ card } noCustomHeight={ noCustomHeight } noShadow={ true }/>
    </StyledSection>
  )
}