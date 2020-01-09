import React, { useEffect, useState } from 'react';

import './styles/index.css';

import { CELL_TYPES, GAME_STATES, WINING_PATTERNS } from './common';
import Field from './components/field';
import GameResult from './components/result';
import GameHistory from './components/gameHistory';

const TicTacToe = () => {
    const emptyField = new Array(9).fill({type: CELL_TYPES.EMPTY});
    const [winHistory, setWinHistory] = useState<string[] | []>([]);
    const [field, setField] = useState(emptyField);
    const [gameState, setGameState] = useState(GAME_STATES.PLAYING);
    const [stepType, setStepType] = useState(CELL_TYPES.CROSS);

    useEffect(() => {
        const fieldString = field.reduce((p, el) => p + el.type, '');
        const fieldFull = fieldString.indexOf(CELL_TYPES.EMPTY) < 0;

        const gameWon = WINING_PATTERNS.find(pattern => (new RegExp(pattern.regExp)).test(fieldString));

        if (gameWon) {
            setWinHistory((prevState) => [...prevState, gameWon.winType]);
            setGameState(gameWon.winType);
        }

        if (fieldFull && !gameWon) {
            setWinHistory((prevState) => [...prevState, 'Even']);
            setGameState(GAME_STATES.FIELD_FULL);
        }

        return /*Component will unmount*/;

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
        <div className="game-container">
            <div>
                <GameResult stepType={stepType} gameState={gameState} refresh={refreshGame}/>
                <Field field={field} turnClick={turnClick}/>
            </div>
            <GameHistory winHistory={winHistory} />
        </div>
    );
};

export default TicTacToe;
