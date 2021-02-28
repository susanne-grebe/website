import React from "react"
import styled from "@emotion/styled"
import { CardTitle } from "../HomeCoaching/CardTitle"
import { CardImage } from "../CardImage"
import { CardContent } from "../HomeCoaching/CardContent"

export const Card = ({ card, noCustomHeight, noShadow }) => {
  const { image, imageRight, text, title } = card

  const StyledCard = styled.div`
    display: grid;
    grid-template-areas:
      'title'
      'image'
      'content';
    margin: 50px 0 0 0;
      
    @media (min-width: 768px) {
      grid-template-areas:
        ${ imageRight ? `'title image''content image'` : `'image title'
        'image content'` };
      grid-template-columns:
        ${ imageRight ? `1fr 350px` : `350px 1fr` };
      grid-auto-rows: ${ noCustomHeight ? `auto` : `60px auto` };
      margin: 70px 0 0 0;
    }
    
    @media (min-width: 992px) {
      grid-template-columns:
        ${ imageRight ? `1fr 550px` : `550px 1fr` };
      grid-auto-rows: ${ noCustomHeight ? `auto` : `50px auto` };
      margin: 90px 0 0 0;
    }
  `

  return (
    <StyledCard>
      { title && (<CardTitle title={ title } imageRight={ imageRight }/>) }
      <CardImage image={ image } noCustomHeight={ noCustomHeight }
                 noShadow={ noShadow }/>
      <CardContent text={ text } imageRight={ imageRight }/>
    </StyledCard>
  )
}