import React from 'react';
import Cell from './cell';
import styled from 'styled-components';

interface Props {
    field: any[],
    turnClick: (index: number) => void
}

const FieldContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 24rem;
`;

const Field = ({field, turnClick}: Props) => {
    return (
        <FieldContainer>
            {field.map((cell: any, i) => {
                return <Cell
                    key={i}
                    index={i}
                    click={(index) => turnClick(index)}
                    type={cell.type}
                />
            })}
        </FieldContainer>
    );
};

export default Field;
