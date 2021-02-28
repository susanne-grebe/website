import React from "react"
import styled from "@emotion/styled"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SectionHeader from "../components/section-header"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { Hero } from "../components/HomeHero"

export default ({ data }) => {
  const Section = styled.section`
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    &:nth-of-type(${ data.allContentfulPageSection.edges.length }) {
      padding-bottom: 6rem;
    }
    &[data-layout="true"] {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  `

  const SectionInner = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 540px;
    position: relative;
    z-index: 2;
    &[data-layout="true"] {
      flex-direction: column;
      &${ Section } {
        padding-bottom: 0;
      }
    }
    &[data-layout="no-image"] {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &${ Section } {
        padding-bottom: 0;
      }
      div h6,
      div h5,
      div h4,
      div h3,
      div h2 {
        margin-top: 3rem;
        margin-bottom: 1rem;
      }
    }
    div {
      p a .gatsby-resp-image-wrapper {
        margin-left: 0 !important;
        margin-top: 2rem;
        margin-bottom: 2rem;
        max-width: 250px !important;
        width: 100%;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row-reverse;
      max-width: 720px;
      div {
        padding-left: 2rem;
        padding-right: 0;
        max-width: 720px;
        width: 100%;
      }
      &[data-layout="no-image"] {
        flex-direction: column;
        justify-content: center;
        &${ Section } {
          padding-bottom: 0;
        }
      }
      &[data-layout="true"] {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 2rem;
        div {
          padding-right: 2rem;
          padding-left: 2rem;
          max-width: 100%;
          margin-bottom: 2rem;
          h4 {
            margin-top: 2.5rem;
            margin-bottom: 1.35rem;
          }
        }
      }
    }
    @media (min-width: 992px) {
      max-width: 992px;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      &[data-layout="no-image"] {
        flex-direction: column;
        justify-content: center;
        &${ Section } {
          padding-bottom: 0;
        }
      }
      &[data-layout="true"] {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        padding-bottom: 2rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        div {
          padding-right: 2rem;
          padding-left: 0;
          max-width: 100%;
          margin-bottom: 2rem;
        }
      }
    }
  `

  const Skew = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    background-color: #fdfbf6;
  `

  const Image = styled(Img)`
    width: 100% !important;
    margin-bottom: 2rem;
  `

  const heroData = {
    title: data.contentfulPage.pageTitle,
    subTitle: data.contentfulPage.pageSubTitle,
    slogan: data.contentfulPage.pageSlogan,
    backgroundImage:
    data.contentfulPage.pageHeroBackgroundImage,
    textRight: false,
    overlay: true,
  }

  const seoEN = {
    title: data.contentfulPage.seoTitle,
    keywords: data.contentfulPage.seoKeywords,
    description: data.contentfulPage.seoDescription,
    image: data.contentfulPage.seoImage,
  }

  const path = `https://www.susanne-grebe.de/en/${ data.contentfulPage.pageSlug }`

  return (
    <Layout>
      <SEO title="Susanne Grebe" data={ seoEN } lang="en" path={ path }/>
      <Navbar logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
              lang="en"/>
      <Hero data={ heroData }/>
      { data.allContentfulPageSection.edges.map(({ node }, index) => {
        return node.pageSectionWithoutImage ? (
          <Section key={ index } data-layout="no-image">
            { node.pageSectionSkewBackground ? <Skew/> : "" }
            <SectionHeader
              title={ node.pageSectionHeading }
              subTitle={ node.pageSectionSubHeading }
              isPage={ true }
            />
            <SectionInner data-layout="no-image">
              <div
                dangerouslySetInnerHTML={ {
                  __html: node.pageSectionContent.childMarkdownRemark.html,
                } }
              />
            </SectionInner>
          </Section>
        ) : (
          <Section key={ index } data-layout={ node.pageImageRight }>
            { node.pageSectionSkewBackground ? <Skew/> : "" }
            <SectionHeader
              title={ node.pageSectionHeading }
              subTitle={ node.pageSectionSubHeading }
              isPage={ true }
            />
            <SectionInner data-layout={ node.pageImageRight }>
              <div
                dangerouslySetInnerHTML={ {
                  __html: node.pageSectionContent.childMarkdownRemark.html,
                } }
              />
              <Image
                fluid={ node.pageSectionImage.fluid }
                alt={ node.pageSectionImage.description }
              />
            </SectionInner>
          </Section>
        )
      }) }
      <Footer
        data={ data.footerEN.nodes }
        logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
      />
    </Layout>
  )
}

export const PageQuery = graphql`
    query($slug: String!) {
        localBusinessEN: allContentfulSeoLocalBusiness(
            filter: { node_locale: { eq: "en" } }
        ) {
            nodes {
                seoCompanyLogo {
                    fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
        contentfulPage(pageSlug: { eq: $slug }, node_locale: { eq: "en" }) {
            fields {
                slug
            }
            pageTitle
            pageSlug
            pageHeroBackgroundImage {
                fluid(maxWidth: 800, quality: 80, cropFocus: CENTER) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                }
            }
            seoDescription
            seoTitle
            seoImage {
                fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                }
            }
        }
        allContentfulPageSection(
            sort: { fields: createdAt, order: ASC }
            filter: {
                pageSectionShowOnPage: { pageSlug: { eq: $slug } }
                node_locale: { eq: "en" }
            }
        ) {
            edges {
                node {
                    pageSectionHeading
                    pageSectionSkewBackground
                    pageImageRight
                    pageSectionWithoutImage
                    pageSectionContent {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
        footerEN: allContentfulFooterContent(
            filter: { node_locale: { eq: "en" } }
        ) {
            nodes {
                footerAddressBarPhoneNumber
                footerAddressBarStreetAndNumber
                footerAddressBarTitle
                footerCopyright {
                    childMarkdownRemark {
                        html
                    }
                }
                footerMiddleBarAboutMeContent
                footerMiddleBarAboutMeLinkText
                footerMiddleBarTopButtonText
                footerMiddleBarLogo {
                    fixed(width: 60, cropFocus: CENTER, quality: 80) {
                        ...GatsbyContentfulFixed_withWebp_noBase64
                    }
                    description
                }
            }
        }
    }
`
