import React from "react"
import styled from "@emotion/styled"

export const CardContent = ({ text, imageRight }) => {
  const StyledContent = styled.div`
    > p {
      font-weight: 400;
      margin-bottom: 15px;
      text-align: left;
      font-size: 16px;
      
      @media (min-width: 768px) {
        ${ imageRight ? `padding-right: 20px;` : `padding-left: 20px;` };
      }
      
      @media (min-width: 992px) {
        ${ imageRight ? `padding-right: 50px;` : `padding-left: 50px;` };
        font-size: 18px;
      }
    }
  `

  return <StyledContent
    dangerouslySetInnerHTML={ { __html: text.childMarkdownRemark.html } }/>
}