import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BombTimer.css';

const defaultTimer = { secondsRemaining: 90, secondsTimeStr: '1:30' };
class BombTimer extends Component {
    constructor(props) {
        super(props);

        this.state = defaultTimer;

        this.tick = this.tick.bind(this);
        this.convertIntervalToTimeStr = this.convertIntervalToTimeStr.bind(this);
    }

    componentDidMount = () => this.interval = setInterval(this.tick, 1000);
    componentWillUnmount = () => clearInterval(this.interval);

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.endTimer && !this.props.endTimer) {
            this.setState(defaultTimer);
            this.interval = setInterval(this.tick, 1000);
        }

        if (!prevProps.endTimer && this.props.endTimer) {
            this.setState({ secondsRemaining: 0, secondsTimeStr: '0:00' });
            clearInterval(this.interval);
        }
    }

    convertIntervalToTimeStr(timeInSec) {
        const minutes = Math.floor(timeInSec / 60);
        const seconds = timeInSec - minutes * 60;

        let timeString = '';
        if (seconds < 10) timeString = minutes.toString() + ':0' + seconds.toString();
        else timeString = minutes.toString() + ':' + seconds.toString();

        return timeString;
    }

    tick() {
        this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
        this.setState({ secondsTimeStr: this.convertIntervalToTimeStr(this.state.secondsRemaining) });

        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
            this.props.timeExpired();
        }
    }

    render() {
        return (
            <b>{this.state.secondsTimeStr}</b>
        );
    }
}

BombTimer.propTypes = {
    onTimeExpired: PropTypes.func,
    endTimer: PropTypes.bool
}

export default BombTimer;
