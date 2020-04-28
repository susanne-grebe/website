import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

const LatestPostsCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #aa5d00;
`

const LatestPostHeader = styled.h2`
  margin-bottom: 1.5rem;
`

const LatestPostsImage = styled(Img)`
  width: 100%;
  height: 300px;
`

const LatestPostsImageOverlay = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(253, 251, 246, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`
const LatestPostTitle = styled.h2`
  opacity: 0;
  position: absolute;
  width: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  transition: all 0.3s ease-in-out;
`

const LatestPostWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  &:hover ${LatestPostsImageOverlay}, &:hover ${LatestPostTitle} {
    opacity: 1;
  }
  &:hover ${LatestPostTitle} {
    color: #aa5d00;
  }
`

export default ({ data, lang }) => {
  return (
    <LatestPostsCard>
      <LatestPostHeader>Latest Posts</LatestPostHeader>
      {data.edges.map(({ node }, index) => {
        const path =
          lang === "de"
            ? `/blog/${node.blogPostSlug}`
            : `/en/blog/${node.blogPostSlug}`
        return (
          <LatestPostWrapper to={path} key={index}>
            <LatestPostsImageOverlay />
            <LatestPostsImage
              fluid={node.blogPostImage.fluid}
              alt={node.blogPostImage.description}
            />{" "}
            <LatestPostTitle>{node.blogPostTitle}</LatestPostTitle>
          </LatestPostWrapper>
        )
      })}
    </LatestPostsCard>
  )
}
