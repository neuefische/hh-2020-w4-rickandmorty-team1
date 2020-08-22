import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import LocationPage from './components/pages/locations/LocationPage'
import EpisodesPage from './components/pages/episodes/EpisodesPage'
import CharactersPage from './components/pages/characters/CharactersPage'
import NavigationStartPage from './components/NavigationStartPage'
import styled from 'styled-components'
import Game from './components/pages/game/GamePage'
import Header from './components/Header'

export default function App() {
  const [headerHeadline, setHeaderHeadline] = useState('Rick and Morty')

  const location = useLocation()

  useEffect(() => {
    let headline = capitalizeFirstLetter(location.pathname.substring(1))
    location.pathname === '/' && (headline = 'Rick and Morty')
    setHeaderHeadline(headline)
  }, [location.pathname])

  return (
    <div className="App">
      <Header text={headerHeadline} />
      <Main>
        <Switch>
          <Route path="/locations">
            <LocationPage />
          </Route>
          <Route path="/characters">
            <CharactersPage />
          </Route>
          <Route path="/episodes">
            <EpisodesPage />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <NavigationStartPage />
          </Route>
        </Switch>
      </Main>
    </div>
  )
}

const Main = styled.main`
  padding-bottom: 70px;
  padding-top: 80px;
`

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
