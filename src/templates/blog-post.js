/**
 * @description BLOG-POST SINGLE PAGE GERMAN
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
    max-width: 720px;
    main {
      max-width: 720px;
    }
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
        homePageHeroTitle: data.postsDE.edges[0].node.blogPostTitle,
        homePageHeroSubtitle: "",
        homePageHeroSlogan: data.postsDE.edges[0].node.blogPostDescription,
        homePageHeroBackgroundImage: data.postsDE.edges[0].node.blogPostImage,
      },
    ],
  }

  const seoData = {
    nodes: [
      {
        SeoTitle: data.postsDE.edges[0].node.blogPostTitle,
        SeoKeywords: data.postsDE.edges[0].node.blogPostKeywords,
        SeoDescription: data.postsDE.edges[0].node.blogPostDescription,
        SeoImage: data.postsDE.edges[0].node.blogPostImage,
      },
    ],
  }

  return (
    <Layout>
      <SEO title="blog" data={seoData} lang="de" />
      <Navbar logo={data.localBusinessDE.nodes[0].seoCompanyLogo} lang="de" />
      <Hero heroData={heroData} />
      <Wrapper>
        <main className="main">
          {data.postsDE.edges.map(({ node }, index) => {
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
          <PrevNext prev={pageContext.prev} next={pageContext.next} lang="de" />
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

export const BlogListQuery = graphql`
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
        blogPageShowAboutSidebar
        blogPageShowCategoriesSidebar
        blogPageShowLatestPostSidebar
      }
    }
    postsDE: allContentfulBlogPost(
      filter: { blogPostSlug: { eq: $slug }, node_locale: { eq: "de" } }
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
            fluid(quality: 80, cropFocus: CENTER) {
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
          fluid(quality: 80, cropFocus: CENTER) {
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
            fluid(quality: 80, cropFocus: CENTER) {
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

export default BlogListPage
