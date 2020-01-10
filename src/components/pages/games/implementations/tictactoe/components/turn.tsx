import styled from 'styled-components';
import { CELL_TYPES, GAME_STATES } from '../common';
import { ReactComponent as Circle } from '../../../../../../assets/in-game-icons/tic-tac-toe/circle.svg';
import { ReactComponent as Cross } from '../../../../../../assets/in-game-icons/tic-tac-toe/cross.svg';
import React from 'react';

const TurnContainer = styled.div`
    align-items: center;
    display: flex;

    svg {
        fill: var(--main-highlight-font-color);
        margin-right: 1rem;
        width: 1.5rem;
    }
`;

const Turn = ({stepType, message}: any) => {
    console.log(stepType);
    const TURN_TYPE_ICONS = {
        [CELL_TYPES.CIRCLE]: () => (<Circle />),
        [GAME_STATES.CIRCLES_WON]: () => (<Circle />),
        [CELL_TYPES.CROSS]: () => (<Cross />),
        [GAME_STATES.CROSS_WON]: () => (<Cross />),
        [GAME_STATES.FIELD_FULL]:  () => (<p>It was even...</p>)
    };

    const iconType = TURN_TYPE_ICONS[stepType]();

    return (
        <TurnContainer>
            {iconType}
            <p>{message}</p>
        </TurnContainer>
    );
};

export default Turn;
