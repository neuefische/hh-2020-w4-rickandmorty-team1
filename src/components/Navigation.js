import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import NavButton from './NavButton/NavButton'
import img from '../images/btn-episodes2.jpg'

export default function Navigation() {
  return (
    <NavStyled>
      <NavLink exact activeClassName="isActive" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="isActive" to="/characters">
        Characters
      </NavLink>
      <NavLink activeClassName="isActive" to="/episodes">
        Episodes
      </NavLink>
      <NavLink activeClassName="isActive" to="/locations">
        Locations
      </NavLink>
      <NavLink activeClassName="isActive" to="/game">
        Dead or Alive
      </NavLink>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  position: fixed;
  z-index: 200;
  background-color: lightpink;
  width: 100vw;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`
