import React from 'react';
import nanoid from 'nanoid';
import PropTypes from 'prop-types';

import { guidePageTwoText, guidePageText } from './lines';

const GuideText = props => {
  const { page } = props;
  const context =
    page === 1
      ? guidePageText.split('\n').map(it => <div key={nanoid()}>{it}</div>)
      : guidePageTwoText.split('\n').map(it => <div key={nanoid()}>{it}</div>);
  return (
    <div className="guideText">
      <div className="guideContent">{context}</div>
    </div>
  );
};

export default GuideText;

GuideText.propTypes = {
  page: PropTypes.number.isRequired,
};
