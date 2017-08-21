import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barrel from '../../Barrel';
import empty from './empty3.png';
import oneGal from './1gal3.png';
import twoGal from './2gal3.png';
import fullGal from './fullgal3.png';

class ThreeGallon extends Component {
    constructor(props) {
        super(props);
        this.state = {imageSrc: empty}
    }

    componentWillReceiveProps(nextProps, nextState) {
        switch(nextProps.amount) {
            case 1:
                this.setState({ imageSrc: oneGal });
                break;
            case 2:
                this.setState({ imageSrc: twoGal });
                break;
            case 3:
                this.setState({ imageSrc: fullGal });
                break;
            default:
                this.setState({ imageSrc: empty });
        }
    }

    render() {
        return (
            <img src={this.state.imageSrc} alt="Three Gallon Jug" title="Three Gallon Jug" />
        );
    }
}

ThreeGallon.propTypes = {
    amount: PropTypes.number.isRequired
}

export default Barrel(ThreeGallon);
