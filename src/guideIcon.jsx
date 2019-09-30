import React from 'react';

import './guide.css';

export const GuideIcon = () => {
  return (
    <div className="guideIcon">
      <img
        className="guidelineIcon"
        src="peacockOpen.png"
        height="42"
        width="42"
        style={{ opacity: 0.6 }}
        alt="peacock"
      />
    </div>
  );
};

export default GuideIcon;
