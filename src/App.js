import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LocationPage from './components/pages/locations/LocationPage'
import EpisodesPage from './components/pages/episodes/EpisodesPage'
import CharactersPage from './components/pages/characters/CharactersPage'
import NavigationStartPage from './components/NavigationStartPage'
import styled from 'styled-components'
import Game from './components/pages/game/GamePage'
import Header from './components/Header'

export default function App() {
  const [activePage, setActivePage] = useState('Rick and Morty')

  return (
    <Router>
      <div className="App">
        <Header text={activePage} />
        <Main>
          <Switch>
            <Route path="/locations">
              <LocationPage setHeadline={setActivePage} />
            </Route>
            <Route path="/characters">
              <CharactersPage setHeadline={setActivePage} />
            </Route>
            <Route path="/episodes">
              <EpisodesPage setHeadline={setActivePage} />
            </Route>
            <Route path="/game">
              <Game setHeadline={setActivePage} />
            </Route>
            <Route path="/">
              <NavigationStartPage />
            </Route>
          </Switch>
        </Main>
      </div>
    </Router>
  )
}

const Main = styled.main`
  padding-bottom: 70px;
  padding-top: 80px;
`
