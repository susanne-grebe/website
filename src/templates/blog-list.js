/**
 * @description BLOG-LIST PAGE GERMAN
 *
 * used when more than the post limit per page is reached
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
    justify-content: space-between;
    main {
      width: 65%;
      padding-right: 4rem;
    }
    aside {
      width: 35%;
    }
  }
`

const BlogListPage = ({ data }) => {
  const heroData = {
    title: data.heroDE.blogPageTitle,
    subTitle: data.heroDE.blogPageSubtitle,
    slogan: data.heroDE.blogPageSlogan,
    backgroundImage: data.heroDE.blogPageHeroImage,
    textRight: false,
    overlay: true,
  }

  const seoData = {
    title: data.heroDE.blogPageTitle,
    description: data.heroDE.blogPageSlogan,
    keywords: [],
    image: data.heroDE.blogPageHeroImage,
  }

  const path = `https://www.susanne-grebe.de/blog`

  return (
    <Layout>
      <SEO data={ seoData } lang="de" path={ path }/>
      <Navbar logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
              lang="de"/>
      <Hero data={ heroData }/>
      <Wrapper>
        <main className="main">
          { data.postsDE.edges.map(({ node }, index) => {
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
          { data.postsLengthDE.edges.length > 2 ? (<Pagination
            currentPage={ 0 }
            numPages={ Math.ceil(data.postsLengthDE.edges.length / 2) }
            lang="de"
          />) : (<></>) }
        </main>
        <aside>
          <Section>
            <SidebarAbout data={ data.sidebarAbout }/>
            <SidebarLatestPosts data={ data.sidebarLatestPostsDE } lang="de"/>
          </Section>
        </aside>
      </Wrapper>
      <Footer
        data={ data.footerDE.nodes }
        logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
        lang="de"
      />
    </Layout>
  )
}

export const BlogListQuery = graphql`
    query($skip: Int!, $limit: Int!) {
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
        heroDE: contentfulBlogPageHeroSection(node_locale: {eq: "de"}) {
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
        blogDE: allContentfulBlogPageHeroSection(filter: { node_locale: { eq: "de" } }) {
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
