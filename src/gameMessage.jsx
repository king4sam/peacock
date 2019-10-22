/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { clickContextStore, answerStatusStore } from './mainGame';

import lines, { questionStatus } from './lines';

import './mainGame.css';

const DELAY = 3900;

const GameMessage = props => {
  const { clickStatus, setClickStatus } = useContext(clickContextStore);
  const { setAsnwerStatus } = useContext(answerStatusStore);
  let msg;
  const { question, handler } = props;
  console.log('question', question);
  if (
    question.gameStatus === undefined &&
    question.questionStatus === questionStatus.notAnswerYet
  ) {
    console.log('if');
    msg = (
      <>
        {question.question && question.response ? (
          <>
            <div className="msgFromMe">
              {<p className="msgText roundText">{question.question}</p>}
            </div>
            <div className="msgToMe">
              {<p className="msgText">{question.response}</p>}
            </div>
          </>
        ) : (
          undefined
        )}
        <div className="choicesGroup">
          <p className="msgFromMe choiceTitle">選擇對話</p>
          <div
            choice="1"
            role="button"
            tabIndex="0"
            onClick={
              clickStatus
                ? null
                : e => {
                    setClickStatus(true);
                    setAsnwerStatus(true);
                    setTimeout(() => {
                      handler(e, 0);
                      setAsnwerStatus(false);
                    }, DELAY);
                  }
            }
            className="msgFromMe choice"
          >
            {
              <div className="choiceText">
                {lines.get(question.choices[0]).question}
              </div>
            }
          </div>
          <div
            choice="2"
            role="button"
            tabIndex="-1"
            onClick={
              clickStatus
                ? null
                : e => {
                    setClickStatus(true);
                    setAsnwerStatus(true);
                    setTimeout(() => {
                      setAsnwerStatus(false);
                      handler(e, 1);
                    }, DELAY);
                  }
            }
            className="msgFromMe choice"
          >
            {
              <p className="choiceText">
                {lines.get(question.choices[1]).question}
              </p>
            }
          </div>
          <div
            choice="3"
            role="button"
            tabIndex="-2"
            onClick={
              clickStatus
                ? null
                : e => {
                    setClickStatus(true);
                    setAsnwerStatus(true);
                    setTimeout(() => {
                      setAsnwerStatus(false);
                      handler(e, 2);
                    }, DELAY);
                  }
            }
            className="msgFromMe choice"
          >
            {
              <p className="choiceText lastChoiceText">
                {lines.get(question.choices[2]).question}
              </p>
            }
          </div>
        </div>
      </>
    );
  } else {
    msg = (
      <>
        {question.question && question.response ? (
          <>
            <div className="msgFromMe">
              {<p className="msgText roundText">{question.question}</p>}
            </div>
            <div className="msgToMe">
              {<p className="msgText">{question.response}</p>}
            </div>
          </>
        ) : (
          undefined
        )}
      </>
    );
  }
  return (
    <div key={`${question.question}jfhiaus`} className="gameMsg">
      {<div className="msgText">{msg}</div>}
    </div>
  );
};

GameMessage.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    response: PropTypes.string,
    gameStatus: PropTypes.number,
    questionStatus: PropTypes.number,
    choices: PropTypes.array,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default GameMessage;
