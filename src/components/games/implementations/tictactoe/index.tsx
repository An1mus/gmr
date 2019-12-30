import React, { useEffect, useState } from 'react';

import './styles/index.css';

import { CELL_TYPES, GAME_STATES, WINING_PATTERNS } from './common';
import Field from './components/field';
import GameResult from './components/result';

const TicTacToe = () => {
    const emptyField = new Array(9).fill({type: CELL_TYPES.EMPTY});

    let [field, setField] = useState(emptyField);
    let [gameState, setGameState] = useState(GAME_STATES.PLAYING);
    let [stepType, setStepType] = useState(CELL_TYPES.CROSS);

    // TODO: use memoization
    // TODO: add game history component
    useEffect(() => {
        const reducedState = field.reduce((p, el) => p + el.type, '');

        const circles: string = reducedState.split(CELL_TYPES.CROSS).join('.').split(CELL_TYPES.EMPTY).join('.');
        const crosses: string = reducedState.split(CELL_TYPES.CIRCLE).join('.').split(CELL_TYPES.EMPTY).join('.');
        const fieldFull = reducedState.indexOf(CELL_TYPES.EMPTY) < 0;
        console.log(circles, WINING_PATTERNS[circles]);
        console.log(crosses, WINING_PATTERNS[crosses]);

        const gameWon = WINING_PATTERNS[circles] || WINING_PATTERNS[crosses];

        if (gameWon) return setGameState(gameWon);
        if (fieldFull) return setGameState(GAME_STATES.FIELD_FULL);

    }, [field]);

    const turnClick = (index: number): void => {
        if (gameState !== GAME_STATES.PLAYING) return;

        setField([...field.map((el, i) => {
            if (i === index && el.type === CELL_TYPES.EMPTY) {
                setStepType(stepType === CELL_TYPES.CROSS ? CELL_TYPES.CIRCLE : CELL_TYPES.CROSS);
                return {type: stepType}
            }
            return el;
        })]);
    };

    const refreshGame = () => {
        setField(emptyField);
        setGameState(GAME_STATES.PLAYING)
    };

    return (
        <>
            <Field field={field} turnClick={turnClick}/>
            <GameResult stepType={stepType} gameState={gameState} refresh={refreshGame}/>
        </>
    );
};

export default TicTacToe;
