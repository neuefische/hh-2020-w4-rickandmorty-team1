import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import LocationPage from './components/pages/LocationPage'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/locations">
            <LocationPage />
          </Route>
          <Route path="/characters">
            <h1>Characters</h1>
          </Route>
          <Route path="/episodes">
            <h1>Episodes</h1>
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
