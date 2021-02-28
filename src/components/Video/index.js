import React from "react"
import styled from "@emotion/styled"

export const Video = ({ video }) => {
  const StyledIframe = styled.iframe`
    width: 100%;
    max-width: 500px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    margin-bottom: 50px;
    
    @media (min-width: 515px) {
      max-width: 992px;
      height: 500px;
    }
    
    @media (min-width: 1024px) {
      margin-right: 50px;
      height: auto;
    }
  `

  return (
    <StyledIframe
      src={ `https://www.youtube.com/embed/${ video }` }
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}