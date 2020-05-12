import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SectionHeader from "../section-header"

export default ({ data, lang }) => {
  const theme = useContext(ThemeContext)

  const Section = styled.section`
    position: relative;
    padding-top: calc(${theme.paddings.top}rem * 2);
    padding-bottom: calc(${theme.paddings.bottom}rem * 2);
    padding-left: ${theme.paddings.left}rem;
    padding-right: ${theme.paddings.right}rem;
    margin-bottom: 2rem;
  `

  const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.widths["container-width"]};
    @media (min-width: 768px) {
      max-width: ${theme.widths["container-width-sm"]};
    }
    @media (min-width: 1025px) {
      flex-direction: row;
      max-width: ${theme.widths["container-width-lg"]};
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
    margin-bottom: ${theme.margins.bottom}rem;
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
      margin-bottom: ${theme.margins.bottom}rem;
    }
  `

  const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: calc(${theme.margins.bottom}rem * 1);
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
    ${CardBody} {
      justify-content: space-between;
    }
    @media (min-width: 414px) {
      text-align: center;
      ${CardBody} {
        height: 220px;
        padding: 0 1rem;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      margin-bottom: calc(${theme.margins.bottom}rem * 3);
      ${CardBody} {
        padding-left: calc(${theme.paddings.left}rem * 2);
        height: auto;
      }
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        text-align: center;
        ${CardBody} {
          height: auto;
          padding-left: 0;
          padding-right: calc(${theme.paddings.right}rem * 2);
        }
      }
    }
    @media (min-width: 1025px) {
      flex-direction: column;
      width: 33%;
      max-width: 375px;
      text-align: center;
      margin-bottom: calc(${theme.margins.bottom}rem * 0.5);
      ${CardBody} {
        padding: 0;
        height: 275px;
        justify-content: space-between;
      }
      &:nth-of-type(2n) {
        flex-direction: column;
        width: 33%;
        text-align: center;
        ${CardBody} {
          padding: 0;
          height: 275px;
          justify-content: space-between;
        }
      }
    }
  `

  const A = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    color: #aa5d00;
    border: 1px solid #aa5d00;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    text-align: center;
    &:hover,
    &:focus {
      background-color: #aa5d00;
      border-color: #aa5d00;
      color: #fff;
    }
    @media (min-width: 414px) {
      margin: 0 1rem;
    }
  `

  return (
    <Section>
      <SectionHeader title="Latetst Posts" />
      <SectionInner>
        {data.edges.map(({ node }, index) => {
          const path =
            lang === "de"
              ? `/blog/${node.blogPostSlug}`
              : `/en/blog/${node.blogPostSlug}`
          return (
            <Card key={index}>
              <CardHeader>
                <CardImg
                  fluid={node.blogPostImage.fluid}
                  alt={node.blogPostImage.description}
                />
              </CardHeader>
              <CardBody>
                <h2>{node.blogPostTitle}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.blogPostExcerpt.childMarkdownRemark.excerpt,
                  }}
                />
                <A to={path}>{lang === "de" ? `Weiterlesen` : `Read More`}</A>
              </CardBody>
            </Card>
          )
        })}
      </SectionInner>
    </Section>
  )
}
