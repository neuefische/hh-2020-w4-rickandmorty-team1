import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <NavStyled>
      <NavLink exact activeClassName="isActive" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="isActive" to="/locations">
        Locations
      </NavLink>
      <NavLink activeClassName="isActive" to="/characters">
        Characters
      </NavLink>
      <NavLink activeClassName="isActive" to="/episodes">
        Episodes
      </NavLink>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  position: fixed;
  width: 100vw;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`
