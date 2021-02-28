/**
 * @description CONTACT PAGE GERMAN
 */

import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

import Layout from "../components/layout"
import { JsonLd } from "../components/jsonld"

import Navbar from "../components/navbar"
import SectionHeader from "../components/section-header/index"
import GoogleMap from "../components/map/index"
import Footer from "../components/footer/footer"

const Section = styled.section`
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

const SectionInner = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 720px;
  }
  @media (min-width: 1025px) {
    max-width: 1280px;
  }
`

const SectionContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem auto;
  max-width: 540px;
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 2rem;
  }
`

const AboutImg = styled(Img)`
  width: 100% !important;
  height: 300px !important;
  margin-bottom: 2rem;
  margin-top: 2rem;
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
  }
  &:nth-of-type(1) {
    margin-left: 0;
  }
  &:nth-of-type(4) {
    margin-right: 0;
  }
`

const SectionSuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem auto;
  max-width: 540px;
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 2rem;
  }
`

const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const NavItem = styled(Link)`
  color: #aa5d00;
  transition: all 0.3s ease-in-out;
  padding: 0 1rem;
  &:hover,
  &:focus {
    color: #7b341d;
  }
  @media (min-width: 768px) {
    padding: 0 0.5rem;
    &:nth-of-type(1) {
      padding-left: 0;
    }
    &:nth-of-type(4) {
      padding-right: 0;
    }
  }
`

const SuccessPage = ({ data }) => {
  // const heroData = {
  //   nodes: [
  //     {
  //       homePageHeroTitle: "Erfolgreich",
  //       homePageHeroSubtitle: "Ich habe Ihre Nachricht erhalten.",
  //       homePageHeroSlogan: "",
  //       homePageHeroBackgroundImage:
  //         data.localBusinessDE.nodes[0].seoCompanyImage,
  //     },
  //   ],
  // }

  return (
    <Layout>
      {/*<SEO title="Kontakt" data={data.seoDE} lang="de" />*/ }
      <JsonLd data={ data.localBusinessDE.nodes[ 0 ] }/>
      <Navbar logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
              lang="de"/>
      <main className="main">
        <Section>
          <SectionHeader title="Erfolgreich"/>

          <SectionInner>
            <SectionContactInfo>
              <h2>{ data.authorDE.edges[ 0 ].node.authorName }</h2>
              <AboutImg
                fluid={ data.localBusinessDE.nodes[ 0 ].seoCompanyImage.fluid }
                loading="lazy"
              />
              <p
                dangerouslySetInnerHTML={ {
                  __html:
                  data.authorDE.edges[ 0 ].node.authorBio.childMarkdownRemark
                    .html,
                } }
              />
              <SocialProfiles>
                <SocialProfileItem>
                  <a
                    href={ data.authorDE.edges[ 0 ].node.authorFacebook }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare/>
                  </a>
                </SocialProfileItem>
                <SocialProfileItem>
                  <a
                    href={ data.authorDE.edges[ 0 ].node.authorInstagram }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare/>
                  </a>
                </SocialProfileItem>
                <SocialProfileItem>
                  <a
                    href={ data.authorDE.edges[ 0 ].node.authorLinkedIn }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin/>
                  </a>
                </SocialProfileItem>
                <SocialProfileItem>
                  <a
                    href={ data.authorDE.edges[ 0 ].node.authorTwitter }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare/>
                  </a>
                </SocialProfileItem>
              </SocialProfiles>
            </SectionContactInfo>
            <SectionSuccessMessage>
              <h2>Ihre Nachricht ist erhalten.</h2>
              <p>
                Ich werde mein Bestes tun, um innerhalb von 24 Stunden zu
                antworten.
              </p>
              <p>
                In der Zwischenzeit finden Sie vielleicht eine Antwort in den
                folgenden Abschnitten.{ " " }
              </p>
              <NavSection>
                <NavItem to="/coaching-im-raum-aachen">Coaching</NavItem>
                <NavItem to="/mediation-im-raum-aachen">Mediation</NavItem>
                <NavItem to="/seminare-im-raum-aachen">Seminare</NavItem>
                <NavItem to="/blog">Blog</NavItem>
              </NavSection>
            </SectionSuccessMessage>
          </SectionInner>
        </Section>
        <Section
          style={ { paddingLeft: "0", paddingRight: "0", paddingBottom: "0" } }
        >
          <GoogleMap
            companyName={ data.localBusinessDE.nodes[ 0 ].seoCompanyName }
            companyAddress={
              data.localBusinessDE.nodes[ 0 ].seoCompanyStreetAddress
            }
            companyPostalCode={
              data.localBusinessDE.nodes[ 0 ].seoCompanyPostalcode
            }
            companyCity={ data.localBusinessDE.nodes[ 0 ].seoCompanyCity }
            companyEmail={ data.localBusinessDE.nodes[ 0 ].seoCompanyEmail }
            companyPhone={ data.localBusinessDE.nodes[ 0 ].seoCompanyTelephone }
          />
        </Section>
      </main>
      <Footer
        data={ data.footerDE.nodes }
        logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
        lang="de"
      />
    </Layout>
  )
}

export default SuccessPage

export const LayoutQuery = graphql`
    query {
        localBusinessDE: allContentfulSeoLocalBusiness(
            filter: { node_locale: { eq: "de" } }
        ) {
            nodes {
                seoCompanyCity
                seoCompanyDescription
                seoCompanyEmail
                seoCompanyImage {
                    fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                seoCompanyLogo {
                    fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                seoCompanyName
                seoCompanyOpenTimeFriday
                seoCompanyOpenTimeMonday
                seoCompanyOpenTimeSaturday
                seoCompanyOpenTimeSunday
                seoCompanyOpenTimeThursday
                seoCompanyOpenTimeTuesday
                seoCompanyOpenTimeWednesday
                seoCompanyPostalcode
                seoCompanyPriceRange
                seoCompanyService1Description
                seoCompanyService1Name
                seoCompanyService2Description
                seoCompanyService2Name
                seoCompanyService3Description
                seoCompanyService3Name
                seoCompanyState
                seoCompanyStreetAddress
                seoCompanyTelephone
                seoUrl
            }
        }
        authorDE: allContentfulAuthor(filter: { node_locale: { eq: "de" } }) {
            edges {
                node {
                    authorBio {
                        childMarkdownRemark {
                            html
                        }
                    }
                    authorImage {
                        fixed(quality: 80, cropFocus: CENTER) {
                            ...GatsbyContentfulFixed_withWebp_noBase64
                        }
                    }
                    authorName
                    authorFacebook
                    authorInstagram
                    authorLinkedIn
                    authorTwitter
                }
            }
        }
        footerDE: allContentfulFooterContent(
            filter: { node_locale: { eq: "de" } }
        ) {
            nodes {
                footerAddressBarPhoneNumber
                footerAddressBarStreetAndNumber
                footerAddressBarTitle
                footerCopyright {
                    childMarkdownRemark {
                        html
                    }
                }
                footerMiddleBarAboutMeContent
                footerMiddleBarAboutMeLinkText
                footerMiddleBarTopButtonText
                footerMiddleBarLogo {
                    fixed(width: 600, cropFocus: CENTER, quality: 80) {
                        ...GatsbyContentfulFixed_withWebp_noBase64
                    }
                    description
                }
            }
        }
    }
`
