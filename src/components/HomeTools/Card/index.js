import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "styled-components"
import { Title } from "./Title"
import { Content } from "./Content"
import { List } from "./List"

export const Card = ({ card, lang }) => {
  const theme = useContext(ThemeContext)
  const { title, sort, module1, module2, module3, module4, text, seminarContent } = card

  const StyledCard = styled.div`
    background-color: ${ theme.colors.background };
    padding: 1.5rem;
    margin: 50px 0 0 0;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
       flex-direction: row;
       
       > div {
          width: 60%;
          &:last-of-type {
            width: 40%;
            margin-left: 50px;
          }
          
          &:first-of-type {
            padding-right: 20px;
          }
       }
    }
    
    @media (min-width: 992px) {
      max-width: 80%;
      flex-direction: row;
      justify-content: space-between;
      
      > div {
        width: 100%;
        &:last-of-type {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  `

  const StyledListHeader = styled.h4`
    color: ${ theme.colors.primary };
    margin: 30px 0 10px 0;
    
    @media (min-width: 768px) {
      margin: 0 0 5px 0;
      font-size: 22px;
    }
  `

  const StyledList = styled.ul`
  
  `
  
  return (
    <StyledCard>
      <div>
        <Title title={ title }/>
        <Content text={ text } lang={ lang }/>
        { lang === "de" ? (
          <StyledListHeader
            style={ { marginTop: "40px" } }>{ sort ? "Online" : "Präsenz" }</StyledListHeader>
        ) : (
          <StyledListHeader
            style={ { marginTop: "40px" } }>{ sort ? "Online" : "Presence" }</StyledListHeader>
        ) }
        <StyledList
          style={ { listStyle: "none", marginLeft: 0, paddingLeft: 0 } }>
          { module1 &&
          module1.toLowerCase() !== "empty" ?
            (<li style={ { padding: "5px 0" } }><p
              style={ { fontSize: "16px", margin: "0" } }><strong>Module
              1: </strong> { module1 }</p></li>) :
            (<></>)
          }

          { module2 &&
          module2.toLowerCase() !== "empty" ?
            (<li style={ { padding: "5px 0" } }><p
              style={ { fontSize: "16px", margin: "0" } }><strong>Module
              2: </strong> { module2 }</p></li>) :
            (<></>)
          }

          { module3 &&
          module3.toLowerCase() !== "empty" ?
            (<li style={ { padding: "5px 0" } }><p
              style={ { fontSize: "16px", margin: "0" } }><strong>Module
              3: </strong> { module3 }</p></li>) :
            (<></>)
          }

          { module4 &&
          module4.toLowerCase() !== "empty" ?
            (<li style={ { padding: "5px 0" } }><p
              style={ { fontSize: "16px", margin: "0" } }><strong>Module
              4: </strong> { module4 }</p></li>) :
            (<></>)
          }
        </StyledList>

      </div>

      <div>
        <StyledListHeader>{ lang === "de" ? "Seminarinhalte" : "Seminar content" }</StyledListHeader>
        <StyledList>
          { seminarContent.map((item, index) => <List item={ item }
                                                      key={ index }/>) }
        </StyledList>
      </div>
    </StyledCard>
  )
}