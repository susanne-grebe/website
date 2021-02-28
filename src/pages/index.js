/**
 * @description HOME PAGE GERMAN
 */

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import { JsonLd } from "../components/jsonld"

import Navbar from "../components/navbar"
import { Hero } from "../components/HomeHero"
import { SpaceForSuccess } from "../components/HomeSpaceForSuccess"
import { Coaching } from "../components/HomeCoaching"
import { WissenBonbon } from "../components/HomeWissenBonbon"
import { Tools } from "../components/HomeTools"
import { About } from "../components/HomeAbout"
import { Prices } from "../components/HomePrices"
import { Overview } from "../components/overview"
import { Reviews } from "../components/HomeReviews"
import LatetstPosts from "../components/latetst-posts"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO data={ data.seoDE } lang={ "de" }
           path={ `https://susanne-grebe.de` }/>
      <JsonLd data={ data.localBusinessDE.nodes[ 0 ] }/>
      <Navbar logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
              lang="de"/>
      <main className="main">
        <Hero data={ data.heroDE }/>
        <SpaceForSuccess data={ data.spaceForSuccessDE } lang={ "de" }/>
        <Coaching data={ data.coachingDE } lang={ "de" }/>
        <WissenBonbon data={ data.wissenDE } lang={ "de" }/>
        <Tools data={ data.toolsDE } lang={ "de" }/>
        <About data={ data.aboutDE }/>
        <Prices data={ data.priceDE } lang={ "de" } height={ "510px" }
                page={ "index" }/>
        <Overview data={ data.workDE }/>
        <Reviews data={ data.reviewsDE }/>
        <LatetstPosts lang="de" data={ data.latetsPostsDE }/>
      </main>
      <Footer
        data={ data.footerDE.nodes }
        logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
        lang="de"
      />
    </Layout>
  )
}

export default IndexPage

export const LayoutQuery = graphql`
    query {
        seoDE: contentfulHomePageSeo(node_locale: {eq: "de"}) {
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
        heroDE: contentfulHomePageHeroSection(node_locale: {eq: "de"}) {
            backgroundImage {
                fluid(
                    quality: 100
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
        spaceForSuccessDE: contentfulHomePageSpaceForSuccessSection(node_locale: {eq: "de"}) {
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
        coachingDE: contentfulHomePageCoachingOffersSection(node_locale: {eq: "de"}) {
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
        wissenDE: contentfulHomePageWissenbonbonSection(node_locale: {eq: "de"}) {
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
        toolsDE: contentfulHomePageToolSection(node_locale: {eq: "de"}) {
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
        aboutDE: contentfulHomePageAboutMeSection(node_locale: {eq: "de"}) {
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
        priceDE: contentfulHomePagePricingSection(node_locale: {eq: "de"}) {
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
        workDE: contentfulHomePageWorkForClientsSection(node_locale: {eq: "de"}) {
            title
            col1Number
            col1Text
            col2Number
            col2Text
            col3Number
            col3Text
        }
        reviewsDE: contentfulHomePageCustomerReviewSection(node_locale: {eq: "de"}) {
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
        localBusinessDE: allContentfulSeoLocalBusiness(
            filter: { node_locale: { eq: "de" } }
        ) {
            nodes {
                seoCompanyCity
                seoCompanyDescription
                seoCompanyEmail
                seoCompanyImage {
                    fluid(
                        maxWidth: 520
                        quality: 80
                        cropFocus: CENTER
                    ) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                seoCompanyLogo {
                    fluid(
                        maxWidth: 520
                        quality: 80
                        cropFocus: CENTER
                    ) {
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
        latetsPostsDE: allContentfulBlogPost(
            filter: { node_locale: { eq: "de" } }
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
                        fluid(
                            maxWidth: 624,
                            quality: 80,
                            cropFocus: CENTER,
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    blogPostSlug
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
