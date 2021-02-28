import React from "react"
import styled from "@emotion/styled"

export const List = ({ item }) => {

  const StyledListItem = styled.li`
    font-weight: 400;
    margin-bottom: 5px;
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
    
    @media (min-width: 1280px) {
      font-size: 18px;
    }
  `

  return (
    <StyledListItem>
      { item }
    </StyledListItem>
  )
}