import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Guide from './guide';
import GuideTwo from './GuideTwo';
import MainGame from './mainGame';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="peacockApp">
          <Route path="/" exact component={Guide} />
          <Route path="/guideOne" exact component={Guide} />
          <Route path="/guideTwo/" component={GuideTwo} />
          <Route path="/mainGame/" component={MainGame} />
          <Route path="/outCome/" component={MainGame} />
        </div>
      </Router>
    );
  }
}

export default App;
