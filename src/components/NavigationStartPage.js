import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import NavButton from './NavButton/NavButton'
import img from '../images/btn-episodes2.jpg'

export default function Navigation() {
  const style = { margin: '20px' }
  return (
    <NavStyled>
      <NavLink style={style} exact activeClassName="isActive" to="/">
        <NavButton buttonLabel="CHARACTERS" borderPic={img} />
      </NavLink>
      <NavLink style={style} activeClassName="isActive" to="/locations">
        <NavButton buttonLabel="EPISODES" borderPic={img} />
      </NavLink>
      <NavLink style={style} activeClassName="isActive" to="/characters">
        <NavButton buttonLabel="LOCATIONS" borderPic={img} />
      </NavLink>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`
