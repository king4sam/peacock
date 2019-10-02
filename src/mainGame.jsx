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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    'text-align': 'center',
  },
  overlay: {
    backgroundColor: `rgba(255, 255, 255, 0.8)`,
  },
};

ReactModal.setAppElement('#root');

const MainGame = () => {
  const [msgArray, setMsgArray] = useState([lineMap.get(1)]);
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
        style={{ opacity: 0.6, 'margin-top': '40px', 'margin-bottom': '40px' }}
        alt="peacockOpen"
      />
    ) : (
      <img
        className="modalIcon"
        src="peacockClose.png"
        height="104px"
        width="54px"
        style={{ opacity: 0.6, 'margin-top': '40px', 'margin-bottom': '40px' }}
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
    console.log('choice', choice);
    console.log(lineMap.get(choice));
    // console.log('state', this.state);
    console.log('update ary ', {
      ...msgArray[msgArray.length - 1],
      questionStatus: questionStatus.continue,
    });
    console.log(
      'new ',
      lineMap.get(msgArray[msgArray.length - 1].choices[choice])
    );
    setMsgArray([
      ...msgArray.slice(0, msgArray.length - 1),
      {
        ...msgArray[msgArray.length - 1],
        questionStatus: questionStatus.continue,
      },
      lineMap.get(msgArray[msgArray.length - 1].choices[choice]),
    ]);
  }

  function renderAry(messages = []) {
    return (
      <div style={{ 'margin-top': '48px' }}>
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
  );
};

export default MainGame;
