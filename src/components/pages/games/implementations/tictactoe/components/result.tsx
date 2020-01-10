import React from 'react';

import { CELL_TYPES, GAME_STATES } from '../common';
import {ReactComponent as Circle} from '../../../../../../assets/in-game-icons/tic-tac-toe/circle.svg';
import {ReactComponent as Cross} from '../../../../../../assets/in-game-icons/tic-tac-toe/cross.svg';

import styled from 'styled-components';
import Turn from './turn';

const GameResultContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
`;

const PlayAgainButton = styled.button`
    border: 0.1rem solid var(--main-highlight-font-color); 
    background-color: var(--secondary-highlight-font-color);
    color: var(--main-highlight-font-color); 
    cursor: pointer;
    outline: none;
    transition: all .3s;    
    padding: 0.8rem 1.3rem;
    margin-left: 1rem;
    
    &:hover{
        background-color: var(--main-highlight-font-color); 
        color: var(--secondary-highlight-font-color); 
    }
`;

interface Props {
    gameState: string,
    refresh: () => void,
    stepType: string
}

const GameResult = ({refresh, stepType}: Props) => {
    return (
        <GameResultContainer>
            <Turn stepType={stepType} message={'is next'}/>
            <PlayAgainButton onClick={() => refresh()}>Play again</PlayAgainButton>
        </GameResultContainer>
    );
};

export default GameResult;
