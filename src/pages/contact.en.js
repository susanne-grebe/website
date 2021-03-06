/**
 * @description CONTACT PAGE ENGLISH
 */

import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
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
  @media (min-width: 1025px) {
    max-width: 1280px;
  }
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  margin: 2rem auto;
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
  const [ selectState, setSelectState ] = useState(null)
  const [ locationState, setLocationState ] = useState(null)

  const { name, namePlaceholder, email, emailPlaceholder, phoneNumber, phoneNumberPlaceholder, message, messagePlaceholder, subject, subjectLabel } = data.formFieldsEN

  useEffect(() => {
    if ( location.state ) {
      setLocationState(location.state.choice)
    } else {
      return null
    }

    setSelectState(locationState)
  }, [ locationState ])

  const heroData = {
    title: "Contact Me",
    subTitle: "",
    slogan: "Do you have any questions?",
    backgroundImage: data.localBusinessEN.nodes[ 0 ].seoCompanyImage,
    textRight: true,
    overlay: true,
  }

  const seoData = {
    title: "Susanne Grebe - Contact Me",
    description: "Do you still have questions about leadership, career or mental coaching? Fill out the form and I will answer your questions within 24hours.",
    keywords: [],
    image: data.localBusinessEN.nodes[ 0 ].seoCompanyImage,
  }

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  const handleSelectChange = (evt) => {
    evt.preventDefault()
    setSelectState(evt.target.value)
  }

  const path = `https://www.susanne-grebe.de/en/contact`

  return (
    <Layout>
      <SEO data={ seoData } lang="en" path={ path }/>
      <JsonLd data={ data.localBusinessEN.nodes[ 0 ] }/>
      <Navbar logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }/>
      <Hero data={ heroData }/>
      <main className="main">
        <Section>
          <SectionInner>
            <SectionContactInfo>
              <h2>{ data.authorEN.edges[ 0 ].node.authorName }</h2>
              <AboutImg
                fluid={ data.localBusinessEN.nodes[ 0 ].seoCompanyImage.fluid }
                loading="lazy"
              />
              <p
                dangerouslySetInnerHTML={ {
                  __html:
                  data.authorEN.edges[ 0 ].node.authorBio.childMarkdownRemark
                    .html,
                } }
              />
              <SocialProfiles>
                <SocialProfileItem>
                  <a
                    href={ data.authorEN.edges[ 0 ].node.authorFacebook }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare/>
                  </a>
                </SocialProfileItem>
                <SocialProfileItem>
                  <a
                    href={ data.authorEN.edges[ 0 ].node.authorInstagram }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare/>
                  </a>
                </SocialProfileItem>
                <SocialProfileItem>
                  <a
                    href={ data.authorEN.edges[ 0 ].node.authorLinkedIn }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin/>
                  </a>
                </SocialProfileItem>
                <SocialProfileItem>
                  <a
                    href={ data.authorEN.edges[ 0 ].node.authorTwitter }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare/>
                  </a>
                </SocialProfileItem>
              </SocialProfiles>
            </SectionContactInfo>
            <Form
              name="contact_en"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              action='/success'
            >
              <input type="hidden" name="form-name" value="contact_en"/>
              <FormGroup data-visible="false">
                <FormLabel htmlFor="botfield">
                  <h3>Do not fill this out if you are a human being</h3>
                </FormLabel>
                <FormInput
                  name="bot-field"
                  aria-label="bot field"
                  id="botfield"
                />
              </FormGroup>
              <FormGroup className={ "no-margin-top" }>
                <FormLabel htmlFor="name">
                  <h3>{ name }</h3>
                </FormLabel>
                <FormInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder={ namePlaceholder }
                  aria-label={ name }
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">
                  <h3>{ email }</h3>
                </FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder={ emailPlaceholder }
                  aria-label={ email }
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="phone">
                  <h3>{ phoneNumber }</h3>
                </FormLabel>
                <FormInput
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder={ phoneNumberPlaceholder }
                  aria-label={ phoneNumber }
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="thema">
                  <h3>Your Subject</h3>
                </FormLabel>
                <FormSelect name="thema"
                            id="thema"
                            value={ selectState }
                            onChange={ handleSelectChange }>
                  { subject.map((doc, index) => (
                    <FormSelectOption
                      value={ doc }
                      aria-label={ doc }
                      key={ index }
                    >
                      { doc }
                    </FormSelectOption>
                  )) }
                </FormSelect>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="frage">
                  <h3>{ message }</h3>
                </FormLabel>
                <FormTextarea
                  id="frage"
                  name="message"
                  placeholder={ messagePlaceholder }
                  aria-label={ message }
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
                  I have read the <a href="/en/data-protection">cookie
                  policy</a>{ " " }
                  and agree to it...{ " " }
                </p>
              </FormGroup>
              <FormGroup>
                <FormButton type="submit" disabled={ !checked }>
                  Send
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
            companyName={ data.localBusinessEN.nodes[ 0 ].seoCompanyName }
            companyAddress={
              data.localBusinessEN.nodes[ 0 ].seoCompanyStreetAddress
            }
            companyPostalCode={
              data.localBusinessEN.nodes[ 0 ].seoCompanyPostalcode
            }
            companyCity={ data.localBusinessEN.nodes[ 0 ].seoCompanyCity }
            companyEmail={ data.localBusinessEN.nodes[ 0 ].seoCompanyEmail }
            companyPhone={ data.localBusinessEN.nodes[ 0 ].seoCompanyTelephone }
          />
        </Section>
      </main>
      <Footer
        data={ data.footerEN.nodes }
        logo={ data.localBusinessEN.nodes[ 0 ].seoCompanyLogo }
      />
    </Layout>
  )
}

export default IndexPage

export const LayoutQuery = graphql`
    query {
        formFieldsEN: contentfulContactFormFields(node_locale: {eq: "en"}) {
            emailPlaceholder
            email
            message
            messagePlaceholder
            name
            namePlaceholder
            phoneNumber
            phoneNumberPlaceholder
            subjectLabel
            subject
        }
        localBusinessEN: allContentfulSeoLocalBusiness(
            filter: { node_locale: { eq: "en" } }
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
        authorEN: allContentfulAuthor(filter: { node_locale: { eq: "en" } }) {
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
        footerEN: allContentfulFooterContent(
            filter: { node_locale: { eq: "en" } }
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
