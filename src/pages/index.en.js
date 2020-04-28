/**
 * @description HOME PAGE ENGLISH
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
      <SEO title="Home" data={data.seoEN} lang="en" />
      <JsonLd data={data.localBusinessEN.nodes[0]} />
      <Navbar logo={data.localBusinessEN.nodes[0].seoCompanyLogo} lang="en" />
      <Hero heroData={data.heroEN} />
      <main className="main">
        <Coaching coachingData={data.coachingEN} />
        <Mediation mediationData={data.mediationEN} />
        <Workshops workshopsData={data.workshopsEN} />
        <Aboutme aboutmeData={data.aboutmeEN} />
        <Overview overviewData={data.overviewEN} />
        <Reviews
          reviewHeadingData={data.customerReviewHeadingEN}
          reviewData={data.customerReviewEN}
        />
        <LatetstPosts lang="en" data={data.latetsPostsEN} />
      </main>
      <Footer
        data={data.footerEN.nodes}
        logo={data.localBusinessEN.nodes[0].seoCompanyLogo}
      />
    </Layout>
  )
}

export default IndexPage

export const LayoutQuery = graphql`
  query {
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
    seoEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        SeoTitle
        SeoKeywords
        SeoDescription
        SeoImage {
          fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
    heroEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        homePageHeroSlogan
        homePageHeroSubtitle
        homePageHeroTitle
        homePageHeroBackgroundImage {
          fluid(quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
    coachingEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        homePageCoachingFirstColContent
        homePageCoachingFirstColImage {
          fixed(quality: 80, cropFocus: CENTER) {
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
          fixed(width: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageCoachingThirdColTitle
      }
    }
    mediationEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
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
          fixed(width: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp
          }
          description
        }
      }
    }
    workshopsEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        homePageWorkshopsFirstColContent
        homePageWorkshopsFirstColImage {
          fixed(width: 600, quality: 80, cropFocus: CENTER) {
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
          fixed(width: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageWorkshopsSecondColImage {
          fixed(width: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
        homePageWorkshopsFooterLinkText
      }
    }
    aboutmeEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        homePageAboutMeHeading
        homePageAboutMeImage {
          fixed(width: 600, cropFocus: CENTER, quality: 80) {
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
    overviewEN: allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
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
    customerReviewHeadingEN: allContentfulHomePage(
      filter: { node_locale: { eq: "en" } }
    ) {
      nodes {
        homePageCustomerReviewHeading
      }
    }
    customerReviewEN: allContentfulCustomerReviews(
      filter: { node_locale: { eq: "en" } }
    ) {
      edges {
        node {
          customerReviewsAvatar {
            fixed(width: 100, quality: 80, height: 100) {
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
            fluid(quality: 80, cropFocus: CENTER) {
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
        footerBottomBarCopyrightContent
        footerMiddleBarAboutMeContent
        footerMiddleBarAboutMeLinkText
        footerMiddleBarBottomButtonText
        footerMiddleBarTopButtonText
        footerMiddleBarLogo {
          fixed(width: 600, cropFocus: CENTER, quality: 80) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
      }
    }
  }
`
