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

import Navbar from "../components/navbar"
import Post from "../components/post-card"
import Pagination from "../components/pagination"
import SidebarAbout from "../components/sidebar-about"
import SidebarLatestPosts from "../components/sidebar-latest-posts"
import Footer from "../components/footer/footer"
import { Hero } from "../components/HomeHero"
import SEO from "../components/seo"

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
    title: data.heroEN.blogPageTitle,
    subTitle: data.heroEN.blogPageSubtitle,
    slogan: data.heroEN.blogPageSlogan,
    backgroundImage: data.heroEN.blogPageHeroImage,
    textRight: false,
    overlay: true,
  }

  const seoData = {
    title: data.heroEN.blogPageTitle,
    description: data.heroEN.blogPageSlogan,
    keywords: [],
    image: data.heroEN.blogPageHeroImage,
  }

  const path = `https://www.susanne-grebe.de/en/blog`

  return (
    <Layout>
      <SEO data={ seoData } lang="en" path={ path }/>
      <Navbar logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
              lang="en"/>
      <Hero data={ heroData }/>
      <Wrapper>
        <main className="main">
          { data.postsEN.edges.map(({ node }, index) => {
            return (
              <Section key={ index }>
                <Post
                  image={ node.blogPostImage.fluid }
                  imageDescription={ node.blogPostImage.description }
                  title={ node.blogPostTitle }
                  created={ node.createdAt }
                  excerpt={ node.blogPostExcerpt.childMarkdownRemark }
                  slug={ node.fields.slug }
                  lang="de"
                />
              </Section>
            )
          }) }
          { data.postsLengthEN.edges.length > 2 ? (<Pagination
            currentPage={ 0 }
            numPages={ Math.ceil(data.postsLengthEN.edges.length / 2) }
            lang="en"
          />) : (<></>) }
        </main>
        <aside>
          <Section>
            <SidebarAbout data={ data.sidebarAbout }/>
            <SidebarLatestPosts data={ data.sidebarLatestPostsEN } lang="en"/>
          </Section>
        </aside>
      </Wrapper>
      <Footer
        data={ data.footerEN.nodes }
        logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
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
        heroEN: contentfulBlogPageHeroSection(node_locale: {eq: "en"}) {
            blogPageHeroImage {
                fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                    ...GatsbyContentfulFluid_withWebp
                }
                description
            }
            blogPageSlogan
            blogPageSubtitle
            blogPageTitle
        }
        blogEN: allContentfulBlogPageHeroSection(filter: { node_locale: { eq: "en" } }) {
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

export default BlogListPage
