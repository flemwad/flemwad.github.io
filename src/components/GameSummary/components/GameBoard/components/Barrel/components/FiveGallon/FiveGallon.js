import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barrel from '../../Barrel';
import empty from './empty5.png';
import oneGal from './1gal5.png';
import twoGal from './2gal5.png';
import threeGal from './3gal5.png';
import fourGal from './4gal5.png';
import full from './fullgal5.png';
import './FiveGallon.css';

class FiveGallon extends Component {
    constructor(props) {
        super(props);
        this.state = {imageSrc: empty};
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
                this.setState({ imageSrc: threeGal });
                break;
            case 4:
                this.setState({ imageSrc: fourGal });
                break;
            case 5:
                this.setState({ imageSrc: full });
                break;
            default:
                this.setState({ imageSrc: empty });
        }
    }

    render() {
        return (
            <img src={this.state.imageSrc} alt="Five Gallon Jug" title="Five Gallon Jug" />
        );
    }
}

FiveGallon.propTypes = {
    amount: PropTypes.number.isRequired
}

export default Barrel(FiveGallon);
