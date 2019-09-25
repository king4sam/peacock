import React from 'react';

import GameMessage from './gameMessage';
import lineMap, { questionStatus } from './lines';

class MainGame extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.state = { msgArray: [lineMap.get(1)] };
    this.render = this.render.bind(this);
  }

  sendData(e, choice) {
    const {
      state: { msgArray },
    } = this;
    console.log('choice', choice);
    console.log(lineMap.get(choice));
    console.log('state', this.state);
    console.log('update ary ', {
      ...msgArray[msgArray.length - 1],
      questionStatus: questionStatus.continue,
    });
    console.log(
      'new ',
      lineMap.get(msgArray[msgArray.length - 1].choices[choice])
    );
    this.setState(
      {
        msgArray: [
          ...msgArray.slice(0, msgArray.length - 1),
          {
            ...msgArray[msgArray.length - 1],
            questionStatus: questionStatus.continue,
          },
          lineMap.get(msgArray[msgArray.length - 1].choices[choice]),
        ],
      },
      () => {
        console.log('state', this.state);
      }
    );
  }

  renderAry(messages = []) {
    return (
      <div>
        {messages.map(ele => (
          <GameMessage
            key={`${ele.question}'123fua1`}
            handler={this.sendData}
            question={ele}
          />
        ))}
      </div>
    );
  }

  render() {
    const {
      state: { msgArray },
    } = this;
    console.log(msgArray);
    return (
      <div>
        <p className="gameTitle">To Peacock</p>

        {this.renderAry(msgArray)}
      </div>
    );
  }
}

export default MainGame;
