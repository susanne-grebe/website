/**
 * @description HOME PAGE GERMAN
 */

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { JsonLd } from "../components/jsonld"

import Navbar from "../components/navbar"
import Hero from "../components/hero/hero"
import Coaching from "../components/coaching"
import Mediation from "../components/mediation"
import Workshops from "../components/workshops"
import Aboutme from "../components/aboutme"
import Overview from "../components/overview"
import Reviews from "../components/reviews"
import LatetstPosts from "../components/latetst-posts"
import Footer from "../components/footer/footer"

const IndexPage = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Startseite" data={data.seoDE} lang="de" />
      <JsonLd data={data.localBusinessDE.nodes[0]} />
      <Navbar logo={data.localBusinessDE.nodes[0].seoCompanyLogo} lang="de" />
      <Hero heroData={data.heroDE} />
      <main className="main">
        <Coaching coachingData={data.coachingDE} lang="de" />
        <Mediation mediationData={data.mediationDE} lang="de" />
        <Workshops workshopsData={data.workshopsDE} lang="de" />
        <Aboutme aboutmeData={data.aboutmeDE} lang="de" />
        <Overview overviewData={data.overviewDE} />
        <Reviews
          reviewHeadingData={data.customerReviewHeadingDE}
          reviewData={data.customerReviewDE}
        />
        <LatetstPosts lang="de" data={data.latetsPostsDE} />
      </main>
      <Footer
        data={data.footerDE.nodes}
        logo={data.localBusinessDE.nodes[0].seoCompanyLogo}
        lang="de"
      />
    </Layout>
  )
}

export default IndexPage

export const LayoutQuery = graphql`
  query {
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
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
            srcSetBreakpoints: [200, 340, 520, 800, 890]
            background: "rgba(253, 251, 246, 0.8)"
          ) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        seoCompanyLogo {
          fluid(
            maxWidth: 520
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
            srcSetBreakpoints: [200, 340, 520, 800, 890]
            background: "rgba(253, 251, 246, 0.8)"
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
    seoDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        SeoTitle
        SeoKeywords
        SeoDescription
        SeoImage {
          fluid(
            maxWidth: 520
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
            srcSetBreakpoints: [200, 340, 520, 800, 890]
            background: "rgba(253, 251, 246, 0.8)"
          ) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
    heroDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        homePageHeroSlogan
        homePageHeroSubtitle
        homePageHeroTitle
        homePageHeroBackgroundImage {
          fluid(
            maxWidth: 800
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
            srcSetBreakpoints: [200, 340, 520, 800, 890]
            background: "rgba(253, 251, 246, 0.8)"
          ) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
    coachingDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        homePageCoachingFirstColContent
        homePageCoachingFirstColImage {
          fixed(
            width: 600
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
            srcSetBreakpoints: [200, 340, 520, 800, 890]
            background: "rgba(253, 251, 246, 0.8)"
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageCoachingFirstColTitle
        homePageCoachingFooterLinkText
        homePageCoachingHeading
        homePageCoachingSubHeading
        homePageCoachingSecondColContent
        homePageCoachingSecondColImage {
          fixed(width: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageCoachingSecondColTitle
        homePageCoachingThirdColContent
        homePageCoachingThirdColImage {
          fixed(
            width: 600
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageCoachingThirdColTitle
      }
    }
    mediationDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        homePageMediationHeading
        homePageMediationSubHeading
        homePageMediationFooterLinkText
        homePageMediationContent {
          childMarkdownRemark {
            html
          }
        }
        homePageMediationImage {
          fixed(
            width: 600
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp
          }
          description
        }
      }
    }
    workshopsDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        homePageWorkshopsFirstColContent
        homePageWorkshopsFirstColImage {
          fixed(
            width: 600
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageWorkshopsFirstColTitle
        homePageWorkshopsHeading
        homePageWorkshopsSecondColContent
        homePageWorkshopsSecondColTitle
        homePageWorkshopsSubHeading
        homePageWorkshopsThirdColContent
        homePageWorkshopsThirdColTitle
        homePageWorkshopsThirdColImage {
          fixed(
            width: 600
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageWorkshopsSecondColImage {
          fixed(
            width: 600
            quality: 80
            cropFocus: CENTER
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageWorkshopsFooterLinkText
      }
    }
    aboutmeDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        homePageAboutMeHeading
        homePageAboutMeImage {
          fixed(
            width: 600
            cropFocus: CENTER
            quality: 80
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageAboutMeContent {
          childMarkdownRemark {
            html
          }
        }
        homePageAboutMeLinkText
      }
    }
    overviewDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        homePageOverviewFirstColNumber
        homePageOverviewFirstColTitle
        homePageOverviewHeading
        homePageOverviewSecondColNumber
        homePageOverviewSecondColTitle
        homePageOverviewThirdColNumber
        homePageOverviewThirdColTitle
      }
    }
    customerReviewHeadingDE: allContentfulHomePage(
      filter: { node_locale: { eq: "de" } }
    ) {
      nodes {
        homePageCustomerReviewHeading
      }
    }
    customerReviewDE: allContentfulCustomerReviews(
      filter: { node_locale: { eq: "de" } }
    ) {
      edges {
        node {
          customerReviewsAvatar {
            fixed(
              width: 100
              quality: 80
              height: 100
              jpegQuality: 80
              pngQuality: 80
              webpQuality: 80
            ) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
            description
          }
          customerReviewsName
          customerReviewsReview
          customerReviewsServiceDelivered
          customersReviewsJobTitle
        }
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
              maxWidth: 624
              quality: 80
              cropFocus: CENTER
              jpegQuality: 80
              pngQuality: 80
              webpQuality: 80
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
        footerBottomBarCopyrightContent
        footerMiddleBarAboutMeContent
        footerMiddleBarAboutMeLinkText
        footerMiddleBarBottomButtonText
        footerMiddleBarTopButtonText
        footerMiddleBarLogo {
          fixed(
            width: 60
            height: 60
            cropFocus: CENTER
            quality: 80
            jpegQuality: 80
            pngQuality: 80
            webpQuality: 80
          ) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
      }
    }
  }
`
