import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "../Title"
import { Content } from "./Content"
import { Image } from "./Image"
import { Card } from "./Card"
import { Link } from "gatsby"
import { ThemeContext } from "styled-components"

export const Tools = ({ data, lang }) => {
  const theme = useContext(ThemeContext)
  const { image, text, title, tools, toolsContactButtonText } = data

  const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 1.5rem 0 1.5rem;
    max-width: 1280px;
    margin: 0 auto;
  
    @media (min-width: 768px) {
      padding: 70px 1.5rem 0 1.5rem;
    }
    
    @media (min-width: 992px) {
      padding: 90px 1.5rem 0 1.5rem;
    }
    
    @media (min-width: 1280px) {
      padding: 120px 1.5rem 0 1.5rem;
      justify-content: center;
    }
  `

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    
    @media (min-width: 768px) {
      flex-direction: row;
      margin: 70px auto 0 auto;
      width: 100%;
    }
  `

  const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  `

  const Button = styled(Link)`
    margin: 65px auto 0 auto;
    max-width: 200px;
    width: 100%;
    padding: 12px 20px;
    background-color: ${ theme.colors.primary };
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    
    :hover, :focus {
      color: #ffffff;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 16%);
    }
  `

  return (
    <StyledWrapper>
      <Title title={ title }/>
      <ContentWrapper>
        <Content text={ text }/>
        <Image fluid={ image }/>
      </ContentWrapper>
      <CardWrapper>
        { tools.map((tool, index) => <Card card={ tool } key={ index }
                                           lang={ lang }/>) }
      </CardWrapper>
      <Button to={ lang === "de" ? "/kontakt" : "/en/contact" }
              state={ { choice: lang === "de" ? "Mimikresonanz" : "Facial expression" } }>{ toolsContactButtonText }</Button>
    </StyledWrapper>
  )
}