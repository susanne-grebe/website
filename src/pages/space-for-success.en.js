/**
 *  @description SPACE FOR SUCCESS PAGE GERMAN
 */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import { Hero } from "../components/HomeHero"
import { Intro } from "../components/SpaceIntro"
import Footer from "../components/footer/footer"
import { About } from "../components/SpaceAbout"
import { Included } from "../components/SpaceInclude"
import { Closing } from "../components/SpaceClosing"
import { Prices } from "../components/HomePrices"
import SEO from "../components/seo"

const SpaceForSuccessPage = ({ data }) => {
  const { seoCompanyLogo } = data.localSEOEN
  const { introTitle, introContent, introImage } = data.pageContentEN
  const { aboutTitle, aboutVideoUrl, aboutContent } = data.pageContentEN
  const { includedTitle, includedContent } = data.pageContentEN
  const { closingTitle, closingImage, closingText } = data.pageContentEN
  const { priceTitle, priceCards, priceFooter } = data.pageContentEN

  const priceData = {
    title: priceTitle,
    cards: priceCards,
    footer: priceFooter,
  }

  return (
    <Layout>
      <SEO data={ data.seoEN } lang={ "en" }
           path={ `https://susanne-grebe.de/en` }/>
      <Navbar lang={ "en" } logo={ seoCompanyLogo }/>

      <main className={ "main" }>
        <Hero data={ data.heroContentEN }/>
        <Intro
          title={ introTitle }
          image={ introImage }
          content={ introContent }
          imageRight={ true }
          noCustomHeight={ true }
        />
        <About
          title={ aboutTitle }
          content={ aboutContent }
          video={ aboutVideoUrl }
        />
        <Included
          title={ includedTitle }
          content={ includedContent }
        />
        <Closing
          title={ closingTitle }
          image={ closingImage }
          content={ closingText }
          imageRight={ false }
          noCustomHeight={ true }
        />
        <Prices data={ priceData } height={ "680px" } lang={ "en" }
                page={ "space" }/>
      </main>
      <Footer
        data={ data.footerEN.nodes }
        logo={ seoCompanyLogo }
        lang="en"
      />
    </Layout>
  )
}

export default SpaceForSuccessPage

export const SpaceForSuccessQuery = graphql`
    query {
        seoEN: contentfulSpaceForSuccessSeo(node_locale: {eq: "de"}) {
            description
            image {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            title
            keywords
        }
        localSEOEN: contentfulSeoLocalBusiness(node_locale: {eq: "en"}) {
            seoCompanyLogo {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
        heroContentEN: contentfulSpaceForSuccessHeroSection(node_locale: {eq: "en"}) {
            title
            textRight
            subTitle
            slogan
            backgroundImage {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
        pageContentEN: contentfulSpaceForSuccessContentSections(node_locale: {eq: "en"}) {
            introTitle
            introContent {
                childMarkdownRemark {
                    html
                }
            }
            introImage {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            priceTitle
            priceCards {
                whatsIncluded
                title
                text
                price
                buttonText
            }
            priceFooter
            includedTitle
            includedContent
            closingTitle
            closingText {
                childMarkdownRemark {
                    html
                }
            }
            closingImage {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            aboutVideoUrl
            aboutTitle
            aboutContent {
                childMarkdownRemark {
                    html
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
                    fixed(
                        width: 60,
                        height: 60,
                        cropFocus: CENTER,
                    ) {
                        ...GatsbyContentfulFixed_withWebp
                    }
                    description
                }
            }
        }
    }
`