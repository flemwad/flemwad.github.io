import React, { Component } from 'react';
import './BarrelInput.css';

class BarrelInput extends Component {
    render() {
        return (
            <div>
                <select>
                    <option>TODO</option>
                </select>
                <button c
                lassName="perf3jug" on-click="updateThreeGal(threeGalChoice)">GO</button>

                {/* TODO <select ng-model="fiveGalChoice">
                            <option ng-repeat="g in galChoices">{{g}}</option>
                        </select>
                        <button id="perf5jug" ng-click="updateFiveGal(fiveGalChoice)">GO</button>  */}
            </div>
        );
    }
}

export default BarrelInput;
