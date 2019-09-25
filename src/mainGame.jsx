import React from 'react';

import GameMessage from './gameMessage';
import lineMap, { questionStatus } from './lines';

class MainGame extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
        this.state = {msgArray: [lineMap.get(1)]};
        }
    
    sendData(e, choice){
      // e.preventDefault()
      // e.persist()
      console.log('choice', choice)
      console.log(lineMap.get(choice));
      console.log('state', this.state)
      console.log('update ary ', {...this.state.msgArray[this.state.msgArray.length-1], questionStatus:questionStatus.continue})
      console.log('new ', lineMap.get(this.state.msgArray[this.state.msgArray.length-1].choices[choice]))
      this.setState({msgArray: [
        ...this.state.msgArray.slice(0,this.state.msgArray.length-1),
        {...this.state.msgArray[this.state.msgArray.length-1], questionStatus:questionStatus.continue},
        lineMap.get(this.state.msgArray[this.state.msgArray.length-1].choices[choice])
      ]}, ()=>{console.log('state', this.state)})
    }
    
    renderAry(messages = []){
        return (
            <div>
              {messages.map(ele=>
                <GameMessage key={ele.question+'123fua'} handler={this.sendData} question={ele}></GameMessage>
              )}
            </div>
        
        )
    }

  render() {
    return (
        <div >
            <p className="gameTitle">To Peacock</p>

            {this.renderAry(this.state.msgArray)}
        </div>
    );
  }
}

export default MainGame;
