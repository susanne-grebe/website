import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Article = styled.article`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #aa5d00;
`

const Image = styled(Img)`
  width: 100%;
  height: 250px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    height: 450px;
  }
  @media (min-width: 1025px) {
    height: 500px;
  }
`

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #404040;
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`

const Meta = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #aa5d00;
  font-weight: 400;
`

const Excerpt = styled.p`
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

const Button = styled(Link)`
  background-color: #fff;
  color: #aa5d00;
  border: 1px solid #aa5d00;
  border-radius: 5px;
  display: inline-block;
  padding: 0.5rem 1.5rem;
`

export default ({
  image,
  imageDescription,
  title,
  created,
  excerpt,
  slug,
  lang,
}) => {
  const path = lang === "de" ? `/blog/${slug}` : `/en/blog/${slug}`
  return (
    <Article>
      <Image fluid={image} alt={imageDescription} />
      <Link to={path}>
        <Title>{title}</Title>
      </Link>
      <Meta>
        {lang === "de" ? `Erstellt am ${created}` : `Created On ${created}`}
      </Meta>
      <Excerpt dangerouslySetInnerHTML={{ __html: excerpt.html }} />
      <Button to={path}>{lang === "de" ? `Weiterlesen` : `Read more`}</Button>
    </Article>
  )
}
