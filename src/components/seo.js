/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, data, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { SeoTitle, SeoKeywords, SeoDescription, SeoImage } = data.nodes[0]
  const metaDescription = description || SeoDescription
  const ImgAlt = SeoTitle || SeoImage.description
  const finalPath = path || ''

  if (lang === "") {
    lang = "de"
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={SeoTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: SeoKeywords,
        },
        {
          property: `og:title`,
          content: `${SeoTitle} | ${title}`,
        },
        {
          property: `og:image`,
          content: SeoImage.fluid.src,
        },
        {
          property: `og:image:type`,
          content: `image/jpeg`,
        },
        {
          property: `og:image:width`,
          content: `520`,
        },
        {
          property: `og:image:alt`,
          content: ImgAlt,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: finalPath
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${SeoTitle} | ${title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
