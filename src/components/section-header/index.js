import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

const SectionHeader = ({ title, subTitle, isPage }) => {
  const HeaderTitle = title ? title : ""
  const HeaderSubTitle = subTitle ? subTitle : ""

  const theme = useContext(ThemeContext)

  const Container = styled.div`
    max-width: ${ isPage ? "768px" : "1280px" };
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  `

  const Title = styled.h2`
    text-align: center;
    color: ${ theme.colors.primary };
    margin-top: calc(${ theme.margins.top }rem / 2);
    margin-bottom: 0;
    font-size: 20px;
    z-index: 2;
    
    @media (min-width: 540px) {
      font-size: 24px;
    }
    @media (min-width: 768px) {
      font-size: 28px;
    }
  `

  const SubTitle = styled.h3`
    font-family: ${ theme.fonts.body };
    font-size: ${ theme.fontSizes.body }rem;
    font-weight: ${ theme.fontWeights.body };
    position: relative;
    line-height: 1.5;
  `

  return (
    <Container>
      <Title>{ HeaderTitle }</Title>
      { HeaderSubTitle !== "" ? <SubTitle>{ HeaderSubTitle }</SubTitle> : "" }
    </Container>
  )
}

export default SectionHeader
