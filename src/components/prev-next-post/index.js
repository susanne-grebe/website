import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import SectionHeader from "../section-header/index"

const Section = styled.section`
  position: relative;
  padding-top: 0;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 1025px) {
    padding-bottom: 6rem;
  }
`

const SectionInner = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`

const PostTitle = styled.h3`
  text-align: center;
  color: #404040;
`

const PostWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: #fdfbf6;
  margin-bottom: 2rem;
  &:nth-of-type(2) {
    margin-bottom: 0;
  }
  @media (min-width: 1025px) {
    width: 50%;
    margin-bottom: 0;
    &:nth-of-type(1) {
      margin-right: 1rem;
    }
    &:nth-of-type(2) {
      margin-left: 1rem;
    }
  }
`

export default ({ prev, next, lang }) => {
  let hasPrev = prev !== null
  let hasNext = next !== null

  let pathPrev = null
  let pathNext = null

  if (hasPrev) {
    pathPrev =
      lang === "de"
        ? `/blog/${prev.blogPostSlug}`
        : `/en/blog/${prev.blogPostSlug}`
  }

  if (hasNext) {
    pathNext =
      lang === "de"
        ? `/blog/${next.blogPostSlug}`
        : `/en/blog/${next.blogPostSlug}`
  }
  return (
    <Section>
      <SectionHeader
        title={lang === "de" ? `Verwandte Beiträge` : `Related Posts`}
      />
      <SectionInner>
        {hasPrev && (
          <PostWrapper to={pathPrev}>
            <PostTitle>{prev.blogPostTitle}</PostTitle>
          </PostWrapper>
        )}
        {hasNext && (
          <PostWrapper to={pathNext}>
            <PostTitle>{next.blogPostTitle}</PostTitle>
          </PostWrapper>
        )}
      </SectionInner>
    </Section>
  )
}
