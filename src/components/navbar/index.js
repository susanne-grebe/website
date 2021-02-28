import React, { useEffect, useRef, useState } from "react"
import styled from "@emotion/styled"

import Burger from "./burger"
import Menu from "./nav"
import Logo from "./logo"

const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 75px;
  transition: all 0.3s ease-in-out;
  z-index: 999;
`

const HeaderInner = styled.div`
  max-width: 540px;
  left: 50%;
  position: absolute;
  width: 100%;
  transform: translateX(-50%);
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    max-width: 1280px;
  }
`

const Navbar = ({ logo, lang }) => {
  const [ open, setOpen ] = useState(false)
  const [ headerBG, setHeaderBG ] = useState(false)

  const navRef = useRef()
  navRef.current = headerBG
  useEffect(() => {
    const handleScroll = () => {
      const isSmallDevice = window.innerHeight < 737

      const scrollYoffSet = isSmallDevice ? 10 : 400

      const show = window.scrollY > scrollYoffSet
      if ( navRef.current !== show ) {
        setHeaderBG(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const node = useRef()

  let MenuItems = [
    {
      name: lang === "de" ? "Startseite" : "Home",
      slug: lang === "de" ? "/" : "/en/",
    },
    {
      name: lang === "de" ? "Space for success" : "Space for success",
      slug: lang === "de" ? "/space-for-success" : "/en/space-for-success",
    },
    {
      name: lang === "de" ? "Blog" : "Blog",
      slug: lang === "de" ? "/blog" : "/en/blog",
    },
    {
      name: lang === "de" ? "Kontakt" : "Contact",
      slug: lang === "de" ? "/kontakt" : "/en/contact",
    },
  ]

  return (
    <>
      <Header
        ref={ node }
        style={ {
          backgroundColor: headerBG
            ? "rgba(253, 251, 246, 1)"
            : "rgba(253, 251, 246, 0)",
        } }
      >
        <HeaderInner>
          <Logo logo={ logo.fluid }/>
          <Burger open={ open } setOpen={ setOpen }/>
        </HeaderInner>
      </Header>
      <Menu open={ open } setOpen={ setOpen } menuItems={ MenuItems }/>
    </>
  )
}

export default Navbar
