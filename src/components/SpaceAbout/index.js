import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { Video } from "../Video"
import { Content } from "../Content"
import { ThemeContext } from "styled-components"

export const About = ({ title, video, content }) => {
  const theme = useContext(ThemeContext)

  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 50px auto 0 auto;
    padding: 50px 1.5rem 0 1.5rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  `

  return (
    <StyledSection>
      <StyledInner>
        <Title title={ title }/>
        <StyledContentWrapper>
          <Video video={ video }/>
          <Content text={ content } maxWidth={ "768px" } width={ "90%" }
                   textCenter={ false }/>
        </StyledContentWrapper>
      </StyledInner>
    </StyledSection>
  )
}