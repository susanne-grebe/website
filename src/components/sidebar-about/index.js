import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutImage = styled(Img)`
  width: 100%;
  height: 500px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 992px) {
    height: 450px;
  }
`

const AboutTitle = styled.h2`
  font-size: 2.2rem;
`

const AboutBio = styled.p`
  font-size: 1.125rem;
`

const SocialProfiles = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
`

const SocialProfileItem = styled.li`
  width: 25px;
  height: 25px;
  margin: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 2rem;
    svg {
      fill: #aa5d00;
    }
  }
  &:nth-of-type(1) {
    margin-left: 0;
  }
  &:nth-of-type(4) {
    margin-right: 0;
  }
`

export default ({ data }) => {
  const {
    authorImage,
    authorBio,
    authorInstagram,
    authorLinkedIn,
    authorTwitter,
    authorFacebook,
    authorName,
  } = data.nodes[0]
  return (
    <AboutCard>
      <AboutImage fluid={authorImage.fluid} />
      <AboutTitle>{authorName}</AboutTitle>
      <AboutBio
        dangerouslySetInnerHTML={{ __html: authorBio.childMarkdownRemark.html }}
      />
      <SocialProfiles>
        <SocialProfileItem>
          <a
            href={authorFacebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook profile"
            title="susanne grebe's facebook"
          >
            <FaFacebookSquare />
          </a>
        </SocialProfileItem>
        <SocialProfileItem>
          <a
            href={authorInstagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram profile"
            title="susanne grebe's instagram"
          >
            <FaInstagramSquare />
          </a>
        </SocialProfileItem>
        <SocialProfileItem>
          <a
            href={authorLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin profile"
            title="susanne grebe's linkedin"
          >
            <FaLinkedin />
          </a>
        </SocialProfileItem>
        <SocialProfileItem>
          <a
            href={authorTwitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter profile"
            title="susanne grebe's twitter"
          >
            <FaTwitterSquare />
          </a>
        </SocialProfileItem>
      </SocialProfiles>
    </AboutCard>
  )
}
