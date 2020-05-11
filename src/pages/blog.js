/**
 * @description BLOG PAGE GERMAN
 */

import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Navbar from "../components/navbar"
import Hero from "../components/hero/hero"
import Post from "../components/post-card"
import Pagination from "../components/pagination"
import SidebarAbout from "../components/sidebar-about"
import SidebarLatestPosts from "../components/sidebar-latest-posts"
import Footer from "../components/footer/footer"

const Section = styled.section`
  position: relative;
  padding-top: 6rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 992px;
  }
  @media (min-width: 992px) {
    max-width: 1280px;
    flex-direction: row;
    main {
      width: 65%;
      padding-right: 4rem;
    }
    aside {
      width: 35%;
    }
  }
`

const BlogPage = ({ data, pageContext }) => {
  const heroData = {
    nodes: [
      {
        homePageHeroTitle: data.blogDE.nodes[0].blogPageTitle,
        homePageHeroSubtitle: data.blogDE.nodes[0].blogPageSubtitle,
        homePageHeroSlogan: data.blogDE.nodes[0].blogPageSlogan,
        homePageHeroBackgroundImage: data.blogDE.nodes[0].blogPageHeroImage,
      },
    ],
  }

  const path = `https://www.susanne-grebe.de/blog`

  return (
    <Layout>
      <SEO title="blog" data={data.seoDE} lang="de" path={path} />
      <Navbar logo={data.localBusinessDE.nodes[0].seoCompanyLogo} lang="de" />
      <Hero heroData={heroData} />
      <Wrapper>
        <main className="main">
          {data.postsDE.edges.map(({ node }, index) => {
            return (
              <Section key={index}>
                <Post
                  image={node.blogPostImage.fluid}
                  imageDescription={node.blogPostImage.description}
                  title={node.blogPostTitle}
                  created={node.createdAt}
                  excerpt={node.blogPostExcerpt.childMarkdownRemark}
                  slug={node.fields.slug}
                  lang="de"
                />
              </Section>
            )
          })}
          <Pagination
            currentPage={0}
            numPages={Math.ceil(data.postsLengthDE.edges.length / 2)}
            lang="de"
          />
        </main>
        <aside>
          <Section>
            <SidebarAbout data={data.sidebarAbout} />
            <SidebarLatestPosts data={data.sidebarLatestPostsDE} lang="de" />
          </Section>
        </aside>
      </Wrapper>
      <Footer
        data={data.footerDE.nodes}
        logo={data.localBusinessDE.nodes[0].seoCompanyLogo}
        lang="de"
      />
    </Layout>
  )
}

export const BlogQuery = graphql`
  query {
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
    seoDE: allContentfulHomePage(filter: { node_locale: { eq: "de" } }) {
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
    blogDE: allContentfulBlogPage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        blogPageSlogan
        blogPageSubtitle
        blogPageTitle
        blogPageHeroImage {
          fluid(maxWidth: 800, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
    postsLengthDE: allContentfulBlogPost(
      filter: { node_locale: { eq: "de" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
        }
      }
    }
    postsDE: allContentfulBlogPost(
      filter: { node_locale: { eq: "de" } }
      sort: { fields: [createdAt], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          blogPostExcerpt {
            childMarkdownRemark {
              html
            }
          }
          blogPostContent {
            blogPostContent
          }
          blogPostDescription
          blogPostTitle
          blogPostImage {
            fluid(maxWidth: 624, quality: 80, cropFocus: CENTER) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
          createdAt(formatString: "DD-MM-YYYY")
        }
      }
    }
    sidebarAbout: allContentfulAuthor(filter: { node_locale: { eq: "de" } }) {
      nodes {
        authorBio {
          childMarkdownRemark {
            html
          }
        }
        authorImage {
          fluid(maxWidth: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
        authorInstagram
        authorLinkedIn
        authorName
        authorTwitter
        authorFacebook
      }
    }
    sidebarLatestPostsDE: allContentfulBlogPost(
      filter: { node_locale: { eq: "de" } }
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          blogPostTitle
          blogPostImage {
            fluid(maxWidth: 600, quality: 80, cropFocus: CENTER) {
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
          fixed(width: 600, cropFocus: CENTER, quality: 80) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
      }
    }
  }
`

export default BlogPage
