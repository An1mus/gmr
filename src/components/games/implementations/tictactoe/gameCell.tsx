import React from 'react';

interface Props {
    type: string,
}

const GameCell = ({type}: Props) => {
    return (
        <>
            {type}
        </>
    );
};

export default GameCell;
