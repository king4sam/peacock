import React from 'react';
import PropTypes from 'prop-types';

const GuideText = props => {
  const { page } = props;
  const context = page === 1 ? 'page1' : 'page2';
  return (
    <div className="guideText">
      <p className="guideContent">{context}</p>
    </div>
  );
};

export default GuideText;

GuideText.propTypes = {
  page: PropTypes.number.isRequired,
};
