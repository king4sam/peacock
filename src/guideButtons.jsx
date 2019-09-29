import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as RightArrow } from './right-arrow.svg';
import { ReactComponent as LeftArrow } from './left-arrow.svg';

const GuideButtons = props => {
  const { page, handler } = props;
  // const handleClick = () => {};
  return (
    <div className="guideButtons">
      {page === 1 ? (
        <>
          <button
            type="button"
            className="guideButtonDisable"
            disabled="disabled"
          >
            <LeftArrow
              alt="leftArrow"
              style={{
                height: '88px',
                width: '88px',
                path: { fill: 'yellow' },
              }}
              transform="scale(0.5)"
            />
          </button>
          <div className="divider" />
          <button
            type="button"
            className="guideButton"
            onClick={() => {
              handler(page + 1);
            }}
          >
            <RightArrow
              alt="RightArrow"
              style={{ height: '88px', width: '88px' }}
              transform="scale(0.5)"
            />
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
            <LeftArrow
              alt="leftArrow"
              style={{ height: '88px', width: '88px' }}
              transform="scale(0.5)"
            />
          </button>
          <button
            type="button"
            className="guideButtonStart"
            onClick={() => {
              window.location.href = '/mainGame';
            }}
          >
            Start
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
