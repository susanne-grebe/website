/**
 * @description HOME PAGE ENGLISH
 */

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import { JsonLd } from "../components/jsonld"

import Navbar from "../components/navbar"
import LatetstPosts from "../components/latetst-posts"
import Footer from "../components/footer/footer"
import { Hero } from "../components/HomeHero"
import { SpaceForSuccess } from "../components/HomeSpaceForSuccess"
import { Coaching } from "../components/HomeCoaching"
import { WissenBonbon } from "../components/HomeWissenBonbon"
import { Tools } from "../components/HomeTools"
import { About } from "../components/HomeAbout"
import { Prices } from "../components/HomePrices"
import { Overview } from "../components/overview"
import { Reviews } from "../components/HomeReviews"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO data={ data.seoEN } path={ `https://susannge-grebe.de/en` }
           lang={ "en" }/>
      <JsonLd data={ data.localBusinessEN.nodes[ 0 ] }/>
      <Navbar logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
              lang="en"/>

      <main className="main">
        <Hero data={ data.heroEN }/>
        <SpaceForSuccess data={ data.spaceForSuccessEN } lang={ "en" }/>
        <Coaching data={ data.coachingEN } lang={ "en" }/>
        <WissenBonbon data={ data.wissenEN } lang={ "en" }/>
        <Tools data={ data.toolsEN } lang={ "en" }/>
        <About data={ data.aboutEN }/>
        <Prices data={ data.priceEN } lang={ "en" } height={ "510px" }
                page={ "index" }/>
        <Overview data={ data.workEN }/>
        <Reviews data={ data.reviewsEN }/>
        <LatetstPosts lang="en" data={ data.latetsPostsEN }/>
      </main>
      <Footer
        data={ data.footerEN.nodes }
        logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
      />
    </Layout>
  )
}

export default IndexPage

export const LayoutQuery = graphql`
    query {
        seoEN: contentfulHomePageSeo(node_locale: {eq: "en"}) {
            title
            keywords
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
        }
        heroEN: contentfulHomePageHeroSection(node_locale: {eq: "en"}) {
            backgroundImage {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            slogan
            subTitle
            title
            textRight
        }
        spaceForSuccessEN: contentfulHomePageSpaceForSuccessSection(node_locale: {eq: "en"}) {
            title
            buttonText
            image {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            text {
                childMarkdownRemark {
                    html
                }
            }
        }
        coachingEN: contentfulHomePageCoachingOffersSection(node_locale: {eq: "en"}) {
            title
            coachingContactButtonText
            coachingCards {
                title
                imageRight
                image {
                    fluid(
                        maxWidth: 520
                        quality: 80
                        cropFocus: CENTER
                    ) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                text {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
        wissenEN: contentfulHomePageWissenbonbonSection(node_locale: {eq: "en"}) {
            title
            image {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            text {
                childMarkdownRemark {
                    html
                }
            }
        }
        toolsEN: contentfulHomePageToolSection(node_locale: {eq: "en"}) {
            title
            toolsContactButtonText
            image {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            text {
                childMarkdownRemark {
                    html
                }
            }
            tools {
                title
                sort
                module1
                module2
                module3
                module4
                seminarContent
                text {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
        aboutEN: contentfulHomePageAboutMeSection(node_locale: {eq: "en"}) {
            title
            text {
                childMarkdownRemark {
                    html
                }
            }
            image {
                fluid(
                    maxWidth: 520
                    quality: 80
                    cropFocus: CENTER
                ) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            qualifications {
                title
                qualifications
            }
            competences {
                title
                competences
            }
        }
        priceEN: contentfulHomePagePricingSection(node_locale: {eq: "en"}) {
            title
            cards {
                whatsIncluded
                title
                text
                price
                buttonText
            }
            footer
            footerStudent
            footerStudentButtonText
        }
        workEN: contentfulHomePageWorkForClientsSection(node_locale: {eq: "en"}) {
            title
            col1Number
            col1Text
            col2Number
            col2Text
            col3Number
            col3Text
        }
        reviewsEN: contentfulHomePageCustomerReviewSection(node_locale: {eq: "en"}) {
            cards {
                customersReviewsJobTitle
                customerReviewsServiceDelivered
                customerReviewsReview
                customerReviewsName
                customerReviewsAvatar {
                    fluid(
                        maxWidth: 520
                        quality: 80
                        cropFocus: CENTER
                    ) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                    description
                }
            }
            title
        }
        localBusinessEN: allContentfulSeoLocalBusiness(
            filter: { node_locale: { eq: "en" } }
        ) {
            nodes {
                seoCompanyCity
                seoCompanyDescription
                seoCompanyEmail
                seoCompanyImage {
                    fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                seoCompanyLogo {
                    fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                seoCompanyName
                seoCompanyOpenTimeFriday
                seoCompanyOpenTimeMonday
                seoCompanyOpenTimeSaturday
                seoCompanyOpenTimeSunday
                seoCompanyOpenTimeThursday
                seoCompanyOpenTimeTuesday
                seoCompanyOpenTimeWednesday
                seoCompanyPostalcode
                seoCompanyPriceRange
                seoCompanyService1Description
                seoCompanyService1Name
                seoCompanyService2Description
                seoCompanyService2Name
                seoCompanyService3Description
                seoCompanyService3Name
                seoCompanyState
                seoCompanyStreetAddress
                seoCompanyTelephone
                seoUrl
            }
        }
        latetsPostsEN: allContentfulBlogPost(
            filter: { node_locale: { eq: "en" } }
            sort: { fields: createdAt, order: DESC }
            limit: 3
        ) {
            edges {
                node {
                    blogPostTitle
                    blogPostExcerpt {
                        childMarkdownRemark {
                            html
                            excerpt(pruneLength: 100)
                        }
                    }
                    blogPostImage {
                        fluid(maxWidth: 624, quality: 80, cropFocus: CENTER) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    blogPostSlug
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
