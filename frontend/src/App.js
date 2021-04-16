import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './landingPage'
import JoinPlaylistPage from './joinPlaylistPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <LandingPage />
        </Route>

        <Route path="/joinplaylist">
          <JoinPlaylistPage />
        </Route>

        <Route path="*">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
