/**
 * @description CONTACT PAGE GERMAN
 */

import React, { useEffect, useState } from "react"
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
import GoogleMap from "../components/map/index"
import Footer from "../components/footer/footer"
import { Hero } from "../components/HomeHero"
import SEO from "../components/seo"

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
  @media (min-width: 1024px) {
    max-width: 1280px;
  }
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  margin: 3rem auto;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 50px;
    margin: 2rem auto;
  }
  
  .no-margin-top {
    margin-top: 0;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  margin: 1rem 0;
  &[data-visible="false"] {
    display: none;
  }
`

const FormInput = styled.input`
  font-size: 1rem;
  border: 1px solid #aa5d00;
  border-radius: 5px;
  padding: 0.5rem;
  &:focus,
  &:active {
    outline-color: #aa5d00;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`

const FormTextarea = styled.textarea`
  font-size: 1rem;
  border: 1px solid #aa5d00;
  border-radius: 5px;
  padding: 0.5rem;
  &:focus,
  &:active {
    outline-color: #aa5d00;
  }
`

const FormSelect = styled.select`
  font-size: 1rem;
  border: 1px solid #aa5d00;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  background-image: linear-gradient(45deg, transparent 50%, #aa5d00 50%),
    linear-gradient(135deg, #aa5d00 50%, transparent 50%),
    linear-gradient(to right, #aa5d00, #aa5d00);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  &:focus,
  &:active {
    outline-color: #aa5d00;
  }
`

const FormSelectOption = styled.option`
  padding: 0.5rem;
  font-size: 1rem;
`

const FormLabel = styled.label`
  font-weight: 400;
  font-size: 1.125rem;
`

const FormButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  color: #aa5d00;
  border: 1px solid #aa5d00;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  width: 150px;
  background-color: #fff;
  text-align: center;
  &:hover,
  &:focus {
    background-color: #aa5d00;
    border-color: #aa5d00;
    color: #fff;
  }
  &:disabled,
  &[disabled] {
    color: #404040;
    border-color: #404040;
    &:hover,
    &:focus {
      background-color: #fff;
      color: #404040;
      border-color: #404040;
    }
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

const IndexPage = ({ data, location }) => {
  const [ checked, setChecked ] = useState(false)
  const [ selectState, setSelectState ] = useState("Raum für Erfolg")
  const [ locationState, setLocationState ] = useState(null)

  useEffect(() => {
    if ( location.state ) {
      setLocationState(location.state.choice)
    } else {
      return null
    }

    setSelectState(locationState)
  }, [ locationState ])

  const heroData = {
    title: "Kontakt aufnehmen",
    subTitle: "",
    slogan: "Haben Sie noch Fragen?",
    backgroundImage: data.localBusinessDE.nodes[ 0 ].seoCompanyImage,
    textRight: true,
    overlay: true,
  }

  const seoData = {
    title: "Susanne Grebe - Kontakt aufnehmen",
    description: "Haben Sie noch Fragen zu Führung, Karriere oder Mentalcoaching? Füllen Sie das Formular aus und ich werde Ihre Fragen innerhalb von 24 Stunden beantworten.",
    keywords: [],
    image: data.localBusinessDE.nodes[ 0 ].seoCompanyImage,
  }

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  const handleSelectChange = (evt) => {
    evt.preventDefault()
    setSelectState(evt.target.value)
  }

  const path = `https://www.susanne-grebe.de/kontakt`

  return (
    <Layout>
      <SEO data={ seoData } lang="de" path={ path }/>
      <JsonLd data={ data.localBusinessDE.nodes[ 0 ] }/>
      <Navbar logo={ data.localBusinessDE.nodes[ 0 ].seoCompanyLogo }
              lang="de"/>
      <Hero data={ heroData }/>
      <main className="main">
        <Section>
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
            <Form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              action="/erfolgreich"
            >
              <input type="hidden" name="form-name" value="contact"/>
              <FormGroup data-visible="false">
                <FormLabel htmlFor="botfield">
                  <h3>Füllen Sie das nicht aus, wenn Sie ein Mensch sind</h3>
                </FormLabel>
                <FormInput
                  name="bot-field"
                  aria-label="bot field"
                  id="botfield"
                />
              </FormGroup>
              <FormGroup className={ "no-margin-top" }>
                <FormLabel htmlFor="name">
                  <h3>Ihre Name</h3>
                </FormLabel>
                <FormInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. Jane Doe"
                  aria-label="Ihre Name"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">
                  <h3>Ihre Email</h3>
                </FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e.g. example@email.com"
                  aria-label="Ihre email"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="phone">
                  <h3>Ihre Rufnummer</h3>
                </FormLabel>
                <FormInput
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. +49 123456789"
                  aria-label="Ihre Rufnummer"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="thema">
                  <h3>Ihr Thema</h3>
                </FormLabel>
                <FormSelect name="thema" id="thema"
                            value={ selectState }
                            onChange={ handleSelectChange }>
                  <FormSelectOption
                    value="Coaching Angebote"
                    aria-label="Caoching Angebote"
                  >
                    Coaching Angebote
                  </FormSelectOption>
                  <FormSelectOption
                    value="Mimikresonanz"
                    aria-label="Mimikresonanz"
                  >
                    Mimikresonanz
                  </FormSelectOption>
                  <FormSelectOption
                    value="Raum für Erfolg - Monatlich"
                    aria-label="Raum für Erfolg - Monatlich"
                  >
                    Raum für Erfolg - Monatlich
                  </FormSelectOption>
                  <FormSelectOption
                    value="Raum für Erfolg - Paket"
                    aria-label="Raum für Erfolg - Paket"
                  >
                    Raum für Erfolg - Paket
                  </FormSelectOption>
                  <FormSelectOption
                    value="Coaching Einzel"
                    aria-label="Coaching Einzel"
                  >
                    Coaching Einzel
                  </FormSelectOption>
                  <FormSelectOption
                    value="Coaching Paket"
                    aria-label="Coaching Paket"
                  >
                    Coaching Paket
                  </FormSelectOption>
                  <FormSelectOption
                    value="Wissen Bonbon"
                    aria-label="Wissen Bonbon"
                  >
                    Wissen Bonbon
                  </FormSelectOption>
                  <FormSelectOption
                    value="Mimik Einführungs"
                    aria-label="Mimik Einführungs"
                  >
                    Mimik Einführungs
                  </FormSelectOption>
                  <FormSelectOption
                    value="Mimik Grundlegend"
                    aria-label="Mimik Grundlegend"
                  >
                    Mimik Grundlegend
                  </FormSelectOption>
                  <FormSelectOption
                    value="Mimik Professional"
                    aria-label="Mimik Professional"
                  >
                    Mimik Professional
                  </FormSelectOption>
                  <FormSelectOption value="other" aria-label="etwas anderes">
                    Etwas anderes
                  </FormSelectOption>
                </FormSelect>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="frage">
                  <h3>Ihre Frage / Nachricht</h3>
                </FormLabel>
                <FormTextarea
                  id="frage"
                  name="message"
                  placeholder="Ihre Frage"
                  aria-label="Ihre Frage / Nachricht"
                  rows="5"
                />
              </FormGroup>
              <FormGroup>
                <p>
                  <input
                    defaultChecked={ checked === true ? "checked" : "" }
                    onChange={ () => handleCheckboxChange() }
                    type="checkbox"
                    style={ { marginRight: "1rem" } }
                  />
                  Ich habe die{ " " }
                  <Link to="/datenschutz">Cookie-Richtlinie</Link> gelesen und
                  bin damit einverstanden...{ " " }
                </p>
              </FormGroup>
              <FormGroup>
                <FormButton type="submit" disabled={ !checked }>
                  Senden
                </FormButton>
              </FormGroup>
            </Form>
          </SectionInner>
        </Section>
        <Section
          style={ {
            paddingLeft: "0",
            paddingRight: "0",
            paddingBottom: "0",
            paddingTop: "0",
          } }
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

export default IndexPage

export const LayoutQuery = graphql`
    query {
        seoDE: contentfulBlogPageHeroSection(node_locale: {eq: "de"}) {
            blogPageTitle
            blogPageSubtitle
            blogPageSlogan
            blogPageHeroImage {
                fluid(maxWidth: 520, quality: 80, cropFocus: CENTER) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
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
                        fixed(width: 600, quality: 80, cropFocus: CENTER) {
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
                    fixed(width: 60, cropFocus: CENTER, quality: 80) {
                        ...GatsbyContentfulFixed_withWebp_noBase64
                    }
                    description
                }
            }
        }
    }
`
