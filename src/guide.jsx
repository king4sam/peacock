import React, { useState } from 'react';
import GuideIcon from './guideIcon';
import Guidetext from './guideText';
import GuideButtons from './guideButtons';

import './guide.css';

const Guide = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="guideline">
        <div className="guidelineFloatingBox">
          <GuideIcon page={page} />
          <Guidetext page={page} />
        </div>
        <GuideButtons handler={setPage} page={page} />
      </div>
    </div>
  );
};

export default Guide;
