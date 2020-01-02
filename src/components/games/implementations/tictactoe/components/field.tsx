import React from 'react';
import MemoizedCell from './cell';

interface Props {
    field: any[],
    turnClick: (index: number) => void
}

const Field = ({field, turnClick}: Props) => {
    return (
        <div className={'field'}>
            {field.map((cell: any, i) => {
                return <MemoizedCell
                    key={i}
                    index={i}
                    click={(index) => turnClick(index)}
                    type={cell.type}
                />
            })}
        </div>
    );
};

export default Field;
