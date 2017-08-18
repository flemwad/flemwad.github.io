import React, { Component } from 'react';
import './GameContainer.css';
import GameSummary from './components/GameSummary/GameSummary'

class GameContainer extends Component {
    render() {
        return (
            <div className="game-container">
                <GameSummary />
            </div>
        );
    }
}

export default GameContainer;
