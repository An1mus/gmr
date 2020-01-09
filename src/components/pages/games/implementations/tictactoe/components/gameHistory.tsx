import React from 'react';

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
                            <h3>Win History:</h3>
                            {winHistory.map((el, i) => (<p key={i}>{el}</p>))}
                        </div>
                    :
                        <h3>No one won yet!</h3>
            }
        </>
    );
};

export default GameHistory;
