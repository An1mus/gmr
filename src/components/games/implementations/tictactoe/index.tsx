import React, { useState } from 'react';

import GameCell from './gameCell';

const TYPES = {
    EMPTY: 'EMPTY',
    CROSS: 'CROSS',
    CIRCLE: 'CIRCLE',
};

const TicTacToe = () => {
    const emptyCell = {type: TYPES.EMPTY};
    let [field, setField] = useState(new Array(9).fill(emptyCell));

    return (
        <>
            <div>
                {field.map((cell, i) => <GameCell key={i} type={cell.type}/>)}
            </div>
        </>
    );
};

export default TicTacToe;
