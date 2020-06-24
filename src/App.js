import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from './Contact.js';
import Meettheteam from './Meettheteam';
import Home from './Home';

// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactDOM from 'react-dom';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/MeetTheTeam" component={Meettheteam}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
