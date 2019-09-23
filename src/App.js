import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="peacockApp">
      <div className='guideline'>
        <img className="guidelineIcon" src="peacockOpen.png" height="42" width="42"></img>
        <p className='guidetext'>在這個風風雨雨欸社會</p>
        <button type="button" disabled="disabled">pre</button>
        <button type="button">next</button>
      </div>
    </div>
  );
}

export default App;
