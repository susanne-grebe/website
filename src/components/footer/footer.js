import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { ThemeContext } from "styled-components"

const Footer = ({ data, logo, lang }) => {
  const theme = useContext(ThemeContext)
  const {
    footerAddressBarPhoneNumber,
    footerAddressBarStreetAndNumber,
    footerAddressBarTitle,
    footerCopyright,
    footerMiddleBarAboutMeContent,
    footerMiddleBarTopButtonText,
  } = data[ 0 ]

  const Footer = styled.footer`
    background-color: #fdfbf6;
    padding: 50px 0;
    min-height: 200px;
    font-weight: 400;
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
        justify-content: space-between;
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
    color: #ffffff;
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
    max-width: 250px;
    margin: 35px auto 40px auto;
    width: 100%;
    padding: 12px 20px;
    background-color: ${ theme.colors.primary };
    color: #ffffff !important;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 16%);
    
    :hover, :focus {
      color: #ffffff;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 16%);
    }
    
    @media (min-width: 768px) {
      width: 250px;
      margin: 1.5rem 0;
    }
  `

  const Logo = styled(Img)`
    width: 100px;
    height: 55px;
    margin: 1.5rem 1rem 0 1rem;
  `

  const AddressTitle = styled.h3``

  const Address = styled.p`
    font-weight: 400;
  `

  const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      width: 70%;
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
  const pathCookie = lang === "de" ? `/impressum` : `/en/legal-notice`
  const pathData = lang === "de" ? `/datenschutz` : `/en/data-protection`
  // const pathSitemap = lang === "de" ? `/seitenverzeichnis` : `/en/sitemap`
  const pathLanguage = lang === "de" ? `/en` : `/`
  return (
    <Footer>
      <FooterInner>
        <AddressTitle>{ footerAddressBarTitle }</AddressTitle>
        <Address>{ footerAddressBarStreetAndNumber }</Address>
        <a href={ `tel:${ footerAddressBarPhoneNumber }` }>
          { footerAddressBarPhoneNumber }
        </a>
      </FooterInner>
      <FooterInner>
        <Button role="button" to={ pathContact }>
          { footerMiddleBarTopButtonText }
        </Button>
        <AboutWrapper>
          <Logo
            fluid={ logo.fluid }
            alt="Susanne Grebe - coaching, mediation & workshops"
          />
          <AboutContent>
            <p>{ footerMiddleBarAboutMeContent }</p>
          </AboutContent>
        </AboutWrapper>
      </FooterInner>
      <FooterInner>
        <Copyright dangerouslySetInnerHTML={ {
          __html: footerCopyright.childMarkdownRemark.html,
        } }>
        </Copyright>
        <FooterNav>
          <A
            className="footer-link mt-2 mt-md-1 mb-1 mt-lg-0 mb-lg-0"
            to={ pathCookie }
          >
            { lang === "de" ? `Impressum` : `Legal Notice` }
          </A>
          <A
            className="footer-link mt-1 mb-1 mt-lg-0 mb-lg-0 ml-lg-3"
            to={ pathData }
          >
            { lang === "de" ? `Datenschutz` : `Data Protection` }
          </A>
          {/* TODO: create sitemap page */ }
          {/* <A
           className="footer-link mt-1 mb-1 mt-lg-0 mb-lg-0 ml-lg-3"
           to={pathSitemap}
           >
           {lang === "de" ? `Seitenverzeichnis` : `Sitemap`}
           </A> */ }
          <A
            className="footer-link mt-1 mb-1 mt-lg-0 mb-lg-0 ml-lg-3"
            to={ pathLanguage }
          >
            { lang === "de" ? `English Site` : `German Site` }
          </A>
        </FooterNav>
      </FooterInner>
    </Footer>
  )
}

export default Footer
