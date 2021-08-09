import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import './App.scss';

import Header from 'components/Header';
import Home from 'pages/Home'
import Job from 'pages/Job'
import Skill from 'pages/Skill'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/job" component={Job} />
          <Route path="/skill" component={Skill} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
