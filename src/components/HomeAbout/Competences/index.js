import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const Competences = ({ data }) => {
  const theme = useContext(ThemeContext)
  const { title, competences } = data
  const StyledWrapper = styled.div`
    width: 100%;
    margin-top: 0;
    
    @media (min-width: 992px) {
      width: 50%;
      padding-right: 15px;
    }
  `

  const StyledTitle = styled.h3`
    color: ${ theme.colors.primary };
  `

  const StyleList = styled.ul`
    margin-left: 10px;
    padding-left: 10px;
  `

  const StyledListItem = styled.li`
    font-weight: 400;
  `

  return (
    <StyledWrapper>
      <StyledTitle>{ title }</StyledTitle>
      <StyleList>
        { competences.map((competence, index) => <StyledListItem
          key={ index }>{ competence }</StyledListItem>) }
      </StyleList>
    </StyledWrapper>
  )
}