import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import ThreeGallonBarrel from './components/Barrel/components/ThreeGallon/ThreeGallon';
import FiveGallonBarrel from './components/Barrel/components/FiveGallon/FiveGallon';
import Bomb from './components/Bomb/Bomb';
import './GameBoard.css';

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            threeGallonAmt: 0,
            fiveGallonAmt: 0
        }

        this.setWinCondition = this.setWinCondition.bind(this);
        this.updateThreeGallonAmt = this.updateThreeGallonAmt.bind(this);
        this.updateFiveGallonAmt = this.updateFiveGallonAmt.bind(this);
        this.updateThreeFromFive = this.updateThreeFromFive.bind(this);
        this.updateFiveFromThree = this.updateFiveFromThree.bind(this);
    }

    /**
     * They placed the jug on the scale, determine if they win
     */
    setWinCondition = won => won ? this.props.youWin() : this.props.youLose();
    updateThreeGallonAmt = amount => this.setState({ threeGallonAmt: amount });
    updateFiveGallonAmt = amount => this.setState({ fiveGallonAmt: amount });

    /**
     * Update the Thre Gallon Barrel using the Five Gallon Barrel Amount
     */
    updateThreeFromFive() {
        if (this.state.threeGallonAmt === 3) return;

        const fillingAmt = 3 - this.state.threeGallonAmt;
        if (this.state.threeGallonAmt + this.state.fiveGallonAmt > 3) this.setState({ threeGallonAmt: 3 });
        else this.setState({ threeGallonAmt: this.state.threeGallonAmt + this.state.fiveGallonAmt });

        if (fillingAmt > this.state.fiveGallonAmt) this.setState({ fiveGallonAmt: 0 });
        else this.setState({ fiveGallonAmt: this.state.fiveGallonAmt - fillingAmt });
    }

    /**
     * Update the Five Gallon Barrel using the Three Gallon Barrel Amount
     */
    updateFiveFromThree() {
        if (this.state.fiveGallonAmt === 5) return;

        const fillingAmt = 5 - this.state.fiveGallonAmt;
        if (this.state.fiveGallonAmt + this.state.threeGallonAmt > 5) this.setState({ fiveGallonAmt: 5 });
        else this.setState({ fiveGallonAmt: this.state.fiveGallonAmt + this.state.threeGallonAmt });

        if (fillingAmt > this.state.threeGallonAmt) this.setState({ threeGallonAmt: 0 });
        else this.setState({ threeGallonAmt: this.state.threeGallonAmt - fillingAmt });
    }

    // TODO: Could probably HoC this and shrink the htmls
    renderSmallBoard() {
        return (
            <Flexbox flexDirection={'column'} alignItems={'center'} >
                <Flexbox flexGrow={1} justifyContent={'space-between'}>
                    <ThreeGallonBarrel
                        size={3}
                        disablePour={this.props.gameOver}
                        amount={this.state.threeGallonAmt}
                        updateFromSelf={this.updateThreeGallonAmt}
                        updateFromOther={this.updateThreeFromFive} />
                </Flexbox>
                <Flexbox flexGrow={1} justifyContent={'space-between'}>
                    <Bomb
                        fiveGallonAmt={this.state.fiveGallonAmt}
                        gameOver={this.props.gameOver}
                        setWinCondition={this.setWinCondition} />
                </Flexbox>
                <Flexbox flexGrow={1} justifyContent={'space-between'}>
                    <FiveGallonBarrel
                        size={5}
                        disablePour={this.props.gameOver}
                        amount={this.state.fiveGallonAmt}
                        updateFromSelf={this.updateFiveGallonAmt}
                        updateFromOther={this.updateFiveFromThree} />
                </Flexbox>
            </Flexbox>
        );
    }

    // TODO: Could probably HoC this and shrink the htmls
    renderLargeBoard() {
        return (
            <Flexbox flexDirection={'row'} alignItems={'baseline'} >
                <Flexbox flexGrow={1} justifyContent={'space-around'}>
                    <ThreeGallonBarrel
                        size={3}
                        disablePour={this.props.gameOver}
                        amount={this.state.threeGallonAmt}
                        updateFromSelf={this.updateThreeGallonAmt}
                        updateFromOther={this.updateThreeFromFive} />
                </Flexbox>
                <Flexbox flexGrow={1} justifyContent={'space-around'}>
                    <Bomb
                        fiveGallonAmt={this.state.fiveGallonAmt}
                        gameOver={this.props.gameOver}
                        setWinCondition={this.setWinCondition} />
                </Flexbox>
                <Flexbox flexGrow={1} justifyContent={'space-around'}>
                    <FiveGallonBarrel
                        size={5}
                        disablePour={this.props.gameOver}
                        amount={this.state.fiveGallonAmt}
                        updateFromSelf={this.updateFiveGallonAmt}
                        updateFromOther={this.updateFiveFromThree} />
                </Flexbox>
            </Flexbox>
        );
    }

    render() {
        return (
            <div className="flex-game-board">
                {/* TODO: MediaQuery structure can be HoC'd too */}
                <MediaQuery minDeviceWidth={770}>
                    <MediaQuery minWidth={770}>
                        {this.renderLargeBoard()}
                    </MediaQuery>
                    <MediaQuery maxWidth={770}>
                        {this.renderSmallBoard()}
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={770}>
                    {this.renderSmallBoard()}
                </MediaQuery>
            </div>
        );
    }
}

GameBoard.propTypes = {
    youWin: PropTypes.func,
    youLose: PropTypes.func,
    gameOver: PropTypes.bool
}

export default GameBoard;