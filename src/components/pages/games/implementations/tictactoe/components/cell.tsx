import React from 'react';
import styled from 'styled-components';

import { CELL_TYPES } from '../common';

import {ReactComponent as Circle} from '../../../../../../assets/in-game-icons/tic-tac-toe/circle.svg';
import {ReactComponent as Cross} from '../../../../../../assets/in-game-icons/tic-tac-toe/cross.svg';

interface Props {
    index: number,
    type: string,
    click: ((index: number) => void),
}

const IconContainer = styled.div`
    padding: 1rem;
    height: 8rem;
    width: 8rem;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(7),
    &:nth-child(8){
        border-right: 0.3rem solid var(--main-highlight-font-color);
    }
    
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6){
        border-bottom: 0.3rem solid var(--main-highlight-font-color);
    }
    
    svg {
        fill: var(--main-highlight-font-color);
    }
`;

const Cell =({index, type, click }: Props) => {
    return (
        <>
            <IconContainer
                onClick={() => click(index)}
                className={'cell'}
            >
                {type === CELL_TYPES.CIRCLE ? <Circle /> : type === CELL_TYPES.CROSS ? <Cross /> : ''}
            </IconContainer>
        </>
    );
};

export default Cell;
