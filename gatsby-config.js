require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Susanne Grebe`,
    description: `Coaching | Seminare | Beratung | Mediation Im Raum Aachen Mit mehr als 30 Jahren solide praktischer Erfahrung in zahlreichen Unternehmens- und Geschäftsbereichen.`,
    author: `@susanne-grebe`,
    siteUrl: "https://www.susanne-grebe.de",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
              withWebp: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Susanne Grebe Coaching, Mediation & Workshops`,
        short_name: `Susanne Grebe`,
        start_url: `/`,
        background_color: `#fdfbf6`,
        theme_color: `#fdfbf6`,
        display: `minimal-ui`,
        icon: `src/images/Logo 1 mobile.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "",
        langKeyForNull: "",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.susanne-grebe.de`,
      },
    },
    `gatsby-plugin-gdpr-cookies`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
        },
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-advance-sitemap`,
      options: {
        query: `
          {
            allContentfulBlogPost {
              edges {
                node {
                  blogPostTitle
                  blogPostSlug
                  blogPostImage {
                    fluid {
                      src
                    }
                  }
                  id
                  createdAt
                  updatedAt
                }
              }
            }
          }
        `,
      },
      mapping: {
        // Each data type can be mapped to a predefined sitemap
        // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
        // The default sitemap - if none is passed - will be pages
        allContentfulBlogPost: {
          sitemap: `posts`,
        },
      },
      exclude: [
        `/datenschutz`,
        `/en.data-protection`,
        `/impressum`,
        `/en/legal-notice`,
        `/erfolgreach/`,
        `/kontakt/`,
        `/en/contact/`,
        `/seitenverzeichnis/`,
        `/en/sitemap/`,
        `/404/`,
        `/en/404/`,
        `/404.html`,
      ],
      createLinkInHead: true, // optional: create a link in the `<head>` of your site
      addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
