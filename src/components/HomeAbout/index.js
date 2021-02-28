import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"
import { Title } from "../Title"
import { Content } from "./Content"
import { Image } from "./Image"
import { Competences } from "./Competences"
import { Qualifications } from "./Qualifications"

export const About = ({ data }) => {
  const theme = useContext(ThemeContext)

  const { title, text, image, competences, qualifications } = data
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

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto 0 auto;
    max-width: 640px;
    
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      margin: 70px auto 0 auto;
      width: 100%;
      max-width: 1280px;
    }
  `

  return (
    <StyledWrapper>
      <Title title={ title }/>
      <ContentWrapper>
        <Content text={ text }/>
        <Image fluid={ image }/>
      </ContentWrapper>
      <ContentWrapper>
        <Competences data={ competences }/>
        <Qualifications data={ qualifications }/>
      </ContentWrapper>
    </StyledWrapper>
  )
}