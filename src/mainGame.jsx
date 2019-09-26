import React, { useState } from 'react';

import GameMessage from './gameMessage';
import lineMap, { questionStatus } from './lines';

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
          <GameMessage
            key={`${ele.question}'123fua1`}
            handler={sendData}
            question={ele}
          />
        ))}
      </div>
    );
  }

  if (msgArray[msgArray.length - 1].gameStatus && gStatus === 0) {
    alert(
      msgArray[msgArray.length - 1].question +
        msgArray[msgArray.length - 1].gameStatus
    );
    setGStatus(msgArray[msgArray.length - 1].gameStatus);
  }

  return (
    <div>
      <div className="gameBox">
        <p className="gameTitle">To Peacock</p>
        {renderAry(msgArray)}
      </div>
      <div>{gStatus}</div>
    </div>
  );
};

export default MainGame;
