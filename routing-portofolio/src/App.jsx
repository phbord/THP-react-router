import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import './App.scss';

import Navigation from 'components/Navigation';
import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Works from 'pages/Works'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/works" component={Works} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
