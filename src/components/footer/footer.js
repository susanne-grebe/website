import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Footer = ({ data, logo, lang }) => {
  const {
    footerAddressBarPhoneNumber,
    footerAddressBarStreetAndNumber,
    footerAddressBarTitle,
    footerCopyright,
    footerMiddleBarAboutMeContent,
    footerMiddleBarAboutMeLinkText,
    footerMiddleBarTopButtonText,
  } = data[0]

  const year = new Date().getFullYear()

  const Footer = styled.footer`
    background-color: #fdfbf6;
    padding: 1rem;
    min-height: 200px;
  `

  const FooterInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    a {
      color: #aa5d00;
      transition: all 0.3s ease-in-out;
      &:hover,
      &:focus {
        color: #7b341d;
      }
    }
    &:nth-of-type(2) {
      padding: 1rem;
      border-top: 1px solid #aa5d00;
      border-bottom: 1px solid #aa5d00;
    }
    &:nth-of-type(3) {
      padding-bottom: 0;
    }
    @media (min-width: 768px) {
      max-width: 720px;
      &:nth-of-type(2) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
    @media (min-width: 992px) {
      flex-direction: row;
      max-width: 992px;
      justify-content: space-between;
      align-items: center;
      h3,
      a,
      p,
      nav {
        margin-bottom: 1.5rem;
      }
    }
    @media (min-width: 1025px) {
      max-width: 1280px;
    }
  `

  const A = styled(Link)`
    color: #aa5d00;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      color: #7b341d;
    }
    @media (min-width: 768px) {
      padding: 0 0.5rem;
      &:nth-of-type(1) {
        padding-left: 0;
      }
      &:nth-of-type(3) {
        padding-right: 0;
      }
    }
  `

  const Button = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem;
    color: #aa5d00;
    border: 1px solid #aa5d00;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    width: 100%;
    height: 40px;
    background-color: transparent;
    text-align: center;
    margin: 2rem 0;
    &:hover,
    &:focus {
      background-color: #aa5d00;
      border-color: #aa5d00;
      color: #fff !important;
    }
    @media (min-width: 768px) {
      width: 250px;
      margin: 1.5rem 0;
    }
  `

  const Logo = styled(Img)`
    width: 60px;
    height: 35px;
    margin: 1.5rem 1rem 0 1rem;
  `

  const AddressTitle = styled.h3``

  const Address = styled.p``

  const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      width: 80%;
      margin: 0;
    }
  `

  const AboutContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    border-left: 1px solid #aa5d00;
    @media (min-width: 768px) {
      margin: 1.5rem 0;
    }
  `

  const Copyright = styled.div`
    text-align: center;
    @media (min-width: 992px) {
      text-align: left;
    }
  `

  const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  `

  const pathContact = lang === "de" ? `/kontakt` : `/en/contact`
  const pathAbout = lang === "de" ? `/uber-mich` : `/en/about-me`
  const pathCookie = lang === "de" ? `/impressum` : `/en/legal-notice`
  const pathData = lang === "de" ? `/datenschutz` : `/en/data-protection`
  // const pathSitemap = lang === "de" ? `/seitenverzeichnis` : `/en/sitemap`
  const pathLanguage = lang === "de" ? `/en` : `/`
  return (
    <Footer>
      <FooterInner>
        <AddressTitle>{footerAddressBarTitle}</AddressTitle>
        <Address>{footerAddressBarStreetAndNumber}</Address>
        <a href={`tel:${footerAddressBarPhoneNumber}`}>
          {footerAddressBarPhoneNumber}
        </a>
      </FooterInner>
      <FooterInner>
        <Button role="button" to={pathContact}>
          {footerMiddleBarTopButtonText}
        </Button>
        <AboutWrapper>
          <Logo
            fluid={logo.fluid}
            alt="Susanne Grebe - coaching, mediation & workshops"
          />
          <AboutContent>
            <p>{footerMiddleBarAboutMeContent}</p>
            <p>
              <A to={pathAbout}>{footerMiddleBarAboutMeLinkText}</A>
            </p>
          </AboutContent>
        </AboutWrapper>
      </FooterInner>
      <FooterInner>
        <Copyright dangerouslySetInnerHTML={{
          __html: footerCopyright.childMarkdownRemark.html,
        }}>
        </Copyright>
        <FooterNav>
          <A
            className="footer-link mt-2 mt-md-1 mb-1 mt-lg-0 mb-lg-0"
            to={pathCookie}
          >
            {lang === "de" ? `Impressum` : `Legal Notice`}
          </A>
          <A
            className="footer-link mt-1 mb-1 mt-lg-0 mb-lg-0 ml-lg-3"
            to={pathData}
          >
            {lang === "de" ? `Datenschutz` : `Data Protection`}
          </A>
          {/* TODO: create sitemap page */}
          {/* <A
            className="footer-link mt-1 mb-1 mt-lg-0 mb-lg-0 ml-lg-3"
            to={pathSitemap}
          >
            {lang === "de" ? `Seitenverzeichnis` : `Sitemap`}
          </A> */}
          <A
            className="footer-link mt-1 mb-1 mt-lg-0 mb-lg-0 ml-lg-3"
            to={pathLanguage}
          >
            {lang === "de" ? `English Site` : `German Site`}
          </A>
        </FooterNav>
      </FooterInner>
    </Footer>
  )
}

export default Footer
