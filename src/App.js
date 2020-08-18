import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import EpisodesPage from './components/pages/Episodes/EpisodesPage'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/locations">
            <h1>Locations</h1>
          </Route>
          <Route path="/characters">
            <h1>Characters</h1>
          </Route>
          <Route path="/episodes">
            <EpisodesPage />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>

        <Navigation />
      </div>
    </Router>
  )
}
