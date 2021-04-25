import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Home from './Home.js';

function App() {
  return (
    <Router>

          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/spotify-auth' component={Dashboard} />
          </Switch>

    </Router>
  );
}

export default App;