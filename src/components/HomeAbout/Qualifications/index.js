import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"

export const Qualifications = ({ data }) => {
  const theme = useContext(ThemeContext)
  const { title, qualifications } = data
  const StyledWrapper = styled.div`
    width: 100%;
    margin-top: 40px;
    
    @media (min-width: 992px) {
      width: 50%;
      margin-top: 0;
      padding-left: 15px;
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
        { qualifications.map((qualification, index) => <StyledListItem
          key={ index }>{ qualification }</StyledListItem>) }
      </StyleList>
    </StyledWrapper>
  )
}