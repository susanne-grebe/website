import React, { useState } from "react"
import styled from "@emotion/styled"

import Img from "gatsby-image"

import BGImg from "../../images/3577.jpg"
import SectionHeader from "../section-header"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
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
    justify-content: center;
      align-items: center;
      text-align: center;
  `

const ReviewClientImg = styled(Img)`
    width: 125px !important;
    height: 125px !important;
    z-index: 2;
    border-radius: 50%;
    margin-bottom: 2rem;
  `

const ReviewService = styled.h3`
    margin-bottom: 2rem;
  `

const ReviewReview = styled.p`
    font-size: 1.125rem;
  `

const ReviewClientName = styled.p`
    color: #aa5d00;
    font-weight: 500;
  `

const ReviewJobTitle = styled.p`
    font-size: 1rem;
  `

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color:rgba(253, 251, 246, 0.8);
  `

const Reviews = ({ reviewData, reviewHeadingData }) => {
  const { homePageCustomerReviewHeading } = reviewHeadingData.nodes[0]

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 3000
  }

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
      <Slider {...settings}>
        {reviewData.edges.map((data, index) => {
          return (
            <ReviewInner key={index}>
              <ReviewClientImg
                fixed={data.node.customerReviewsAvatar.fixed}
                alt={data.node.customerReviewsAvatar.description}
                loading="lazy"
              />
              <ReviewService>
                {data.node.customerReviewsServiceDelivered}
              </ReviewService>
              <ReviewReview>{data.node.customerReviewsReview}</ReviewReview>
              <ReviewClientName>{data.node.customerReviewsName}</ReviewClientName>
              <ReviewJobTitle>{data.node.customersReviewsJobTitle}</ReviewJobTitle>
            </ReviewInner>
          )
        })}

      </Slider>
    </Section>
  )
}

export default Reviews
