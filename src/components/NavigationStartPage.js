import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import NavButton from './NavButton/NavButton'
import imgEpisodes from '../images/btn-episodes2.jpg'
import imgCharacters from '../images/btn-characters.jpg'
import imgLocataions from '../images/btn-locations.jpg'
import imgDeadOrAlive from '../images/btn-game.jpeg'

export default function NavigationStartPage() {
  const style = { margin: '20px' }
  return (
    <NavStyled>
      <NavLink style={style} exact activeClassName="isActive" to="/characters">
        <NavButton buttonLabel="CHARACTERS" borderPic={imgCharacters} />
      </NavLink>
      <NavLink style={style} activeClassName="isActive" to="/episodes">
        <NavButton buttonLabel="EPISODES" borderPic={imgEpisodes} />
      </NavLink>
      <NavLink style={style} activeClassName="isActive" to="/locations">
        <NavButton buttonLabel="LOCATIONS" borderPic={imgLocataions} />
      </NavLink>
      <NavLink style={style} activeClassName="isActive" to="/game">
        <NavButton buttonLabel="DEAD OR ALIVE" borderPic={imgDeadOrAlive} />
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
