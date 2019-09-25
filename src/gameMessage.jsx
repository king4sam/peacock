/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import lines, { gameStatus, questionStatus } from './lines';

class GameMessage extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
  }

  render() {
    let msg;
    const {
      props: { question, handler },
    } = this;
    console.log(this.props);
    if (
      question.gameStatus === undefined &&
      question.questionStatus === questionStatus.notAnswerYet
    ) {
      msg = (
        <div>
          <p className="msgFromMe">{question.question}</p>
          <p className="msgToMe">{question.response}</p>
          <p className="msgFromMe choiceTitle">your choices</p>
          <p
            choice="1"
            onClick={e => handler(e, 0)}
            className="msgFromMe choice"
          >
            {lines.get(question.choices[0]).question}
          </p>
          <p
            choice="2"
            onClick={e => handler(e, 1)}
            className="msgFromMe choice"
          >
            {lines.get(question.choices[1]).question}
          </p>
          <p
            choice="3"
            onClick={e => handler(e, 2)}
            className="msgFromMe choice"
          >
            {lines.get(question.choices[2]).question}
          </p>
        </div>
      );
    } else {
      msg = (
        <div>
          <p className="msgFromMe">{question.question}</p>
          <p className="msgToMe">{question.response}</p>
        </div>
      );
    }

    return (
      <div key={`${question.question}jfhiaus`} className="gameMsg">
        {msg}
      </div>
    );
  }
}

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
