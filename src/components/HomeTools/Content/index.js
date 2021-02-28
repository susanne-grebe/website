import React from "react"
import styled from "@emotion/styled"

export const Content = ({ text }) => {

  const StyledContent = styled.div`
    margin: 0 auto;
  
    > p {
      font-weight: 400;
      text-align: left;
      font-size: 16px;
    }
    
    @media (min-width: 768px) {
      width: 50%;
      padding-right: 50px;
    }
    
    @media (min-width: 992px) {
      > p {
        font-size: 18px;
      }
    }
  `

  return <StyledContent
    dangerouslySetInnerHTML={ { __html: text.childMarkdownRemark.html } }/>
}