/**
 * @description BLOG-LIST PAGE GERMAN
 *
 * used when more than the post limit per page is reached
 */

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

const BlogListPage = ({ data, pageContext }) => {
  const heroData = {
    nodes: [
      {
        homePageHeroTitle: data.blogEN.nodes[0].blogPageTitle,
        homePageHeroSubtitle: data.blogEN.nodes[0].blogPageSubtitle,
        homePageHeroSlogan: data.blogEN.nodes[0].blogPageSlogan,
        homePageHeroBackgroundImage: data.blogEN.nodes[0].blogPageHeroImage,
      },
    ],
  }

  const seoData = {
    nodes: [
      {
        SeoTitle: data.blogEN.nodes[0].blogPageTitle,
        SeoKeywords: data.seoEN.nodes[0].blogPostKeywords,
        SeoDescription: data.seoEN.nodes[0].blogPostDescription,
        SeoImage: data.blogEN.nodes[0].blogPageHeroImage,
      },
    ],
  }

  return (
    <Layout>
      <SEO title="blog" data={seoData} lang="en" />
      <Navbar logo={data.localBusinessEN.nodes[0].seoCompanyLogo} lang="en" />
      <Hero heroData={heroData} />
      <Wrapper>
        <main className="main">
          {data.postsEN.edges.map(({ node }, index) => {
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
            currentPage={pageContext.currentPage}
            numPages={pageContext.numPages}
            lang="de"
          />
        </main>
        <aside>
          <Section>
            <SidebarAbout data={data.sidebarAbout} />
            <SidebarLatestPosts data={data.sidebarLatestPostsEN} lang="en" />
          </Section>
        </aside>
      </Wrapper>
      <Footer
        data={data.footerEN.nodes}
        logo={data.localBusinessEN.nodes[0].seoCompanyLogo}
      />
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
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
    blogEN: allContentfulBlogPage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        blogPageShowAboutSidebar
        blogPageShowCategoriesSidebar
        blogPageShowLatestPostSidebar
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
    postsLengthEN: allContentfulBlogPost(
      filter: { node_locale: { eq: "en" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
        }
      }
    }
    postsEN: allContentfulBlogPost(
      filter: { node_locale: { eq: "en" } }
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
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
    sidebarAbout: allContentfulAuthor(filter: { node_locale: { eq: "en" } }) {
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
    sidebarLatestPostsEN: allContentfulBlogPost(
      filter: { node_locale: { eq: "en" } }
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
          fixed(width: 60, cropFocus: CENTER, quality: 80) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          description
        }
      }
    }
  }
`

export default BlogListPage
