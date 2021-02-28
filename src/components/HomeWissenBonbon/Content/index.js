import React from "react"
import styled from "@emotion/styled"

const StyledContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  > p {
    font-weight: 400;
    margin-bottom: 0;
    text-align: left;
    font-size: 16px;
  }
  
  @media (min-width: 768px) {
    > p {
      text-align: center;
    }
  }
  
  @media (min-width: 992px) {
    > p {
      font-size: 18px;
    }
  }
`

export const Content = ({ text }) => {
  return <StyledContent
    dangerouslySetInnerHTML={ { __html: text.childMarkdownRemark.html } }/>
}