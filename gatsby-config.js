require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Susanne Grebe`,
    description: `Coaching | Seminare | Beratung | Mediation Im Raum Aachen Mit mehr als 30 Jahren solide praktischer Erfahrung in zahlreichen Unternehmens- und Geschäftsbereichen.`,
    author: `@susanne-grebe`,
    siteUrl: "https://www.susanne-grebe.de",
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS, // leave empty if you want to disable the tracker
          cookieName: "susanne-grebe-gdpr-google-analytics", // default
          anonymize: true, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
        cookieHubId: process.env.COOKIEHUB_API,
        // Optional parameter (default false) - Use new v2 API.
        cookieHubV2Api: true,
        // Categories configured with CookieHub
        categories: [
          {
            categoryName: "analytics", // Unique id of the category which is set by Cookiehub.
            cookieName: "susanne-grebe-gdpr-google-analytics", // Your custom cookie name
          },
        ],
      },
    },
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/impressum`,
          `/datenschutz`,
          `/en/legal-notice`,
          `/en/data-protection`,
          `/en/404/`,
          `/404/`,
          `/erfolgreich/`,
          `/seitenverzeichnis`,
          `/en/sitemap`,
          `/404.html`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Enables Google Optimize using your container Id
        optimizeId: process.env.GOOGLE_WEBSTREAM,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
