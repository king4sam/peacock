import React from 'react';
import PropTypes from 'prop-types';
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
            <img
              alt="leftarrwo"
              height="44px"
              width="88px"
              src="./left-arrow.svg"
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
            <img
              alt="leftarrwo"
              height="44px"
              width="88px"
              src="./right-arrow.svg"
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
            <img
              alt="leftarrwo"
              height="44px"
              width="88px"
              src="./left-arrow.svg"
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
