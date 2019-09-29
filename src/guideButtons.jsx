import React from 'react';
import PropTypes from 'prop-types';

const GuideButtons = props => {
  const { page, handler } = props;
  // const handleClick = () => {};
  return (
    <div className="guideButtons">
      {page === 1 ? (
        <>
          <button type="button" className="guideButton" disabled="disabled">
            pre
          </button>
          <div className="divider" />
          <button
            type="button"
            className="guideButton"
            onClick={() => {
              handler(page + 1);
            }}
          >
            next
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="guideButton"
            onClick={() => {
              handler(page + -1);
            }}
          >
            pre
          </button>
          <div className="divider" />
          <button
            type="button"
            className="guideButton"
            onClick={() => {
              window.location.href = '/mainGame';
            }}
          >
            start
          </button>
        </>
      )}
    </div>
  );
};

export default GuideButtons;

GuideButtons.propTypes = {
  page: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
