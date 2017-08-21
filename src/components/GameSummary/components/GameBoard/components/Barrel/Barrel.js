import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import './Barrel.css';

const Barrel = (WrappedComponent) => {
    return class SizedBarrel extends Component {
        constructor(props) {
            super(props);

            this.state = { pour: 'empty' };
            this.selectPour = this.selectPour.bind(this);
            this.handlePour = this.handlePour.bind(this);
            this.clearBarrel = this.clearBarrel.bind(this);
        }

        selectPour = event => this.setState({pour: event.target.value});

        clearBarrel = () => this.props.updateFromSelf(0);

        handlePour() {
            switch (this.state.pour) {
                case 'fill':
                    this.props.updateFromSelf(this.props.size === 3 ? 3 : 5);
                    break;
                case 'fill-from-other':
                    this.props.updateFromOther();
                    break;
                default:
                    this.props.updateFromSelf(0);
            }
        }

        render() {
            return (
                <Flexbox flexDirection={'column'} className="barrel-small-margin">
                    <Flexbox flexGrow={1}>
                        <WrappedComponent {...this.props} />
                    </Flexbox>
                    <Flexbox flexGrow={1}>
                        <select className="barrel-input-select" disabled={this.props.disablePour} onChange={this.selectPour} value={this.state.pour}>
                            <option value="empty">Empty</option>
                            <option value="fill">Fill</option>
                            <option value="fill-from-other">Fill From Other Jug</option>
                        </select>
                        <button className="barrel-btn" disabled={this.props.disablePour} onClick={this.handlePour}>POUR</button>
                    </Flexbox>
                </Flexbox>
            );
        }
    }
}

Barrel.propTypes = {
    amount: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    disablePour: PropTypes.bool,
    updateFromSelf: PropTypes.func,
    updateFromOther: PropTypes.func
}

export default Barrel;
