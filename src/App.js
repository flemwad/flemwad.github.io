import React, { Component } from 'react';
import GameSummary from './components/GameSummary/GameSummary'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h2>Die Hard 3 Jug Riddle</h2>
                <GameSummary />
            </div>
        );
    }
}

export default App;
