import React, { Component } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import './GameSummary.css';
import fountain from './diehardfount.jpg';
import explosion from './diehardexplosion.png';
import happyend from './diehardhappyend.jpg';

const gameSummaryDefault = {summaryImgSrc: fountain, youWon: false, youLost: false};
class GameSummary extends Component {
    constructor(props) {
        super(props);

        this.state = gameSummaryDefault;
        
        this.youWin = this.youWin.bind(this);
        this.youLose = this.youLose.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    youWin = () => this.setState({ summaryImgSrc: happyend, youWon: true, youLost: false });
    youLose = () => this.setState({ summaryImgSrc: explosion, youWon: false, youLost: true });

    resetBoard() {
        this.setState(gameSummaryDefault);
    }

    render() {
        return (
            <div className="game-summary">
                <img className="fount" src={this.state.summaryImgSrc} alt="Die Hard 3" height="242" />
                {!this.state.youWon && !this.state.youLost &&
                    <p>
                        You must place exactly four gallons of water on the bomb's scale before time runs out.
                        <br /> The left jug is three gallons large, the right jug is five gallons large.
                        <br /> Run out of time and the bomb will explode!
                        <br /> Place the wrong amount on the scale and the bomb will explode!
                        <br />
                        
                    </p>
                }
                {this.state.youLost &&
                    <p>The city block has been decimated. Game Over!</p>
                }
                {this.state.youWon &&
                    <p>YIPPEE-KI-YAY MOTHAF*KA!!</p>
                }
                {(this.state.youWon || this.state.youLost) &&
                    <div>
                        <br /> <i>Hint: There are two possible ways to solve this riddle</i>
                        <br />
                        <button onClick={this.resetBoard}>TRY AGAIN?</button>
                    </div>
                }
                <GameBoard youWin={this.youWin} youLose={this.youLose} gameOver={this.state.youWon || this.state.youLost} />
            </div>
        );
    }
}

export default GameSummary;
