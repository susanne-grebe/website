import React from "react"
import styled from "@emotion/styled"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SectionHeader from "../components/section-header"
import Navbar from "../components/navbar"

import Footer from "../components/footer/footer"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const Section = styled.section`
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    &:nth-of-type(${data.allContentfulPageSection.edges.length}) {
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
      &${Section} {
        padding-bottom: 0;
      }
    }
    &[data-layout="no-image"] {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &${Section} {
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
        &${Section} {
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
        &${Section} {
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
    @media (min-width: 1025px) {
      max-width: 1280px;
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
    -webkit-clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
    clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
    background-color: #fdfbf6;
    @media (min-width: 768px) {
      clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    }
    @media (min-width: 992px) {
      clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    }
  `

  const Image = styled(Img)`
    width: 100% !important;
    margin-bottom: 2rem;
  `

  const CTALink = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    color: #aa5d00;
    border: 1px solid #aa5d00;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    &:hover,
    &:focus {
      background-color: #aa5d00;
      border-color: #aa5d00;
      color: #fff;
    }
  `

  const heroData = {
    nodes: [
      {
        homePageHeroTitle: data.contentfulPage.pageTitle,
        homePageHeroSubtitle: data.contentfulPage.pageSubTitle,
        homePageHeroSlogan: data.contentfulPage.pageSlogan,
        homePageHeroBackgroundImage:
          data.contentfulPage.pageHeroBackgroundImage,
      },
    ],
  }

  const seoDE = {
    nodes: [
      {
        SeoTitle: data.contentfulPage.seoTitle,
        SeoKeywords: data.contentfulPage.seoKeywords,
        SeoDescription: data.contentfulPage.seoDescription,
        SeoImage: data.contentfulPage.seoImage,
      },
    ],
  }

  const path = `https://www.susanne-grebe.de/${data.contentfulPage.pageSlug}`

  return (
    <Layout>
      <SEO title="Susanne Grebe" data={seoDE} lang="de" path={path} />
      <Navbar logo={data.localBusinessDE.nodes[0].seoCompanyLogo} lang="de" />
      <Hero heroData={heroData} />
      {data.allContentfulPageSection.edges.map(({ node }, index) => {
        return node.pageSectionWithoutImage ? (
          <Section key={index} data-layout="no-image">
            {node.pageSectionSkewBackground ? <Skew /> : ""}
            <SectionHeader
              title={node.pageSectionHeading}
              subTitle={node.pageSectionSubHeading}
            />
            <SectionInner data-layout="no-image">
              <div
                dangerouslySetInnerHTML={{
                  __html: node.pageSectionContent.childMarkdownRemark.html,
                }}
              ></div>
            </SectionInner>
          </Section>
        ) : (
            <Section key={index} data-layout={node.pageImageRight}>
              {node.pageSectionSkewBackground ? <Skew /> : ""}
              <SectionHeader
                title={node.pageSectionHeading}
                subTitle={node.pageSectionSubHeading}
              />
              <SectionInner data-layout={node.pageImageRight}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.pageSectionContent.childMarkdownRemark.html,
                  }}
                ></div>
                <Image
                  fluid={node.pageSectionImage.fluid}
                  alt={node.pageSectionImage.description}
                />
              </SectionInner>
            </Section>
          )
      })}
      {data.allContentfulPageCta.edges.length > 0 ? (
        <Section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <SectionHeader
            title={data.allContentfulPageCta.edges[0].node.pageCtaTitle}
            subTitle={data.allContentfulPageCta.edges[0].node.pageCtaContent}
          />
          <CTALink to="/kontakt">
            {data.allContentfulPageCta.edges[0].node.pageCtaLinkText}
          </CTALink>
        </Section>
      ) : (
          ""
        )}
      <Footer
        data={data.footerDE.nodes}
        logo={data.localBusinessDE.nodes[0].seoCompanyLogo}
        lang="de"
      />
    </Layout>
  )
}

export const PageQuery = graphql`
  query($slug: String!) {
    localBusinessDE: allContentfulSeoLocalBusiness(
      filter: { node_locale: { eq: "de" } }
    ) {
      nodes {
        seoCompanyLogo {
          fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    contentfulPage(pageSlug: { eq: $slug }, node_locale: { eq: "de" }) {
      fields {
        slug
      }
      pageTitle
      pageSubTitle
      pageSlug
      pageSlogan
      pageHeroBackgroundImage {
        fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      seoDescription
      seoKeywords
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
        node_locale: { eq: "de" }
      }
    ) {
      edges {
        node {
          pageSectionHeading
          pageSectionSubHeading
          pageSectionSkewBackground
          pageImageRight
          pageSectionWithoutImage
          pageSectionContent {
            childMarkdownRemark {
              html
            }
          }
          pageSectionImage {
            fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            description
          }
        }
      }
    }
    allContentfulPageCta(
      filter: {
        node_locale: { eq: "de" }
        pageCtaShowOnPage: { pageSlug: { eq: $slug } }
      }
    ) {
      edges {
        node {
          pageCtaContent
          pageCtaLinkText
          pageCtaTitle
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
          fixed(width: 60, cropFocus: CENTER, quality: 80) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
      }
    }
  }
`
