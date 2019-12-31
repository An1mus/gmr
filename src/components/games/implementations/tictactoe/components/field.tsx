import React from 'react';
import Cell from './cell';

interface Props {
    field: any[],
    turnClick: (index: number) => void
}

/**
 * TODO: Add Field type and Cell type
 */
const Field = ({field, turnClick}: Props) => {
    return (
        <div className={'field'}>
            {field.map((cell: any, i) => {
                return <Cell
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
