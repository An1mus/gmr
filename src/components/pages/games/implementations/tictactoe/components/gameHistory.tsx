import React from 'react';

import Turn from './turn';

interface Props {
    winHistory: string[]
}

const GameHistory = ({winHistory} : Props) => {
    return (
        <>
            {
                winHistory.length > 0
                    ?
                        <div>
                            <h3>History:</h3>
                            {winHistory.map((el, i) => (<Turn stepType={el} key={i} message={'Won'}/>))}
                        </div>
                    :
                        <h3>No one won yet!</h3>
            }
        </>
    );
};

export default GameHistory;
