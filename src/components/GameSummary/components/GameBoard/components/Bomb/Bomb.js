import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BombTimer from './components/BombTimer/BombTimer';
import './Bomb.css';

class Bomb extends Component {
    constructor(props) {
        super(props);

        this.checkIfWin = this.checkIfWin.bind(this);
    }

    checkIfWin = () => this.props.setWinCondition(this.props.fiveGallonAmt === 4);

    render() {
        return (
            <div>
                <div className="bomb-div" title="Da Bomb">
                    <BombTimer timeExpired={this.checkIfWin} endTimer={this.props.gameOver} />
                </div>
                <button className="try-jug" disabled={this.props.isGameOver} onClick={this.checkIfWin}>PLACE JUG</button>
            </div>
        );
    }
}

Bomb.propTypes = {
    fiveGallonAmt: PropTypes.number,
    gameOver: PropTypes.bool,
    handlePlaceBarrel: PropTypes.func,
    setWinCondition: PropTypes.func
}

export default Bomb;
