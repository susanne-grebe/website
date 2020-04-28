import React from "react"
import styled from "@emotion/styled"

import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fdfbf6;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  @media (max-width: 576px) {
    width: 100%;
  }
`

const A = styled(Link)`
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #404040;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #aa5d00;
  }
`
const Menu = ({ open, setOpen, menuItems }) => {
  return (
    <StyledMenu open={open}>
      {menuItems.map((item, index) => (
        <A
          key={index}
          to={item.slug}
          onClick={() => setOpen(!open)}
          activeStyle={{ color: "#aa5d00" }}
        >
          {item.name}
        </A>
      ))}
    </StyledMenu>
  )
}

export default Menu
