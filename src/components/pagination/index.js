import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

export default ({ lang, currentPage, numPages }) => {
  const isFirst = currentPage === 0
  const isLast = currentPage === numPages
  const path = lang === "de" ? "/blog" : "/en/blog"
  let nextPage = 0
  let prevPage
  if (isFirst) {
    prevPage = ""
    nextPage = `${path}/${(currentPage + 2).toString()}`
  } else {
    prevPage =
      currentPage - 1 === 1
        ? `${path}`
        : `${path}/${(currentPage - 1).toString()}`
    nextPage = `${path}/${(currentPage + 1).toString()}`
  }

  const Section = styled.section`
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `

  const SectionInner = styled.div`
    display: grid;
    font-size: 1.25rem;
    text-transform: uppercase;
    margin: 0 auto;
    grid-template-areas: "p n l";
  `

  const Prev = styled(Link)`
    grid-area: p;
    &[disabled] {
      pointer-events: none;
    }
  `

  const Numbers = styled.div`
    grid-area: n;
    display: flex;
    flex-direction: row;
    justify-content: center;
    a {
      padding: 0 0.5rem;
    }
  `

  const Next = styled(Link)`
    grid-area: l;
    justify-content: flex-end;
    display: flex;
    &[disabled] {
      pointer-events: none;
    }
  `

  const hasPages = numPages > 0.9

  return (
    <Section>
      {hasPages && (
        <SectionInner>
          <Prev to={prevPage} rel="prev" disabled={isFirst}>
            ←
          </Prev>
          <Numbers>
            {Array.from({ length: numPages }, (_, i) => {
              const page = `/${i + 1}`
              return (
                <Link
                  key={`pagination-number${i + 1}`}
                  to={`${path}${i === 0 ? "" : page}`}
                >
                  {i === 0 ? 1 : i + 1}
                </Link>
              )
            })}
          </Numbers>
          <Next to={nextPage} rel="next" disabled={isLast}>
            →
          </Next>
        </SectionInner>
      )}
    </Section>
  )
}
