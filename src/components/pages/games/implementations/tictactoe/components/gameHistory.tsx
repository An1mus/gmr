import React from 'react';

import Turn from './turn';
import styled from 'styled-components';

const GameHistoryContainer = styled.div`
    margin-left: 2rem;
`;

interface Props {
    winHistory: string[]
}

const GameHistory = ({winHistory} : Props) => {
    return (
        <GameHistoryContainer>
            {
                winHistory.length > 0
                    ?
                        <div>
                            <h3>History:</h3>
                            {winHistory.map((el, i) => (<Turn stepType={el} key={i} message={'won'}/>))}
                        </div>
                    :
                        <h3>No one won yet!</h3>
            }
        </GameHistoryContainer>
    );
};

export default GameHistory;
