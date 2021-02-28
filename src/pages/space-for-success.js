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

const RaumFurErfolgPage = ({ data }) => {
  const { seoCompanyLogo } = data.localSEODE
  const { introTitle, introContent, introImage } = data.pageContentDE
  const { aboutTitle, aboutVideoUrl, aboutContent } = data.pageContentDE
  const { includedTitle, includedContent } = data.pageContentDE
  const { closingTitle, closingImage, closingText } = data.pageContentDE
  const { priceTitle, priceCards, priceFooter } = data.pageContentDE

  const priceData = {
    title: priceTitle,
    cards: priceCards,
    footer: priceFooter,
  }

  return (
    <Layout>
      <SEO data={ data.seoDE } lang={ "de" }
           path={ `https://susanne-grebe.de` }/>
      <Navbar lang={ "de" } logo={ seoCompanyLogo }/>

      <main className={ "main" }>
        <Hero data={ data.heroContentDE }/>
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
        <Prices data={ priceData } height={ "680px" } lang={ "de" }
                page={ "space" }/>
      </main>
      <Footer
        data={ data.footerDE.nodes }
        logo={ seoCompanyLogo }
        lang="de"
      />
    </Layout>
  )
}

export default RaumFurErfolgPage

export const RaumFurErfolgQuery = graphql`
    query {
        seoDE: contentfulSpaceForSuccessSeo(node_locale: {eq: "de"}) {
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
        localSEODE: contentfulSeoLocalBusiness(node_locale: {eq: "de"}) {
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
        heroContentDE: contentfulSpaceForSuccessHeroSection(node_locale: {eq: "de"}) {
            title
            textRight
            subTitle
            slogan
            backgroundImage {
                fluid(
                    quality: 100
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
        pageContentDE: contentfulSpaceForSuccessContentSections(node_locale: {eq: "de"}) {
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
        footerDE: allContentfulFooterContent(
            filter: { node_locale: { eq: "de" } }
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