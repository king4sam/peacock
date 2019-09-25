import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class GuideButtons extends React.Component {
  render() {
    return (
      <div className="guideButtons">
        <Link className="guideButton" to="/guideOne">
          pre
        </Link>
        <Link className="guideButton" to="/mainGame">
          next
        </Link>
      </div>
    );
  }
}

export default GuideButtons;
