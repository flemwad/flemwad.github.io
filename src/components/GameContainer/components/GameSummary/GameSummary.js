import React, { Component } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import './GameSummary.css';
import fountain from './diehardfount.jpg';
import explosion from './diehardexplosion.png';
import happyend from './diehardhappyend.jpg';

class GameSummary extends Component {
    render() {
        return (
            <div className="game-summary">
                <img className="fount" src={fountain} alt="Die Hard 3" height="242" width="565" />
                <p>
                    You must place exactly four gallons of water on the scale before time runs out.
                    <br /> The left jug is three gallons large, the right jug is five gallons large.
                    <br /> Run out of time and the bomb will explode!
                    <br /> Place the wrong amount on the scale and the bomb will explode!
                </p>

                <GameBoard />
            </div>
        );
    }
}

export default GameSummary;
