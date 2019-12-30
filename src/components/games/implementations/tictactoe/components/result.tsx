import React from 'react';

import { GAME_STATES } from '../common';

interface Props {
    gameState: string,
    refresh: () => void,
}

const GameResult = ({gameState, refresh}: Props) => {
    const MESSAGES = {
        [GAME_STATES.CIRCLES_WON]: 'Circles won this game, crosses suck.',
        [GAME_STATES.CROSS_WON]: 'Crosses won, deal with it.',
        [GAME_STATES.FIELD_FULL]: 'Oh come on, can\'t any of you win?'
    };
    return (
        <>
            <p>{MESSAGES[gameState]}</p>
            <button onClick={() => refresh()}>Play again</button>
        </>
    );
};

export default GameResult;
