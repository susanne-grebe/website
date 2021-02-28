/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

function SEO ({ lang, meta, data, path }) {
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
    `,
  )

  const { title, keywords, description, image } = data
  const metaDescription = description
  const ImgAlt = title
  const finalPath = path || ""

  if ( lang === "" ) {
    lang = "de"
  }

  return (
    <Helmet
      htmlAttributes={ {
        lang,
      } }
      title={ title }
      titleTemplate={ `%s` }
      meta={ [
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords && keywords.map(keyword => keyword),
        },
        {
          property: `og:title`,
          content: `${ title }`,
        },
        {
          property: `og:image`,
          content: image.fluid.src,
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
          content: finalPath,
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
          content: `${ title }`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta) }
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
}

export default SEO
