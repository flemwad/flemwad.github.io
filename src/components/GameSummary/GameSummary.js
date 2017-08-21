import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Flexbox from 'flexbox-react';
import GameBoard from './components/GameBoard/GameBoard';

import './GameSummary.css';
import fountain from './diehardfount.jpg';
import explosion from './diehardexplosion.png';
import happyend from './diehardhappyend.jpg';

const gameSummaryDefault = { summaryImgSrc: fountain, youWon: false, youLost: false };
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
    resetBoard = () => this.setState(gameSummaryDefault);

    render() {
        return (
            <Flexbox flexDirection={'column'} alignItems={'center'} className="game-summary">
                <Flexbox flexGrow={1} >
                    <img className="img-responsive summary-img" src={this.state.summaryImgSrc} alt="Die Hard 3" />
                </Flexbox>

                {/* Timer is running */}
                {!this.state.youWon && !this.state.youLost &&

                    <MediaQuery minWidth={770}>
                        {(matches) => {
                            const words = {
                                threePos: matches ? 'left' : 'top',
                                fivePos: matches ? 'right' : 'bottom'
                            }

                            return <Flexbox flexGrow={1} flexWrap={'wrap'}>
                                <p>
                                    You must place exactly four gallons of water on the bomb's scale before time runs out.
                                    <br /> The {words.threePos} jug is three gallons large, the {words.fivePos} jug is five gallons large.
                                    <br /> Run out of time and the bomb will explode!
                                    <br /> Place the wrong amount on the scale and the bomb will explode!
                                    <br />

                                </p>
                            </Flexbox>
                        }}
                    </MediaQuery>
                }

                {/* Win message */}
                {this.state.youLost &&
                    <Flexbox flexGrow={1} flexWrap={'wrap'}>
                        <p>The city block has been decimated. Game Over!</p>
                    </Flexbox>
                }

                {/* Lost message */}
                {this.state.youWon &&
                    <Flexbox flexGrow={1} flexWrap={'wrap'}>
                        <p>YIPPEE-KI-YAY MOTHAF*KA!!</p>
                    </Flexbox>
                }

                {/* Start over */}
                {(this.state.youWon || this.state.youLost) &&
                    <Flexbox flexGrow={1} flexDirection={'column'}>
                        <Flexbox flexGrow={1} justifyContent={'center'}>
                            <i>Hint: There are two possible ways to solve this riddle</i>
                        </Flexbox>
                        <Flexbox flexGrow={1} justifyContent={'center'}>
                            <button className="try-again" onClick={this.resetBoard}>TRY AGAIN?</button>
                        </Flexbox>
                    </Flexbox>
                }

                <Flexbox flexGrow={1} className="game-flex-box">
                    <GameBoard youWin={this.youWin} youLose={this.youLose} gameOver={this.state.youWon || this.state.youLost} />
                </Flexbox>
            </Flexbox>
        );
    }
}

export default GameSummary;
