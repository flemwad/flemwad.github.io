import React, { Component } from 'react';
import Barrel from './components/Barrel/Barrel';
import BarrelInput from './components/BarrelInput/BarrelInput';
import Bomb from './components/Bomb/Bomb';
import BombInput from './components/BombInput/BombInput';
import './GameBoard.css';

class GameBoard extends Component {
    render() {
        return (
            <table>
                <tr>
                    <td>
                        <Barrel />
                    </td>
                    <td>
                        <Bomb />
                    </td>
                    <td>
                        <Barrel />
                    </td>
                </tr>
                <tr>
                    <td>
                        <BarrelInput />
                    </td>
                    <td>
                        <BombInput />
                    </td>
                    <td>
                        <BarrelInput />
                    </td>
                </tr>
            </table>
        );
    }
}

export default GameBoard;