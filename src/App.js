import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import NavigationStartPage from './components/NavigationStartPage'

import CharactersPage from './components/pages/CharactersPage'
import StartPage from './components/pages/StartPage'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/locations">
          <h1>Hello</h1>
        </Route>
        <Switch>
          <Route path="/locations">
            <h1>Locations</h1>
          </Route>
          <Route path="/characters">
            <CharactersPage />
          </Route>
          <Route path="/episodes">
            <h1>Episodes</h1>
            <Navigation />
          </Route>
          <Route path="/">
            <NavigationStartPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
