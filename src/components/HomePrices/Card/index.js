import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"
import { Link } from "gatsby"

export const Card = ({ card, lang, height }) => {
  const { title, price, text, whatsIncluded, buttonText } = card
  const theme = useContext(ThemeContext)
  const StyledCard = styled.div`
    max-width: 320px;
    width: 100%;
    padding: 0;
    margin-bottom: 50px;
    background-color: ${ theme.colors.background };
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    
    @media (min-width: 768px) {
      max-width: 330px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: ${ height };
    }
    
    @media (min-width: 992px) {
      max-width: 375px;
    }
  `

  const CardHeader = styled.header`
    background-color: ${ theme.colors.primary };
    width: 100%;
    padding: 15px 10px 10px 10px;
    border-radius: 10px 10px 0 0;
  `

  const CardTitle = styled.h3`
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    margin: 0;
    font-size: 22px;
  `

  const CardBody = styled.main`
    padding: 1rem;
    min-height: 150px;
  `

  const Price = styled.p`
    font-size: 60px;
    color: ${ theme.colors.primary };
    font-weight: 400;
    text-align: center;
  `

  const Text = styled.p`
    font-weight: 400;
    text-align: center;
    font-size: 24px;
  `

  const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
  `

  const StyledListItem = styled.li`
    padding: 5px 0;
    width: 100%;
    text-align: center;
    font-size: 16px;
  `

  const CardFooter = styled.footer`
    width: 100%;
    height: 80px;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `

  const Button = styled(Link)`
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
    <StyledCard>
      <CardHeader>
        <CardTitle>{ title }</CardTitle>
      </CardHeader>
      <CardBody>
        <Price>{ price } &euro;</Price>
        <Text>{ text }</Text>
        <StyledList>
          { whatsIncluded.map((included, index) => <StyledListItem
            key={ index }>{ included }</StyledListItem>) }
        </StyledList>
      </CardBody>
      <CardFooter>
        <Button to={ lang === "de" ? "/kontakt" : "/en/contact" }
                state={ { choice: title } }>{ buttonText }</Button>
      </CardFooter>
    </StyledCard>
  )
}