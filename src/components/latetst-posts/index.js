import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Title } from "../Title"

export default ({ data, lang }) => {
  const theme = useContext(ThemeContext)

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    padding: 50px 1.5rem 50px 1.5rem;
  
    @media (min-width: 768px) {
      padding: 70px 1.5rem 70px 1.5rem;
    }
    
    @media (min-width: 992px) {
      padding: 90px 1.5rem 90px 1.5rem;
    }
    
    @media (min-width: 1280px) {
      padding: 120px 1.5rem 120px 1.5rem;
    }
  `

  const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 100%;
    @media (min-width: 1025px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `

  const CardHeader = styled.div`
    display: flex;
  `

  const CardImg = styled(Img)`
    min-width: calc(320px - 2rem) !important;
    max-width: calc(360px - 2rem) !important;
    width: 100% !important;
    height: 220px !important;
    margin-bottom: ${ theme.margins.bottom }rem;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    @media (min-width: 375px) {
      min-width: calc(375px - 2rem) !important;
      max-width: calc(411px - 2rem) !important;
      width: 100%;
    }
    @media (min-width: 414px) {
      margin-right: auto;
      margin-left: auto;
      display: flex !important;
    }
    @media (min-width: 768px) {
      grid-area: 1;
      width: 320px !important;
      height: auto !important;
      margin-bottom: 0;
    }
    @media (min-width: 1025px) {
      width: 375px !important;
      height: 280px !important;
      margin-bottom: ${ theme.margins.bottom }rem;
    }
  `

  const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: calc(${ theme.margins.bottom }rem * 1);
    height: 245px;
    h2 {
      font-size: 1.6rem;
    }
    @media (min-width: 768px) {
      height: 225px;
      justify-content: flex-start;
      margin-bottom: 0;
    }
  `

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    &:nth-of-type(3) {
      margin-bottom: 0;
    }
    ${ CardBody } {
      justify-content: space-between;
    }
    @media (min-width: 414px) {
      text-align: center;
      ${ CardBody } {
        height: 220px;
        padding: 0 1rem;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      margin-bottom: calc(${ theme.margins.bottom }rem * 3);
      ${ CardBody } {
        padding-left: calc(${ theme.paddings.left }rem * 2);
        height: auto;
      }
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        text-align: center;
        ${ CardBody } {
          height: auto;
          padding-left: 0;
          padding-right: calc(${ theme.paddings.right }rem * 2);
        }
      }
    }
    @media (min-width: 1025px) {
      flex-direction: column;
      width: 33%;
      max-width: 375px;
      text-align: center;
      margin-bottom: calc(${ theme.margins.bottom }rem * 0.5);
      ${ CardBody } {
        padding: 0;
        height: 275px;
        justify-content: space-between;
      }
      &:nth-of-type(2n) {
        flex-direction: column;
        width: 33%;
        text-align: center;
        ${ CardBody } {
          padding: 0;
          height: 275px;
          justify-content: space-between;
        }
      }
    }
  `

  const A = styled(Link)`
    max-width: 250px;
    margin: 0 auto;
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
    <Section>
      <Title
        title={ lang === "de" ? "Neueste Beiträge" : "Latest Posts" }/>
      <SectionInner>
        { data.edges.map(({ node }, index) => {
          const path =
            lang === "de"
              ? `/blog/${ node.blogPostSlug }`
              : `/en/blog/${ node.blogPostSlug }`
          return (
            <Card key={ index }>
              <CardHeader>
                <CardImg
                  fluid={ node.blogPostImage.fluid }
                  alt={ node.blogPostImage.description }
                />
              </CardHeader>
              <CardBody>
                <h2>{ node.blogPostTitle }</h2>
                <p
                  dangerouslySetInnerHTML={ {
                    __html: node.blogPostExcerpt.childMarkdownRemark.excerpt,
                  } }
                />
                <A
                  to={ path }>{ lang === "de" ? `Weiterlesen` : `Read More` }</A>
              </CardBody>
            </Card>
          )
        }) }
      </SectionInner>
    </Section>
  )
}
