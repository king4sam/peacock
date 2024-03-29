/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import nanoid from 'nanoid';
import GameMessage from './gameMessage';
import api from './service/api';
import lineMap, {
  questionStatus,
  gameStatus,
  winWord,
  loseWord,
  winSlogan,
  loseSlogan,
} from './lines';

import './mainGame.css';

export const clickContextStore = React.createContext(null);
export const answerStatusStore = React.createContext(null);

function shuffle(a) {
  const res = [...a];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: `rgba(255, 255, 255, 0.8)`,
  },
};

ReactModal.setAppElement('#root');

const rootQuestion = lineMap.get(1);

const MainGame = () => {
  console.log('process.env', process.env);
  const [answerStatus, setAsnwerStatus] = useState(false);
  const [clickStatus, setClickStatus] = useState(false);
  const [msgArray, setMsgArray] = useState([
    { ...rootQuestion, choices: shuffle(rootQuestion.choices) },
  ]);
  const [gStatus, setGStatus] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });

  const modalButton =
    gStatus === gameStatus.win ? (
      <button
        className="modalButton modalButtonWin"
        type="button"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Got It
      </button>
    ) : (
      <button
        className="modalButton modalButtonLose"
        type="button"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        RESTART
      </button>
    );

  const modalIcon =
    gStatus === gameStatus.win ? (
      <img
        className="modalIcon"
        src="peacockOpen.png"
        height="120px"
        width="154px"
        style={{ opacity: 0.6, marginTop: '48px' }}
        alt="peacockOpen"
      />
    ) : (
      <img
        className="modalIcon"
        src="peacockClose.png"
        height="130px"
        width="68px"
        style={{ opacity: 0.6, marginTop: '48px' }}
        alt="peacockClose"
      />
    );
  const modalContent =
    gStatus === gameStatus.win ? (
      <div className="modalContent">
        {winWord.split('\n').map(it => (
          <div key={nanoid()}>{it}</div>
        ))}
      </div>
    ) : (
      <div className="modalContent">
        {loseWord.split('\n').map(it => (
          <div key={nanoid()}>{it}</div>
        ))}
      </div>
    );

  const modalSlogan =
    gStatus === gameStatus.win ? (
      <div className="winSlogan">{winSlogan}</div>
    ) : (
      <div className="loseSlogan">{loseSlogan}</div>
    );

  function sendData(e, choice) {
    setClickStatus(false);
    console.log('clickStatus', clickStatus);
    console.log('choice', e);
    console.log(lineMap.get(choice));
    // console.log('state', this.state);
    console.log(
      'new ',
      lineMap.get(msgArray[msgArray.length - 1].choices[choice])
    );
    const nextQuestion = lineMap.get(
      msgArray[msgArray.length - 1].choices[choice]
    );
    setMsgArray([
      ...msgArray.slice(0, msgArray.length - 1),
      {
        ...msgArray[msgArray.length - 1],
        questionStatus: questionStatus.continue,
      },
      { ...nextQuestion, choices: shuffle(nextQuestion.choices) },
    ]);
  }

  function renderAry(messages = []) {
    console.log('get asnwerStatus', answerStatus);
    const typing = answerStatus ? (
      <div className="msgToMe">
        <img alt="typing" height="72px" src="typing.gif" />
      </div>
    ) : null;
    return (
      <div style={{ marginTop: '48px' }}>
        {messages.map(ele => (
          <GameMessage key={nanoid()} handler={sendData} question={ele} />
        ))}
        {typing}
      </div>
    );
  }

  if (msgArray[msgArray.length - 1].gameStatus && gStatus === 0) {
    // console.log(
    //   msgArray[msgArray.length - 1].question +
    //     msgArray[msgArray.length - 1].gameStatus
    // );
    setTimeout(async () => {
      console.log('ready to send request');
      if (msgArray[msgArray.length - 1].gameStatus === gameStatus.win) {
        await api.active();
      } else {
        await api.inactive();
      }
      setGStatus(msgArray[msgArray.length - 1].gameStatus);
    }, 1000);
  }

  return (
    <answerStatusStore.Provider value={{ answerStatus, setAsnwerStatus }}>
      <clickContextStore.Provider value={{ clickStatus, setClickStatus }}>
        <div>
          <div className="gameBox">
            <p className="gameTitle">Peacock</p>
            {renderAry(msgArray)}
          </div>
          <ReactModal
            isOpen={!!gStatus}
            contentLabel="onRequestClose Example"
            onRequestClose={() => {
              window.location.href = '/mainGame';
            }}
            style={customStyles}
          >
            <div className="modalWindow">
              {modalIcon}
              {modalSlogan}
              {modalContent}
            </div>
            {modalButton}
          </ReactModal>
        </div>
      </clickContextStore.Provider>
    </answerStatusStore.Provider>
  );
};

export default MainGame;
