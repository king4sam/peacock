import React, { useState } from 'react';
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

  const modalIcon =
    gStatus === gameStatus.win ? (
      <img
        className="modalIcon"
        src="peacockOpen.png"
        height="80px"
        style={{ opacity: 0.8 }}
        alt="peacockOpen"
      />
    ) : (
      <img
        className="modalIcon"
        src="peacockClose.png"
        height="80px"
        style={{ opacity: 0.8 }}
        alt="peacockClose"
      />
    );
  const modalContent =
    gStatus === gameStatus.win ? (
      <p className="modalContent">
        {winWord.split('\n').map(it => (
          <div key={nanoid()}>{it}</div>
        ))}
      </p>
    ) : (
      <p className="modalContent">
        {loseWord.split('\n').map(it => (
          <div key={nanoid()}>{it}</div>
        ))}
      </p>
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
      <div>
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
    setGStatus(msgArray[msgArray.length - 1].gameStatus);
  }

  if (gStatus === gameStatus.win) {
    // alert('win');
  } else if (gStatus === gameStatus.lose) {
    // alert('lost');
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
            window.location.href = '/mainGame';
          }}
        >
          RESTART
        </button>
      </ReactModal>
    </div>
  );
};

export default MainGame;
