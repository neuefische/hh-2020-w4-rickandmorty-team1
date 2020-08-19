import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import LocationPage from './components/pages/locations/LocationPage'
import EpisodesPage from './components/pages/Episodes/EpisodesPage'
import CharactersPage from './components/pages/CharactersPage'
import styled from 'styled-components'

export default function App() {
  return (
    <Router>
      <div className="App">
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
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </Main>

        <Navigation />
      </div>
    </Router>
  )
}

const Main = styled.main`
  padding-bottom: 70px;
`
