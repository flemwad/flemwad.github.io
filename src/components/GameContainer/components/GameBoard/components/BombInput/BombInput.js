import React, { Component } from 'react';
import './BombInput.css';

class BombInput extends Component {
    render() {
        return (
            <button className="tryjug" on-click="tryJug()">Place Jug</button>
        );
    }
}

export default BombInput;
