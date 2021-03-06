import React from 'react';
import PropTypes from 'prop-types';

export const WIN_TEXT = 'Congratulations, you Won! Click reset to play again.';

const Board = props => (
    <div className="root">
        <div className="grid-container">{props.lights}</div>
        <p>{props.numMoves}</p>
        <button data-testid="reset" onClick={props.reset}>
            Reset
        </button>
        {props.hasWon && <div data-testid="win-div">{WIN_TEXT}</div>}
    </div>
);

Board.propTypes = {
    lights: PropTypes.array,
    numMoves: PropTypes.number,
    reset: PropTypes.func,
    hasWon: PropTypes.bool,
};

export default Board;
