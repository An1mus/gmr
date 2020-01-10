import styled from 'styled-components';
import { CELL_TYPES, GAME_STATES } from '../common';
import { ReactComponent as Circle } from '../../../../../../assets/in-game-icons/tic-tac-toe/circle.svg';
import { ReactComponent as Cross } from '../../../../../../assets/in-game-icons/tic-tac-toe/cross.svg';
import React from 'react';

const TurnContainer = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 0.5rem;

    svg {
        fill: var(--main-highlight-font-color);
        margin-right: 0.5rem;
        width: 1.5rem;
    }
    
    p {
        margin: 0;
    }
`;


//TODO make this component solid on review
const Turn = ({stepType, message}: any) => {
    const TURN_TYPE_ICONS = {
        [CELL_TYPES.CIRCLE]: () => (<Circle />),
        [GAME_STATES.CIRCLES_WON]: () => (<Circle />),
        [CELL_TYPES.CROSS]: () => (<Cross />),
        [GAME_STATES.CROSS_WON]: () => (<Cross />),
        [GAME_STATES.FIELD_FULL]:  () => (<p>No one </p>)
    };

    const iconType = TURN_TYPE_ICONS[stepType]();

    return (
        <TurnContainer>
            { stepType !== GAME_STATES.FIELD_FULL
                ? <>{iconType}<p>{message}</p></>
                : <p> The game was even </p> }
        </TurnContainer>
    );
};

export default Turn;
