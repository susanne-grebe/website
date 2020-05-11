const path = require("path")
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ContentfulPage`) {
    const slug = `${node.pageSlug}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
      title: node.title,
    })
  }
  if (node.internal.type === `ContentfulBlogPost`) {
    const slug = `${node.blogPostSlug}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
      title: node.title,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        pagesDE: allContentfulPage(filter: { node_locale: { eq: "de" } }) {
          edges {
            node {
              pageSlug
            }
          }
        }
        pagesEN: allContentfulPage(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              pageSlug
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              pageSlug
              node_locale
            }
          }
        }
        postsDE: allContentfulBlogPost(
          filter: { node_locale: { eq: "de" } }
          sort: { fields: [createdAt], order: DESC }
          limit: 1000
        ) {
          edges {
            next {
              blogPostTitle
              blogPostSlug
            }
            prev: previous {
              blogPostTitle
              blogPostSlug
            }
            node {
              fields {
                slug
              }
            }
          }
        }
        postsEN: allContentfulBlogPost(
          filter: { node_locale: { eq: "en" } }
          sort: { fields: [createdAt], order: DESC }
          limit: 1000
        ) {
          edges {
            next {
              blogPostTitle
              blogPostSlug
            }
            prev: previous {
              blogPostTitle
              blogPostSlug
            }
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  /**
   * Get the result for posts in german
   */
  const postsDE = result.data.postsDE.edges

  /**
   * Get the results for posts in English
   */
  const postsEN = result.data.postsEN.edges

  /**
   * Post per page
   */
  const postsPerPage = 5

  /**
   * Create the amount of pages bases on posts per page and amount of posts in result
   */
  const numPagesDE = Math.ceil(postsDE.length / postsPerPage)
  const numPagesEN = Math.ceil(postsEN.length / postsPerPage)

  /**
   * Create a page for each post in german
   */
  postsDE.forEach(({ node, next, prev }) => {
    createPage({
      path: `/blog/${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: `${node.fields.slug}`,
        next,
        prev,
      },
    })
  })

  /**
   * Create a page for each post in english
   */
  postsEN.forEach(({ node, next, prev }) => {
    createPage({
      path: `/en/blog/${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.en.js`),
      context: {
        slug: `${node.fields.slug}`,
        next,
        prev,
      },
    })
  })

  /**
   * Create the blog pages
   * Page 0 = ./src/pages/blog.js
   * Page 1 and up is ./src/templates/blog-list.js
   */
  Array.from({ length: numPagesDE }).forEach((_, i) => {
    const isFirstPage = i === 0
    const currentPage = i + 1

    if (isFirstPage) return
    createPage({
      path: i === 0 ? `/blog` : `/blog/${currentPage}`,
      component: path.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPagesDE,
        currentPage,
      },
    })
  })

  Array.from({ length: numPagesEN }).forEach((_, i) => {
    const isFirstPage = i === 0
    const currentPage = i + 1

    if (isFirstPage) return
    createPage({
      path: i === 0 ? `/en/blog` : `/en/blog/${currentPage}`,
      component: path.resolve(`./src/templates/blog-list.en.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPagesEN,
        currentPage,
      },
    })
  })

  /**
   * Create pages for the result of the pageQuery
   * Pages are created in contentful
   */
  result.data.allContentfulPage.edges.forEach(({ node }) => {
    if (node.node_locale === "de") {
      createPage({
        path: `${node.pageSlug}`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: `${node.pageSlug}`,
        },
      })
    } else {
      createPage({
        path: `/en/${node.pageSlug}`,
        component: path.resolve(`./src/templates/page.en.js`),
        context: {
          slug: `${node.pageSlug}`,
        },
      })
    }
  })
}
