import React, { Component } from 'react';
import './Bomb.css';

class Bomb extends Component {
    render() {
        return (
            <div className="bombdiv">
                {/* TODO make this dynamic */}
                <b>0:00</b>
            </div>
        );
    }
}

export default Bomb;
