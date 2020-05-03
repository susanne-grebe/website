/**
 * @description BLOG-POST SINGLE PAGE ENGLISH
 *
 */
import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Navbar from "../components/navbar"
import Hero from "../components/hero/hero"
import PrevNext from "../components/prev-next-post/"
import SidebarAbout from "../components/sidebar-about"
import SidebarLatestPosts from "../components/sidebar-latest-posts"
import Footer from "../components/footer/footer"

const Section = styled.article`
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

const PostContent = styled.div`
  border-bottom: 1px solid #aa5d00;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  p {
    margin-bottom: 1rem;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  h2:nth-of-type(1) {
    margin-top: 0;
  }
  blockquote {
    padding: 1rem;
    border-left: 1px solid #aa5d00;
    background-color: #fdfbf6;
    p {
      margin-bottom: 0;
    }
  }
  .gatsby-resp-image-link .gatsby-resp-image-wrapper {
    max-width: 100% !important;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const BlogListPage = ({ data, pageContext }) => {
  const heroData = {
    nodes: [
      {
        homePageHeroTitle: data.postsEN.edges[0].node.blogPostTitle,
        homePageHeroSubtitle: "",
        homePageHeroSlogan: data.postsEN.edges[0].node.blogPostDescription,
        homePageHeroBackgroundImage: data.postsEN.edges[0].node.blogPostImage,
      },
    ],
  }

  const seoData = {
    nodes: [
      {
        SeoTitle: data.postsEN.edges[0].node.blogPostTitle,
        SeoKeywords: data.postsEN.edges[0].node.blogPostKeywords,
        SeoDescription: data.postsEN.edges[0].node.blogPostDescription,
        SeoImage: data.postsEN.edges[0].node.blogPostImage,
      },
    ],
  }

  return (
    <Layout>
      <SEO title="Susanne Grebe" data={seoData} lang="en" />
      <Navbar logo={data.localBusinessEN.nodes[0].seoCompanyLogo} lang="en" />
      <Hero heroData={heroData} />
      <Wrapper>
        <main className="main">
          {data.postsEN.edges.map(({ node }, index) => {
            return (
              <Section key={index}>
                <PostContent
                  dangerouslySetInnerHTML={{
                    __html: node.blogPostContent.childMarkdownRemark.html,
                  }}
                />
              </Section>
            )
          })}
          <PrevNext prev={pageContext.prev} next={pageContext.next} lang="en" />
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
      }
    }
    postsEN: allContentfulBlogPost(
      filter: { blogPostSlug: { eq: $slug }, node_locale: { eq: "en" } }
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
            childMarkdownRemark {
              html
            }
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
