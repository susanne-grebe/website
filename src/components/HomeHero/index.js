import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Title } from "./Title"
import { Slogan } from "./Slogan"
import { SubTitle } from "./SubTitle"
import { ThemeContext } from "styled-components"
import { Image } from "./Image"

export const Hero = ({ data }) => {
  const theme = useContext(ThemeContext)
  const { backgroundImage, slogan, subTitle, textRight, title, overlay, textLeftAlign } = data

  const HeroWrapper = styled.section`
    display: flex;
    flex-direction: column;
    
    position: relative;
    @media (min-width: 922px) {
      min-height: 100vh;
      justify-content: center;
      align-items: ${ textRight === true ? "flex-start" : "flex-end" };
    }
  `

  const HeroContent = styled.div`
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: ${ theme.widths[ "container-width-lg" ] };
    margin: 0 auto;
    padding: 1.5rem;
    
    @media (min-width: 992px) {
      padding: 2.2rem;
    } 
  `

  return (
    <HeroWrapper>
      <Image fluid={ backgroundImage } overlay={ overlay }/>

      <HeroContent>
        <Title title={ title } textRight={ textRight }
               textLeftAlign={ textLeftAlign }/>
        <Slogan slogan={ slogan } textRight={ textRight }
                textLeftAlign={ textLeftAlign }/>
        <SubTitle subTitle={ subTitle } textRight={ textRight }
                  textLeftAlign={ textLeftAlign }/>
      </HeroContent>

    </HeroWrapper>
  )
}
