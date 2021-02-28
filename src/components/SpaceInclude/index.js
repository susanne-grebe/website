import React from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { CardTwo } from "../CardTwo"

export const Included = ({ title, content }) => {
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

  const StyledInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px auto 0 auto;
    
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  `

  return (
    <StyledSection>
      <Title title={ title }/>
      <StyledInner>
        { content.map((text, index) => <CardTwo text={ text } index={ index }
                                                key={ index }/>) }
      </StyledInner>
    </StyledSection>
  )
}