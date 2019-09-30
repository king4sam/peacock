/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Guide from './guide';
import MainGame from './mainGame';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="peacockApp">
        <Route path="/" exact component={Guide} />
        <Route path="/mainGame/" component={MainGame} />
        <Route path="/outCome/" component={MainGame} />
      </div>
    </Router>
  );
};

export default App;
