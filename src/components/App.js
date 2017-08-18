import React, { Component } from 'react';
import GameContainer from './GameContainer/GameContainer'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h2>Die Hard 3 Jug Riddle</h2>
                <GameContainer />
            </div>
        );
    }
}

export default App;
