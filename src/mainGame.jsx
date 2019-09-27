import React, { useState } from 'react';
// import ReactModal from 'react-modal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import nanoid from 'nanoid';
import GameMessage from './gameMessage';
import lineMap, { questionStatus, gameStatus } from './lines';

const MainGame = () => {
  const [msgArray, setMsgArray] = useState([lineMap.get(1)]);
  const [gStatus, setGStatus] = useState(0);

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
        <p className="gameTitle">To Peacock</p>
        {renderAry(msgArray)}
      </div>
      <div>{gStatus}</div>
      <Modal
        show={gStatus}
        onHide={() => {
          window.location.href = '/mainGame';
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you&apos;re reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              window.location.href = '/mainGame';
            }}
          >
            Restart
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <ReactModal
        isOpen={!!gStatus}
        contentLabel="onRequestClose Example"
        // onRequestClose={this.handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <p>Modal text!</p>
        <button
          type="button"
          onClick={() => {
            window.location.href = '/mainGame';
          }}
        >
          Restart
        </button>
      </ReactModal> */}
    </div>
  );
};

export default MainGame;
