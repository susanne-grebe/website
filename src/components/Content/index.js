import React from "react"
import styled from "@emotion/styled"

export const Content = ({ text, maxWidth, width, textCenter }) => {
  const StyledContent = styled.div`
  max-width: ${ maxWidth ? maxWidth : "1024px" };
  width: 100%;
  margin: 0 auto;

  > p {
    font-weight: 400;
    margin-bottom: 15px;
    text-align: left;
    font-size: 16px;
  }
  
  @media (min-width: 768px) {
    > p {
      text-align: ${ textCenter ? "center" : "left" };
    }
    width: ${ width ? width : "100%" };
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