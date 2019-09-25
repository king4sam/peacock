import React from 'react';

import lines, {gameStatus, questionStatus} from './lines'; 

class GameMessage extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
    }

  render() {
    let msg;
    console.log(this.props);
    if(this.props.question.questionStatus === questionStatus.notAnswerYet){
        msg = (
        <div >
            <p className="msgFromMe">{this.props.question.question}</p>
            <p className="msgToMe">{this.props.question.response}</p>
            <p className="msgFromMe choiceTitle">your choices</p>
            <p choice="1" onClick={(e)=>this.props.handler(e,0)} className="msgFromMe choice">{lines.get(this.props.question.choices[0]).question}</p>
            <p choice="2" onClick={(e)=>this.props.handler(e,1)} className="msgFromMe choice">{lines.get(this.props.question.choices[1]).question}</p>
            <p choice="3" onClick={(e)=>this.props.handler(e,2)} className="msgFromMe choice">{lines.get(this.props.question.choices[2]).question}</p>
        </div>
        )
    }
    else{
        msg = (
            <div>
                <p className="msgFromMe">{this.props.question.question}</p>
                <p className="msgToMe">{this.props.question.response}</p>
            </div>
        );
    }

    return (
      <div key={this.props.question.question+'jfhiaus'} className="gameMsg">
          {msg}
      </div>
    );
  }
}

export default GameMessage;
