import React from 'react';

interface Props {
    index: number,
    type: string,
    click: ((index: number) => void),
}

const Cell =({index, type, click }: Props) => {
    return (
        <>
            <button
                onClick={() => click(index)}
                className={'cell'}
            >
                {type}
            </button>
        </>
    );
};

export default Cell;
