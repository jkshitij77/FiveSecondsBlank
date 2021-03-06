import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './Contact.js';
import Meettheteam from './Meettheteam';
import Home from './Home';
import Gallery from './Gallery'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/MeetTheTeam" component={Meettheteam}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/Gallery" component={Gallery}></Route>
      </Switch>
    </Router>
  );
}

export default App;
