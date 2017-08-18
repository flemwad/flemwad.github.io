import React from 'react';
import ReactDOM from 'react-dom';
import GameSummary from './GameSummary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameSummary />, div);
});
