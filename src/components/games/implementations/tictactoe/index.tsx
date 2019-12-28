import React, { useEffect, useState } from 'react';

import './styles/index.css';

import Cell from './components/cell';

const TYPES = {
    EMPTY: ' ',
    CROSS: 'x',
    CIRCLE: 'o',
};

const GAME_STATES = {
    PLAYING: 'PLAYING',
    EVEN: 'EVEN',
    CIRCLES_WON: 'CIRCLES_WON',
    CROSS_WON: 'CROSS_WON',
};

const TicTacToe = () => {
    const emptyCell = {type: TYPES.EMPTY};
    const winPatterns: string[] = [
        'xxx......', '...xxx...', '.......xxx',
        'x..x..x..', '.x..x..x.', '..x..x..x',
        'x...x...x', '..x..x..x', 'ooo......',
        '...ooo...', '.......ooo', 'o..o..o..',
        '.o..o..o.', '..o..o..o', 'o...o...o',
        '..o..o..o'
    ];

    let [field, setField] = useState(new Array(9).fill(emptyCell));
    let [gameState, setGameState] = useState(GAME_STATES.PLAYING);
    let [stepType, setStepType] = useState(TYPES.CROSS);

    const turnClick = (index: number): void => {
        if(gameState !== GAME_STATES.PLAYING) return ;

        setField([...field.map((el, i) => {
            if (i === index && el.type === TYPES.EMPTY) {
                return {type: stepType}
            }
            return el;
        })]);

        setStepType(stepType === TYPES.CROSS ? TYPES.CIRCLE : TYPES.CROSS);
    };

    useEffect(() => {
        const reducedState = field.reduce((p, el) => p + el.type, '');

        // TODO: add checking
        setGameState(GAME_STATES.PLAYING);
    }, [field]);

    return (
        <>
            {gameState !== GAME_STATES.PLAYING && 'Game finished, someone won'}
            <div className={'field'}>
                {field.map((cell, i) => {
                    return <Cell
                        key={i}
                        index={i}
                        click={(index) => turnClick(index)}
                        type={cell.type}
                    />
                })}
            </div>
        </>
    );
};

export default TicTacToe;
