import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import CharactersPage from './components/pages/CharactersPage'

export default function App() {
  //const [activePage, setActivePage] = useState('Home')

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/locations">
            <h1>Locations</h1>
          </Route>
          <Route path="/characters">
            <CharactersPage />
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
