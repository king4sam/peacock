/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import nanoid from 'nanoid';
import GameMessage from './gameMessage';
import lineMap, {
  questionStatus,
  gameStatus,
  winWord,
  loseWord,
} from './lines';

import './mainGame.css';

export const clickContextStore = React.createContext(null);

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
  const [clickStatus, setClickStatus] = useState(false);
  const [msgArray, setMsgArray] = useState([
    { ...rootQuestion, choices: shuffle(rootQuestion.choices) },
  ]);
  const [gStatus, setGStatus] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });

  const modalIcon =
    gStatus === gameStatus.win ? (
      <img
        className="modalIcon"
        src="peacockOpen.png"
        height="100px"
        width="128px"
        style={{ opacity: 0.6, marginTop: '40px' }}
        alt="peacockOpen"
      />
    ) : (
      <img
        className="modalIcon"
        src="peacockClose.png"
        height="104px"
        width="54px"
        style={{ opacity: 0.6, marginTop: '40px' }}
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
    return (
      <div style={{ marginTop: '48px' }}>
        {messages.map(ele => (
          <GameMessage key={nanoid()} handler={sendData} question={ele} />
        ))}
      </div>
    );
  }

  if (msgArray[msgArray.length - 1].gameStatus && gStatus === 0) {
    // console.log(
    //   msgArray[msgArray.length - 1].question +
    //     msgArray[msgArray.length - 1].gameStatus
    // );
    setTimeout(() => {
      setGStatus(msgArray[msgArray.length - 1].gameStatus);
    }, 1000);
  }

  return (
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
            {modalContent}
          </div>

          <button
            className="modalButton"
            type="button"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            RESTART
          </button>
        </ReactModal>
      </div>
    </clickContextStore.Provider>
  );
};

export default MainGame;
