import React, { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "@emotion/styled"

import Img from "gatsby-image"

import BGImg from "../../images/3577.jpg"
import SectionHeader from "../section-header"

const Reviews = ({ reviewData, reviewHeadingData }) => {
  const { homePageCustomerReviewHeading } = reviewHeadingData.nodes[0]

  const reviews = reviewData.edges

  const [current, setCurrent] = useState(reviews[0])
  const [active, setActive] = useState(0)

  const handleSetClick = event => {
    setCurrent(reviews[event.target.getAttribute("data-review")])
    setActive(event.target.getAttribute("data-review"))
  }

  const theme = useContext(ThemeContext)

  const Section = styled.section`
    padding-top: calc(${theme.paddings.top}rem * 2);
    padding-bottom: calc(${theme.paddings.bottom}rem * 2);
    width: 100%;
    padding-left: ${theme.paddings.left}rem;
    padding-right: ${theme.paddings.right}rem;
    position: relative;
  `

  const ReviewInner = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    transition: all 300ms ease-in-out;
    max-width: ${theme.widths["container-width"]};
    margin: ${theme.margins.center};
    @media (min-width: 768px) {
      justify-content: center;
      align-items: center;
      text-align: center;
      max-width: ${theme.widths["container-width-md"]};
    }
  `

  const ReviewClientImg = styled(Img)`
    width: 125px !important;
    height: 125px !important;
    z-index: 2;
    border-radius: 50%;
    margin-bottom: ${theme.margins.bottom}rem;
  `

  const ReviewService = styled.h3`
    margin-bottom: ${theme.margins.bottom}rem;
  `

  const ReviewReview = styled.p`
    font-size: ${theme.fontSizes.body}rem;
  `

  const ReviewClientName = styled.p`
    color: #aa5d00;
    font-weight: ${theme.fontWeights["body-bold"]};
  `

  const ReviewJobTitle = styled.p`
    font-size: ${theme.fontSizes["body-small"]}rem;
  `

  const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${theme.margins.top}rem;
    z-index: 2;
    position: relative;
  `

  const NavigationButton = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    margin: 0 3px;
    position: relative;
    cursor: pointer;
    &::after {
      content: "";
      width: 6px;
      height: 6px;
      background-color: ${theme.colors.black};
      z-index: 3;
      position: relative;
      transition: background 300ms ease-in-out;
    }
    &:hover::after {
      background-color: ${theme.colors.primary};
    }
    &[data-review="${active}"]::after {
      background-color: ${theme.colors.primary};
    }
  `

  const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${theme.colors.overlay};
  `

  return (
    <Section
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
      <Overlay />
      <SectionHeader title={homePageCustomerReviewHeading} />
      <ReviewInner current={active}>
        <ReviewClientImg
          fixed={current.node.customerReviewsAvatar.fixed}
          alt={current.node.customerReviewsAvatar.description}
          loading="lazy"
        />
        <ReviewService>
          {current.node.customerReviewsServiceDelivered}
        </ReviewService>
        <ReviewReview>{current.node.customerReviewsReview}</ReviewReview>
        <ReviewClientName>{current.node.customerReviewsName}</ReviewClientName>
        <ReviewJobTitle>{current.node.customersReviewsJobTitle}</ReviewJobTitle>
      </ReviewInner>
      <Navigation>
        {reviewData.edges.map((node, index) => {
          return (
            <NavigationButton
              key={index}
              data-review={index}
              onClick={event => handleSetClick(event)}
            ></NavigationButton>
          )
        })}
      </Navigation>
    </Section>
  )
}

export default Reviews
