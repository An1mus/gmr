import React, { useEffect, useState } from 'react';

import './index.css';

import Cell from './cell';

const TYPES = {
    EMPTY: ' ',
    CROSS: 'x',
    CIRCLE: 'o',
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
    let [isFinished, setFinished] = useState(false);
    let [stepType, setStepType] = useState(TYPES.CROSS);

    const turnClick = (index: number): void => {
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

        setFinished(!!winPatterns.find(el => {
            return (new RegExp(el)).test(reducedState);
        }));
    }, [field]);

    return (
        <>
            {isFinished && 'Game finished, someone won'}
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
