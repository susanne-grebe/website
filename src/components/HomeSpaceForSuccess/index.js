import React from "react"
import styled from "@emotion/styled"
import { Title } from "./Title"
import { Image } from "./Image"
import { Content } from "../Content"
import { Button } from "../Button"

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 1.5rem 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem 0 1.5rem;
  }
  
  @media (min-width: 992px) {
    padding: 90px 1.5rem 0 1.5rem;
  }
  
  @media (min-width: 1280px) {
    padding: 120px 1.5rem 0 1.5rem;
  }
`

export const SpaceForSuccess = ({ data, lang }) => {
  const { title, image, text, buttonText } = data

  return (
    <StyledWrapper>
      <Title title={ title }/>
      <Image fluid={ image }/>
      <Content text={ text } textCenter={ true }/>
      <Button buttonText={ buttonText }
              slug={ lang === "de" ? "/space-for-success" : "/en/space-for-success" }/>
    </StyledWrapper>
  )
}