import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Home from './Home.js';
import SpotifyRedirect from './SpotifyRedirect.js';

function App() {
  return (
    <Router>

          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/spotify-auth' component={SpotifyRedirect} />
          </Switch>

    </Router>
  );
}

export default App;