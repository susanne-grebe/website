import React from "react"
import styled from "@emotion/styled"

import BGImg from "../../images/3577.jpg"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Title } from "../Title"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 50px 1.5rem 50px 1.5rem;
    position: relative;
    
    h2 {
      z-index: 2;
    }
  
    @media (min-width: 768px) {
      padding: 70px 1.5rem 70px 1.5rem;
    }
    
    @media (min-width: 992px) {
      padding: 90px 1.5rem 90px 1.5rem;
    }
    
    @media (min-width: 1280px) {
      padding: 120px 1.5rem 120px 1.5rem;
    }
    
  `

const ReviewInner = styled.div`
    z-index: 100;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    transition: all 300ms ease-in-out;
    justify-content: center;
  `

const ReviewService = styled.h3`
    margin: 50px auto 2rem auto;
    max-width: max-content;
  `

const ReviewReview = styled.p`
    font-size: 1.125rem;
    text-align: center;
    font-weight: 400;
  `

const ReviewClientName = styled.p`
    color: #aa5d00;
    font-weight: 500;
    text-align: center;
  `

const ReviewJobTitle = styled.p`
    font-size: 1rem;
    text-align: center;
  `

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color:rgba(253, 251, 246, 0.8);
  `

export const Reviews = ({ data }) => {
  const { title, cards } = data

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    arrows: false,
  }

  return (
    <Section
      style={ {
        backgroundImage: `url(${ BGImg })`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      } }
    >
      <Overlay/>
      <Title title={ title }/>
      <Slider { ...settings }>
        { cards.map((card, index) => {
          const { customerReviewsName, customerReviewsReview, customerReviewsServiceDelivered, customersReviewsJobTitle } = card
          return (
            <ReviewInner key={ index } style={ { display: "flex" } }>
              <ReviewService>
                { customerReviewsServiceDelivered }
              </ReviewService>
              <ReviewReview>{ customerReviewsReview }</ReviewReview>
              <ReviewClientName>{ customerReviewsName }</ReviewClientName>
              <ReviewJobTitle>{ customersReviewsJobTitle }</ReviewJobTitle>
            </ReviewInner>
          )
        }) }

      </Slider>
    </Section>
  )
}
