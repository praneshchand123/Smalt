import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage, JoinPlaylistPage, HomePage, HostPage } from './pages';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/joinplaylist">
          <JoinPlaylistPage />
        </Route>

        <Route path="/host">
          <HostPage />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="*">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
