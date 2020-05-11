import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

const SectionHeader = ({ title, subTitle }) => {
  const HeaderTitle = title ? title : ""
  const HeaderSubTitle = subTitle ? subTitle : ""

  const theme = useContext(ThemeContext)

  const Container = styled.div`
    max-width: ${theme.widths["container-width"]};
    margin: ${theme.margins.top}rem ${theme.margins.center};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
    text-align: left;
    @media (min-width: 768px) {
      text-align: center;
      justify-content: center;
      align-items: center;
      padding-bottom: ${theme.paddings.bottom}rem;
    }
  `

  const Title = styled.h2`
    font-size: ${theme.fontSizes["heading-two"]}rem;
    z-index: 2;
    position: relative;
    line-height: 1.4;
    padding-bottom: calc(${theme.paddings.bottom}rem / 2);
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80%;
      height: 2px;
      background-color: ${theme.colors.background};
    }
    @media (min-width: 768px) {
      font-size: ${theme.fontSizes["heading-two"]}rem;
      &:after {
        left: 10%;
      }
    }
  `

  const SubTitle = styled.h3`
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.body}rem;
    font-weight: ${theme.fontWeights.body};
    z-index: 2;
    position: relative;
    line-height: 1.5;
  `

  return (
    <Container>
      <Title>{HeaderTitle}</Title>
      {HeaderSubTitle !== "" ? <SubTitle>{HeaderSubTitle}</SubTitle> : ""}
    </Container>
  )
}

export default SectionHeader
