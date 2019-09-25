import React from 'react';
import GuideIcon from './guideIcon'
import Guidetext from './guideText'
import GuideButtons from './guideButtons'

import './App.css';

class Guide extends React.Component {
  render() {
    return (
        <div >
          <div className='guideline'>
            <GuideIcon/>
            <Guidetext/>
            <GuideButtons/>          
          </div>
        </div>
    );
  }
}

export default Guide;
