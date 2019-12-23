import React from 'react';

import { Link } from 'react-router-dom';

import Game from './container';

import TicTacToe from './implementations/tictactoe';

const Games = () => {
    const links = [
        {
            url: '/tic-tac-toe',
            title: 'Tic Tac Toe'
        }
    ];
    return (
        <>
            <h2>Games available:</h2>

            {links.map(link => (<Link to={link.url}>{link.title}</Link>))}
        </>
    );
};

export default Games;
